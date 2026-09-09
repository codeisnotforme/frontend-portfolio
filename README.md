# Frontend Portfolio

[![CI](https://github.com/your-username/your-repo/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/your-repo/actions/workflows/ci.yml)

This is the frontend app for the portfolio project.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

## Required quality gates

This project is protected before code is pushed or merged:

- ESLint must pass
- TypeScript typecheck must pass
- Next.js production build must pass
- Prettier formatting must pass
- Husky hooks enforce checks locally
- GitHub Actions runs the same validation on pull requests

Run the full validation locally:

```bash
npm run check
```

## GitHub workflow

All pull requests must pass the CI check before merge. The repository is configured to block unapproved code locally and through GitHub automation.

## Project scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm run format
npm run check
```
