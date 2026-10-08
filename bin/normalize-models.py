#!/usr/bin/env python3
"""Normalize generated model types the Nium spec gets wrong.

The spec lists some enums as one comma-separated string such as 'ASC, DESC', leaves a space
before some values such as ' go', and repeats some values. The generator copies all three
into the model enums. This splits joined values, trims each value, and drops repeated values.
Members whose value does not change keep the generator's name; new members are named the way
the generator names them. Values with '<', '>' or a number range get names that keep that
meaning, such as LessThan1000 and _1000To5000, instead of the generator's _1000 and _10005000.

It also types JSON array fields the generator declared as Set<T> as Array<T>.
"""
import re
from pathlib import Path

ENUM = re.compile(r"(export const \w+ = \{\n)(.*?)(\n\} as const;)", re.S)
MEMBER = re.compile(r"^\s+(\w+): '([^']*)',?$")


SYMBOLIC = re.compile(r"[<>]|\d-\d")


def member_name(value):
    spelled = re.sub(r"(?<=\d)-(?=\d)", " to ", value).replace("<", "less than ").replace(">", "more than ")
    words = [w for w in re.split(r"[^A-Za-z0-9]+", spelled) if w]
    name = "".join(w.capitalize() if w.isupper() or w.isdigit() else w[0].upper() + w[1:] for w in words)
    return f"_{name}" if name[:1].isdigit() else name


def normalize_enum(match):
    head, body, tail = match.groups()
    members = [MEMBER.match(line) for line in body.split("\n")]
    if not all(members):
        return match.group(0)
    normalized = {}
    for m in members:
        name, raw = m.groups()
        for value in (v.strip() for v in raw.split(",")):
            if value and value not in normalized:
                normalized[value] = name if value == raw and not SYMBOLIC.search(value) else member_name(value)
    if [(n, v) for v, n in normalized.items()] == [m.groups() for m in members]:
        return match.group(0)
    names = list(normalized.values())
    if len(set(names)) != len(names):
        raise RuntimeError(f"Normalized enum member names collide: {names}")
    lines = [f"    {n}: '{v}'" for v, n in normalized.items()]
    return head + ",\n".join(lines) + "," + tail


changed = 0
for path in sorted(Path("model").glob("*.ts")):
    content = path.read_text()
    updated = re.sub(r"(?<=: )Set<", "Array<", ENUM.sub(normalize_enum, content))
    if updated != content:
        path.write_text(updated)
        changed += 1
print(f"Normalized {changed} model files")
