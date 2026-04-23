#!/usr/bin/env bash
set -e

SPEC_URL="https://raw.githubusercontent.com/nium-global/nium-openapi/main/nium.yaml"
SPEC_FILE="./vendor/nium-openapi/nium.yaml"

echo "Downloading latest Nium OpenAPI spec..."
mkdir -p "$(dirname "$SPEC_FILE")"
curl -fsSL "$SPEC_URL" -o "$SPEC_FILE"

echo "Generating nium-client from OpenAPI spec..."

openapi-generator generate \
  --generator-name typescript-axios \
  --input-spec "$SPEC_FILE" \
  --output . \
  --package-name=nium \
  --skip-validate-spec \
  --global-property apiTests=false,modelTests=false \
  --additional-properties="withNodeImports=false" \
  --additional-properties="withSeparateModelsAndApi=true" \
  --additional-properties="npmName=nium-client" \
  --additional-properties="apiPackage=api" \
  --additional-properties="modelPackage=model" \
  --additional-properties="useSingleRequestParameter=true"

echo "Running post-generation cleanup..."
./bin/post-generate.sh

echo "Done!"
