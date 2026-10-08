#!/usr/bin/env python3
"""Normalize generated model types the Nium spec gets wrong.

The spec lists some enums as one comma-separated string such as 'ASC, DESC', leaves a space
before some values such as ' go', and repeats some values, and the generator copies all three
into the model enums. It also names values that start with a digit or symbol with a leading
underscore, such as _200Ok for '200 OK' and _10005000 for '1000-5000'.

Each such enum is rewritten: joined values are split, values are trimmed, repeats are dropped,
and every key repeats its value. HTTP statuses keep only their text ('200 OK' is OK), '<' and '>'
are spelled LESS_THAN and MORE_THAN, a number range reads 1000_TO_5000, and a key that starts
with a digit is quoted. Every other enum keeps the generator's names.

It also types JSON array fields the generator declared as Set<T> as Array<T>.
"""
import re
from pathlib import Path

ENUM = re.compile(r"(export const \w+ = \{\n)(.*?)(\n\} as const;)", re.S)
MEMBER = re.compile(r"^\s+(\w+): '([^']*)',?$")
SYMBOLIC = re.compile(r"[<>]|\d-\d")
HTTP_STATUS = re.compile(r"\d{3} ([A-Za-z_ ]+)")


def member_key(value):
    status = HTTP_STATUS.fullmatch(value)
    text = status.group(1) if status else (
        re.sub(r"(?<=\d)-(?=\d)", "_TO_", value).replace("<", "LESS_THAN_").replace(">", "MORE_THAN_")
    )
    key = re.sub(r"[^A-Za-z0-9]+", "_", text).strip("_")
    return f"'{key}'" if key[:1].isdigit() else key


def needs_rewrite(members):
    values = [value for _, value in members]
    return (
        len(values) != len(set(values))
        or any("," in value or value != value.strip() or SYMBOLIC.search(value) for value in values)
        or any(name.startswith("_") for name, _ in members)
    )


def normalize_enum(match):
    head, body, tail = match.groups()
    parsed = [MEMBER.match(line) for line in body.split("\n")]
    if not all(parsed):
        return match.group(0)
    members = [m.groups() for m in parsed]
    if not needs_rewrite(members):
        return match.group(0)
    values = []
    for _, raw in members:
        for value in (v.strip() for v in raw.split(",")):
            if value and value not in values:
                values.append(value)
    keys = [member_key(v) for v in values]
    if len(set(keys)) != len(keys):
        raise RuntimeError(f"Normalized enum keys collide: {keys}")
    return head + ",\n".join(f"    {k}: '{v}'" for k, v in zip(keys, values)) + "," + tail


changed = 0
for path in sorted(Path("model").glob("*.ts")):
    content = path.read_text()
    updated = re.sub(r"(?<=: )Set<", "Array<", ENUM.sub(normalize_enum, content))
    if updated != content:
        path.write_text(updated)
        changed += 1
print(f"Normalized {changed} model files")
