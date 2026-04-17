#!/usr/bin/env bash

# Remove Node.js-specific URL imports from generated files
# URL and URLSearchParams are global objects in modern browsers and should not be imported

echo "Removing Node.js-specific imports from generated files..."

# Remove the import statement from common.ts
sed -i.bak '/import.*URL.*URLSearchParams.*from.*url/d' common.ts
rm -f common.ts.bak

# Remove the import statement from all API files
for file in api/*.ts; do
  if [ -f "$file" ]; then
    sed -i.bak '/import.*URL.*URLSearchParams.*from.*url/d' "$file"
    rm -f "$file.bak"
  fi
done

echo "✅ Removed Node.js-specific imports successfully"

