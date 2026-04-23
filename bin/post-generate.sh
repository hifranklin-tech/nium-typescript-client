#!/usr/bin/env bash
set -e

# Fix missing oneOf discriminator type files.
# openapi-generator inlines oneOf types with a single variant instead of generating
# a separate file, but the discriminator union still references the type by name.

PAIRS=(
  "UsApplicantNonResidentKycRequest:UsApplicantNonResidentManualKycRequest"
  "UsIndividualCustomerNonResidentKycRequest:UsIndividualCustomerNonResidentManualKycRequest"
  "UsIndividualStakeholderNonResidentKycRequest:UsIndividualStakeholderNonResidentManualKycRequest"
)

for pair in "${PAIRS[@]}"; do
  type_name="${pair%%:*}"
  target="${pair##*:}"

  file_name=$(echo "$type_name" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
  target_file_name=$(echo "$target" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
  type_file="model/${file_name}.ts"

  # Create the missing type alias file
  if [ ! -f "$type_file" ]; then
    cat > "$type_file" <<EOF
/* tslint:disable */
/* eslint-disable */
import type { ${target} } from './${target_file_name}';

export type ${type_name} = ${target};
EOF
    echo "Created ${type_file}"
    sed -i.bak "s|export \* from './${target_file_name}';|export * from './${file_name}';\nexport * from './${target_file_name}';|" model/index.ts
    rm -f model/index.ts.bak
  fi

  # Add the missing import to any file that references the type without importing it
  for parent_file in model/*.ts; do
    if grep -q "${type_name}" "$parent_file" && ! grep -q "import.*${type_name}.*from" "$parent_file"; then
      sed -i.bak "s|import type { ${target} } from './${target_file_name}';|import type { ${type_name} } from './${file_name}';\nimport type { ${target} } from './${target_file_name}';|" "$parent_file"
      rm -f "$parent_file.bak"
    fi
  done
done

echo "✅ Post-generation fixes applied"
