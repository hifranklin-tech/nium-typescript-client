# Nium TypeScript Client

Generated TypeScript/Axios client for the [Nium API](https://docs.nium.com), built from the OpenAPI spec in `vendor/nium-openapi/`.

## Updating to a new Nium API version

1. Regenerate the client (this downloads the latest spec automatically):
   ```sh
   ./bin/generate.sh
   ```
2. Update the `version` in `package.json` to match the spec version (e.g. `2026.4.14`).
3. Build and verify:
   ```sh
   npm run build
   ```
4. If the build fails with missing type references, check `bin/post-generate.sh` — it has a fix for a known openapi-generator bug where `oneOf` discriminator types with a single variant aren't emitted. You may need to add new entries to the `PAIRS` array.

## Key files

- `bin/generate.sh` — downloads the spec from GitHub and runs openapi-generator
- `bin/post-generate.sh` — patches missing discriminator types
- `.openapi-generator-ignore` — prevents the generator from overwriting `package.json`
