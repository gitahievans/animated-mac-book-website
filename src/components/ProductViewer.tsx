import React from "react";
import useMacBookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { MacBookPro14 } from "./models/Macbook-14";
import StudioLights from "./StudioLights";
const ProductViewer = () => {
  const { color, setColor, scale, setScale } = useMacBookStore();

  return (
    <section id="product-viewer">
      <h1>Take a closer look</h1>

      <div className="controls">
        <p className="info"> MacBook Pro 16" in Space Black</p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              className={clsx(
                "bg-neutral-900",
                color === "#adb5bd" && "active"
              )}
              onClick={() => setColor("#adb5bd")}
            />
            <div
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
              onClick={() => setColor("#2e2c2e")}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 50 }}
      >
        <StudioLights />
        <MacBookPro14 position={[0, 0, 0]} scale={0.06} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
