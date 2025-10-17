# Animated MacBook Website

A single-page React + Vite app that showcases an animated 3D MacBook with synchronized feature videos and scroll-driven UI.

This repo uses React, Vite, Tailwind CSS and a small three.js scene built with `@react-three/fiber` and `@react-three/drei`.

Key highlights

- Top-level composition lives in `src/App.jsx` and the app is mounted via `src/main.jsx`.
- A 3D canvas (the viewer) is implemented in `src/components/ProductViewer.tsx`. Lighting, model switching and camera rigging are split into `src/components/three/*` and model components under `src/components/models/`.
- Global (viewer) state is a tiny zustand store in `src/store/index.js` (color, scale, texture, reset).

Requirements

- Node.js (16+ recommended)
- npm or yarn

Getting started

```powershell
npm install
npm run dev
```

Available scripts

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — build production bundle (vite build)
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint across the repo

Project structure (quick)

- `src/`
  - `main.jsx` — app entry
  - `App.jsx` — top-level composition (Navbar, Hero, ProductViewer, etc.)
  - `components/` — React components. Notable files:
    - `ProductViewer.tsx` — Canvas + CameraRig and viewer state connection
    - `three/ModelsSwitcher.jsx`, `three/StudioLights.jsx` — three.js helpers
    - `models/*` — model components (Macbook, Macbook-14, Macbook-16)
  - `Constants/index.js` — central assets, feature list, and constants (including `noChangeParts` used to avoid tinting certain mesh nodes)
  - `store/index.js` — zustand store for color, scale and texture

Conventions & patterns

- File extensions: Most components are `.jsx`. Only the viewer component is TypeScript (`.tsx`). Keep extensions consistent when adding files.
- Styling is Tailwind-first and applied via `className` utility strings.
- Animations: GSAP + ScrollTrigger is used for synchronized scroll-based animations. When animating three.js materials' opacity, set `material.transparent = true` before tweening opacity (see `src/components/three/ModelsSwitcher.jsx`).
- 3D boundaries: treat everything inside `ProductViewer.tsx` as the scene boundary. Avoid moving three.js logic outside the `three/` helper components unless necessary.

# Animated MacBook Website

A single-page React + Vite app that showcases an animated 3D MacBook with synchronized feature videos and scroll-driven UI.

Requirements

- Node.js (16+ recommended)
- npm or yarn

Developer checklist

- Install dependencies and start dev server (powershell):

```powershell
npm install
npm run dev
```

- Build for production:

```powershell
npm run build
npm run preview
```

- Quick lint:

```powershell
npm run lint
```

Quick tips

- 3D viewer: `src/components/ProductViewer.tsx` (camera rig + canvas). Keep three.js logic inside the `three/` helpers where possible.
- Assets & constants: add media under `src/assets/apple/` and reference them from `src/Constants/index.js`.
- State: viewer state is in `src/store/index.js` (use `useMacBookStore`).
- Mesh safety: do not rename mesh nodes listed in `Constants.noChangeParts` unless you update that constant.
- If HMR doesn't reflect a change, restart the dev server — the React compiler plugin can prevent some hot updates.
