MAYUR NIRKHE — REFERENCE-LED REDESIGN
This update implements the requested editorial portfolio direction:
dark oversized hero with portrait and floating graphic accents; bright white,
numbered services; dark framed project gallery; centered dark About section;
and bold contact CTA. Existing Angular routes, project/service pages, SEO pages,
assets, contact component, package.json, Netlify files and content are retained.

Run from this folder in PowerShell:
  npm install
  npm start

If the legacy Angular 12 webpack build shows ERR_OSSL_EVP_UNSUPPORTED:
  $env:NODE_OPTIONS='--openssl-legacy-provider'
  npm start

Preview at http://localhost:4200. Check all routes and forms before pushing to GitHub.
Do not overwrite the live site until you approve the local preview.
