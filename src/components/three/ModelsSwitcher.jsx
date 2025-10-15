import { PresentationControls } from "@react-three/drei";
import React, { useRef } from "react";
import MacBookPro14 from "../models/Macbook-14";
import MacBookPro16 from "../models/Macbook-16";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const ModelsSwitcher = ({ scale, isMobile }) => {
  const smallMacBookRef = useRef();
  const largeMacBookRef = useRef();

  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_LARGE_MOBILE = 0.05;

  const showLargeMacBook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  useGSAP(() => {
    if (showLargeMacBook) {
      moveGroup(smallMacBookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacBookRef.current, 0);

      fadeMeshes(smallMacBookRef.current, 0);
      fadeMeshes(largeMacBookRef.current, 1);
    } else {
      moveGroup(largeMacBookRef.current, OFFSET_DISTANCE);
      moveGroup(smallMacBookRef.current, 0);

      fadeMeshes(largeMacBookRef.current, 0);
      fadeMeshes(smallMacBookRef.current, 1);
    }
  }, [scale]);

  const controlsConfig = {
    snap: true,
    speed: 1.5,
    zoom: 1.5,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 5 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookRef}>
          <MacBookPro16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookRef}>
          <MacBookPro14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelsSwitcher;
