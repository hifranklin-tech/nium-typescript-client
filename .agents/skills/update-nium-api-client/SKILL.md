---
name: update-nium-api-client
description: Update the generated Nium TypeScript client to a requested public OpenAPI version. Use when regenerating the Nium client, preparing its release, or verifying its compiled package.
---

# Update Nium API client

## 1. Establish the target

- Confirm the requested public OpenAPI version.
- Read `AGENTS.md`, `bin/generate.sh`, `bin/post-generate.sh`, and `package.json`.
- Confirm the public spec fetched by `bin/generate.sh` reports the requested `info.version`. The script downloads `main`; stop and explain if `main` does not match the requested version.

Completion: the requested version and the generated spec version are the same.

## 2. Generate

- Confirm `openapi-generator version` succeeds. If it is unavailable, ask the user to install it with `brew install openapi-generator`.
- Run `./bin/generate.sh`.
- Set the package version to the requested version:

  ```sh
  npm pkg set version=<version>
  ```

- If README lacks generation prerequisites, add the Homebrew installation command and the generation command.

Completion: generated source reflects the requested public spec and `package.json` has the matching version.

## 3. Verify the package

Run:

```sh
npm install
npm run build
npm pack
```

- Confirm the tarball name and embedded version match the target.
- Inspect the generated diff and retain only generated client changes and directly supporting documentation.
- Do not commit a newly created `package-lock.json` when the repository does not track one. Keep the tarball out of the commit; it is a release asset.

Completion: the build succeeds and a correctly versioned tarball exists.

## 4. Commit and publish

- Commit the generated upgrade on a branch named `upgrade-to-v<version>`.
- Push the branch.
- When the request includes a release, create and push annotated tag `v<version>`, then create a GitHub release with the packed tarball attached.
- Verify the release is published and its asset is present.
- Remove the local tarball after release verification.

Completion: the requested commit, branch, and—when requested—tag and release exist remotely.

## 5. Submit for review

When a pull request is requested, scope the generated update as one mechanical delivery outcome. Generated client source, documentation, and matching package version belong together; split only when the repository has a concrete policy requiring it.

Completion: the pull request targets the repository default branch and records the build and package checks.
