# AGENTS.md

## Cursor Cloud specific instructions

This is a React (Create React App) personal portfolio site. Single service, no backend, no database.

### Running the dev server

```
npm start
```

Runs SCSS watcher and React dev server in parallel on port 3000. Routes: `/`, `/original`, `/minimalist`.

### Lint / format / test

- **Format check:** `npx prettier --check .` (pre-existing formatting issues exist in the repo)
- **Tests:** `npx react-scripts test --watchAll=false --passWithNoTests` (no test files currently exist)
- **Build:** `npm run build` (compiles SCSS then builds React)

### Non-obvious notes

- `npm start` uses `npm-run-all -p` to run both `sass --watch` and `react-scripts start` in parallel. If one process dies, the other continues; restart the full command if the SCSS watcher stops.
- The SCSS must be compiled before the React build or dev server can work correctly. `npm start` handles this automatically, but if running `react-scripts start` directly, first run `npm run build-sass`.
- Images are fetched at runtime from Firebase Cloud Storage. They will load normally with internet access; without it, the app renders but images are missing.
- The `format` script in `package.json` references `yarn prettier` but the project uses npm. Use `npx prettier` instead.
