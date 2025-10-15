import React from "react";
import useMacBookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, PerspectiveCamera } from "@react-three/drei";
import StudioLights from "./three/StudioLights";
import ModelsSwitcher from "./three/ModelsSwitcher";
import { useMediaQuery } from "react-responsive";
const ProductViewer = () => {
  const { color, setColor, scale, setScale } = useMacBookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <section id="product-viewer">
      <h1>Take a closer look</h1>

      <div className="controls">
        <p className="info">
          {" "}
          MacBook Pro 16" in{" "}
          {color === "#adb5bd" ? "Space Gray" : "Space Black"}
        </p>
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
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />

        <ModelsSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
