#!/usr/bin/env bash
set -e

# Preserve proven request shapes where the upstream schema describes arrays as strings or sets.
python3 <<'PY'
from pathlib import Path

replacements = {
    "model/expected-account-credit.ts": [
        ("'topRemitters'?: Set<string>;", "'topRemitters'?: Array<string>;"),
        ("'topTransactionCountries'?: Set<string>;", "'topTransactionCountries'?: Array<string>;"),
    ],
    "model/expected-account-usage.ts": [
        ("'intendedUses'?: string;", "'intendedUses'?: Array<string>;"),
    ],
    "model/product-document-detail.ts": [
        (
            " */\n\n\n\n/**\n * Details of the uploaded document.",
            " */\n\n\n// May contain unused imports in some cases\n// @ts-ignore\nimport type { ProductDocument } from './product-document';\n\n/**\n * Details of the uploaded document.",
        ),
        ("'document'?: string;", "'document'?: Array<ProductDocument>;"),
    ],
    "model/product-business-details.ts": [
        (
            "import type { RevenueInfo } from './revenue-info';",
            "import type { RevenueInfo } from './revenue-info';\n// May contain unused imports in some cases\n// @ts-ignore\nimport type { ProductStakeholders } from './product-stakeholders';\n// May contain unused imports in some cases\n// @ts-ignore\nimport type { ProductTaxDetails } from './product-tax-details';",
        ),
        ("'applicantDetails': ProductApplicantDetails;", "'applicantDetails'?: ProductApplicantDetails;"),
        ("'stakeholders'?: string;", "'stakeholders'?: Array<ProductStakeholders>;"),
        ("'taxDetails'?: string;", "'taxDetails'?: Array<ProductTaxDetails>;"),
    ],
    "model/product-nature-of-business.ts": [
        ("'industryCodes'?: string;", "'industryCodes'?: Array<string>;"),
    ],
    "model/remittance-transactions-request-dto.ts": [
        (
            "import type { RemitterRequestDTO } from './remitter-request-dto';",
            "import type { RemitterRequestDTO } from './remitter-request-dto';\n// May contain unused imports in some cases\n// @ts-ignore\nimport type { RemittanceTransactionsRequestDTOBeneficiary } from './remittance-transactions-request-dtobeneficiary';",
        ),
        ("'beneficiary': string;", "'beneficiary': RemittanceTransactionsRequestDTOBeneficiary;"),
    ],
    "model/index.ts": [
        (
            "export * from './product-business-details';\nexport * from './product-business-details2';",
            "export * from './product-business-details';\nexport * from './product-business-details2';\nexport * from './product-business-partner';",
        ),
        (
            "export * from './product-professional-details';",
            "export * from './product-professional-details';\nexport * from './product-stakeholder-details';\nexport * from './product-stakeholders';",
        ),
        (
            "export * from './remittance-transactions-request-dto';",
            "export * from './remittance-transactions-request-dto';\nexport * from './remittance-transactions-request-dtobeneficiary';",
        ),
    ],
}

for file_name, file_replacements in replacements.items():
    path = Path(file_name)
    content = path.read_text()
    for old, new in file_replacements:
        if old not in content:
            raise RuntimeError(f"Expected generated text not found in {file_name}: {old}")
        content = content.replace(old, new, 1)
    path.write_text(content)
PY

# Split enums the spec lists as one comma-separated string into their separate values.
python3 bin/split-joined-enums.py

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

sed -i.bak '/import.*URL.*URLSearchParams.*from.*url/d' common.ts
rm -f common.ts.bak

for file in api/*.ts; do
  if [ -f "$file" ]; then
    sed -i.bak '/import.*URL.*URLSearchParams.*from.*url/d' "$file"
    rm -f "$file.bak"
  fi
done

echo "✅ Post-generation fixes applied"
