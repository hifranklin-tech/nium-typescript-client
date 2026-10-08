#!/usr/bin/env python3
"""Split enum values the Nium spec lists as one comma-separated string.

The spec describes some enums as a single string such as 'ASC, DESC', so the generator emits
one member whose value is the whole list. This rewrites each such member into one member per
value, named the way the generator names members, and leaves every other enum unchanged.
"""
import re
from pathlib import Path

ENUM = re.compile(r"(export const \w+ = \{\n)(.*?)(\n\} as const;)", re.S)
MEMBER = re.compile(r"^\s+(\w+): '([^']*)',?$")


def member_name(value):
    words = [w for w in re.split(r"[^A-Za-z0-9]+", value) if w]
    name = "".join(w.capitalize() if w.isupper() or w.isdigit() else w[0].upper() + w[1:] for w in words)
    return f"_{name}" if name[:1].isdigit() else name


def split_enum(match):
    head, body, tail = match.groups()
    members = [MEMBER.match(line) for line in body.split("\n")]
    if not all(members) or not any("," in m.group(2) for m in members):
        return match.group(0)
    values = []
    for m in members:
        for value in (v.strip() for v in m.group(2).split(",")) if "," in m.group(2) else [m.group(2)]:
            if value and value not in values:
                values.append(value)
    names = [member_name(v) for v in values]
    if len(set(names)) != len(names):
        raise RuntimeError(f"Split enum member names collide: {names}")
    lines = [f"    {n}: '{v}'" for n, v in zip(names, values)]
    return head + ",\n".join(lines) + "," + tail


changed = 0
for path in sorted(Path("model").glob("*.ts")):
    content = path.read_text()
    updated = ENUM.sub(split_enum, content)
    if updated != content:
        path.write_text(updated)
        changed += 1
print(f"Split comma-joined enums in {changed} model files")
