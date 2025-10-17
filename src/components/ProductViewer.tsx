import React, { useMemo, useState, useCallback, useEffect } from "react";
import useMacBookStore from "../store";
import clsx from "clsx";
import { Canvas, useThree } from "@react-three/fiber";
import { Box, PerspectiveCamera } from "@react-three/drei";
import StudioLights from "./three/StudioLights";
import ModelsSwitcher from "./three/ModelsSwitcher";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

type LookAtTarget = {
  cameraPosition: [number, number, number];
  target: [number, number, number];
  fov?: number;
};

const CameraRig: React.FC<{ lookAt?: LookAtTarget | null }> = ({ lookAt }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (!lookAt) return;
    const { cameraPosition, target, fov } = lookAt;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", duration: 1.5 },
    });

    tl.to(camera.position, {
      x: cameraPosition[0],
      y: cameraPosition[1],
      z: cameraPosition[2],
      onUpdate: () => {
        camera.lookAt(target[0], target[1], target[2]);
        camera.updateProjectionMatrix();
      },
    });

    if (typeof fov === "number") {
      tl.to(
        camera,
        {
          fov,
          onUpdate: () => camera.updateProjectionMatrix(),
        },
        "<"
      );
    }

    return () => {
      tl.kill();
    };
  }, [lookAt, camera]);

  return null;
};

const ProductViewer = () => {
  const { color, setColor, scale, setScale } = useMacBookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [lookAt, setLookAt] = useState<LookAtTarget | null>(null);

  const initial = useMemo<LookAtTarget>(
    () => ({ cameraPosition: [0, 2, 5], target: [0, 0, 0], fov: 50 }),
    []
  );

  const presets = useMemo(() => {
    return {
      screen: {
        cameraPosition: [0, 1.3, 2.2],
        target: [0, 1.2, 0],
        fov: 45,
      } as LookAtTarget,
      trackpad: {
        cameraPosition: [0, 1.2, 1.2],
        target: [0, 0.9, 1],
        fov: 60,
      } as LookAtTarget,
      webcam: {
        cameraPosition: [0, 1.5, 1.5],
        target: [0, 1.45, 0],
        fov: 25,
      } as LookAtTarget,
      keyboard: {
        cameraPosition: [0, 2, 2],
        target: [0, 1.6, 1.5],
        fov: 30,
      } as LookAtTarget,
      logo: {
        cameraPosition: [0, 1.3, -6.8],
        target: [0, 0, 0],
        fov: 40,
      } as LookAtTarget,
      reset: initial,
    };
  }, [initial]);

  const handleLook = useCallback(
    (key: keyof typeof presets) => {
      setLookAt(presets[key]);
    },
    [presets]
  );

  return (
    <section id="product-viewer">
      <h2 className="text-center">See it all in a new light.</h2>

      <div className="controls">
        <p className="info text-lg">
          {" "}
          MacBook Pro {scale === 0.06 ? '14"' : '16"'} in{" "}
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

      <div className="absolute z-50 bottom-1/2 left-[80%]">
        <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-4 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between mb-3">
            <h2 className="text-sm md:text-base font-semibold tracking-wide uppercase text-neutral-200">
              Look At
            </h2>
            <button
              onClick={() => handleLook("reset")}
              className="text-xs px-2 py-1 rounded-md border border-white/20 hover:bg-white/10 transition"
            >
              Reset
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-xs">
            <button
              onClick={() => handleLook("screen")}
              className="px-3 py-1 rounded-full border border-white/20 hover:bg-white/10 transition text-sm flex items-center justify-center"
            >
              Screen
            </button>
            <button
              onClick={() => handleLook("trackpad")}
              className="px-3 py-1 rounded-full border border-white/20 hover:bg-white/10 transition text-sm flex items-center justify-center"
            >
              Trackpad
            </button>
            <button
              onClick={() => handleLook("keyboard")}
              className="px-3 py-1 rounded-full border border-white/20 hover:bg-white/10 transition text-sm flex items-center justify-center"
            >
              Keyboard
            </button>
            <button
              onClick={() => handleLook("webcam")}
              className="px-3 py-1 rounded-full border border-white/20 hover:bg-white/10 transition text-sm flex items-center justify-center"
            >
              Webcam
            </button>
            <button
              onClick={() => handleLook("logo")}
              className="px-3 py-1 rounded-full border border-white/20 hover:bg-white/10 transition text-sm flex items-center justify-center"
            >
              Logo
            </button>
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
        <CameraRig lookAt={lookAt} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
