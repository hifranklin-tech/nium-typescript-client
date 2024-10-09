#!/usr/bin/env bash
openapi-generator generate \
  --generator-name typescript-axios \
  --input-spec ./vendor/nium-openapi/nium.yaml \
  --output . \
  --package-name=nium \
  --skip-validate-spec \
  --global-property apiTests=false,modelTests=false \
  --additional-properties="withNodeImports=true" \
  --additional-properties="withSeparateModelsAndApi=true" \
  --additional-properties="npmName=nium-client" \
  --additional-properties="apiPackage=api" \
  --additional-properties="modelPackage=model" \
  --additional-properties="useSingleRequestParameter=true" \
