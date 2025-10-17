<!-- .github/copilot-instructions.md
Guidance for AI coding assistants working on the animated-mac-book-website
-->

# Quick context

- This is a single-page React app scaffolded for Vite. Entry is `src/main.jsx` and the top-level UI lives in `src/App.jsx`.
- The project combines standard React components (in `src/components`) with a 3D viewer using `@react-three/fiber` and `@react-three/drei` (`src/components/ProductViewer.tsx`, `src/components/three/*`).
- Global state for the 3D viewer is a small zustand store in `src/store/index.js`.

# What to know up front (big picture)

- App structure: `App.jsx` composes the page by rendering `Navbar`, `Hero`, `ProductViewer` (3D canvas), `Showcase`, `Performance`, `Features`, `Highlights`, and `Footer`.
- 3D/Canvas boundaries: The three.js scene is self-contained inside `ProductViewer.tsx`. Lighting and models are split into `three/StudioLights.jsx` and `three/ModelsSwitcher.jsx`. Models live in `src/components/models/`.
- Animations: GSAP is used across the project to animate both DOM and three.js objects (see `src/components/three/ModelsSwitcher.jsx` and `ProductViewer.tsx` CameraRig usage). Prefer reusing existing GSAP timelines/utility patterns.

# Developer workflows & commands

- Start dev server with HMR: `npm run dev` (runs `vite`).
- Build for production: `npm run build` (runs `vite build`).
- Preview a build: `npm run preview`.
- Lint: `npm run lint` (runs `eslint .`). ESLint config is at the repository root (`eslint.config.js`).

If editing or adding React/JSX files, keep the file extension consistent with the component type (`.jsx` or `.tsx`). The repo uses TypeScript only for `ProductViewer.tsx`; most other files are `.jsx`.

# Project-specific conventions and patterns

- CSS: Tailwind is used (config via `tailwindcss` plugin in `vite.config.js`). Styling is inline via className utility classes.
- Component naming: Components live under `src/components` and use PascalCase filenames that match their default export (e.g., `ProductViewer.tsx` → default export `ProductViewer`).
- 3D models: The three.js models are React components under `src/components/models/` (e.g., `Macbook-14.jsx`). Treat these as self-contained mesh groups — changes should avoid renaming internal mesh nodes unless updating `Constants.noChangeParts`.
- Constants and media: Centralized in `src/Constants/index.js`. Import from there when possible (e.g., `features`, `featureSequence`, `performanceImages`).
- Global state: Minimal and focused on 3D viewer props — `color`, `scale`, `texture`, and `reset`. Use `useMacBookStore` (default export from `src/store/index.js`) rather than ad-hoc React context.

# Integration points & external deps to be aware of

- react-three ecosystem: `@react-three/fiber`, `@react-three/drei`. Canvas props and camera animation patterns are handled inside `ProductViewer.tsx`.
- GSAP: Used for both DOM and three.js animations. Many helper utility patterns rely on mutating three.js objects (e.g., material.opacity). When animating three.js objects, ensure `material.transparent = true` before animating opacity (see `ModelsSwitcher.jsx`).
- zustand store: small, serialized state — avoid adding large or complex derivatives to the store; keep it lean.

# Safe edits and common change patterns

- Adding new features UI: Add presentational components under `src/components/` and import them in `App.jsx` near the appropriate section. Follow existing composition order.
- Modifying 3D camera/animations: Edit `ProductViewer.tsx` CameraRig or `ModelsSwitcher.jsx`. When changing camera properties, update any GSAP timelines that call `camera.updateProjectionMatrix()`.
- Updating assets: Media paths are imported in `src/Constants/index.js`. Prefer adding assets under `src/assets/apple/` and then referencing them via `Constants`.

# Files and examples to reference

- Entry and composition: `src/main.jsx`, `src/App.jsx`
- 3D viewer and camera: `src/components/ProductViewer.tsx` (CameraRig + Canvas)
- 3D utilities: `src/components/three/ModelsSwitcher.jsx`, `src/components/three/StudioLights.jsx`
- Global store: `src/store/index.js`
- Asset/constants: `src/Constants/index.js`
- Build & dev commands: `package.json` scripts

# What NOT to change without coordination

- Don't rename or remove mesh node names used by `noChangeParts` in `src/Constants/index.js` — some parts are intentionally excluded from tinting/fading.
- Avoid replacing the entire `ProductViewer.tsx` with a different 3D approach unless performance or functionality requires it. Small, incremental changes are easier to validate.

# If you need to run the app locally (powershell example)

```powershell
npm install
npm run dev
```

# Quick troubleshooting notes

- Heavy rebuilds: The repo enables the React compiler plugin; dev builds can be slower. If a change doesn't appear, try restarting the dev server.
- Common runtime errors: missing assets imports or typoed component paths. Use the browser console and Vite terminal logs to trace module resolution errors.

---

If anything above is unclear or you want me to expand examples (e.g., show typical GSAP timeline snippets in this project or list mesh names from `src/components/models/Macbook.jsx`), tell me which area to expand.
