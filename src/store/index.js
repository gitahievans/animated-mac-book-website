import { create } from "zustand";
import texture from "../assets/apple/videos/feature-1.mp4"
const useMacBookStore = create((set) => ({
  color: "#2e2c2e",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: texture,
  setTexture: (texture) => set({ texture }),

  reset: () => set({ color: "#2e2c2e", scale: 0.08, texture: texture }),
}));

export default useMacBookStore;
