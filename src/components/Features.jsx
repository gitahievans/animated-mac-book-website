import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights";
import clsx from "clsx";
import { Html } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { features, featureSequence } from "../Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import videoPath1 from "../assets/apple/videos/feature-1.mp4";
import videoPath2 from "../assets/apple/videos/feature-2.mp4";
import videoPath3 from "../assets/apple/videos/feature-3.mp4";
import videoPath4 from "../assets/apple/videos/feature-4.mp4";
import videoPath5 from "../assets/apple/videos/feature-5.mp4";
import { MacbookModel } from "./models/Macbook";
import useMacBookStore from "../store";

const ModelScroll = () => {
  const groupRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { setTexture } = useMacBookStore();

  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");

      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });

      v.load();
    });
  }, []);

  useGSAP(() => {
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom  top",
        scrub: 1,
        pin: true,
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom  top",
        scrub: 1,
      },
    });

    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2 * 3,
        ease: "power1.inOut",
      });
    }

    // For each feature: set the model texture, animate the feature box in, then
    // apply a short "highlight" (text color, small image scale, glow). Before
    // moving to the next feature we revert the previous highlight.

    timeline
      // Feature 1 - reveal & cinematic highlight
      .call(() => setTexture(videoPath1))
      .to(".box1", { opacity: 1, y: 0, delay: 0.9 })
      // dim siblings to focus attention
      .to(
        [".box2", ".box3", ".box4", ".box5"],
        { opacity: 0.28, duration: 0.6, ease: "power1.out" },
        "<"
      )
      // lift and warm-highlight the active box
      .to(
        ".box1",
        {
          y: -8,
          scale: 1.04,
          boxShadow: "0 18px 60px rgba(255,184,107,0.20)",
          backgroundColor: "rgba(255,184,107,0.06)",
          duration: 0.8,
          ease: "power3.out",
        },
        "<"
      )
      .to(".box1 img", { scale: 1.14, duration: 0.7, ease: "power3.out" }, "<")
      .to(
        ".box1 p",
        {
          color: "#ffb86b",
          letterSpacing: "0.08em",
          textShadow: "0 8px 26px rgba(255,184,107,0.28)",
          duration: 0.7,
          ease: "power3.out",
        },
        "<"
      )

      // Feature 2 - revert feature1 and highlight feature2
      .call(() => setTexture(videoPath2))
      .to(
        ".box1",
        {
          y: 0,
          scale: 1,
          boxShadow: "none",
          backgroundColor: "transparent",
          duration: 0.45,
          ease: "power2.out",
        },
        ">"
      )
      .to(".box1 img", { scale: 1, duration: 0.35 }, "<")
      .to(
        ".box1 p",
        {
          color: "#ffffff",
          letterSpacing: "0em",
          textShadow: "none",
          duration: 0.25,
        },
        "<"
      )
      // keep non-active dimmed, then bring up box2
      .to(
        [".box1", ".box3", ".box4", ".box5"],
        { opacity: 0.28, duration: 0.01 },
        "<"
      )
      .to(".box2", { opacity: 1, y: 0 })
      .to(
        ".box2",
        {
          y: -8,
          scale: 1.04,
          boxShadow: "0 18px 60px rgba(255,184,107,0.20)",
          backgroundColor: "rgba(255,184,107,0.06)",
          duration: 0.8,
          ease: "power3.out",
        },
        "<"
      )
      .to(".box2 img", { scale: 1.14, duration: 0.7, ease: "power3.out" }, "<")
      .to(
        ".box2 p",
        {
          color: "#ffb86b",
          letterSpacing: "0.08em",
          textShadow: "0 8px 26px rgba(255,184,107,0.28)",
          duration: 0.7,
          ease: "power3.out",
        },
        "<"
      )

      // Feature 3
      .call(() => setTexture(videoPath3))
      .to(
        ".box2",
        {
          y: 0,
          scale: 1,
          boxShadow: "none",
          backgroundColor: "transparent",
          duration: 0.45,
          ease: "power2.out",
        },
        ">"
      )
      .to(
        [".box1", ".box2", ".box4", ".box5"],
        { opacity: 0.28, duration: 0.01 },
        "<"
      )
      .to(".box3", { opacity: 1, y: 0 })
      .to(
        ".box3",
        {
          y: -8,
          scale: 1.04,
          boxShadow: "0 18px 60px rgba(255,184,107,0.20)",
          backgroundColor: "rgba(255,184,107,0.06)",
          duration: 0.8,
          ease: "power3.out",
        },
        "<"
      )
      .to(".box3 img", { scale: 1.14, duration: 0.7, ease: "power3.out" }, "<")
      .to(
        ".box3 p",
        {
          color: "#ffb86b",
          letterSpacing: "0.08em",
          textShadow: "0 8px 26px rgba(255,184,107,0.28)",
          duration: 0.7,
          ease: "power3.out",
        },
        "<"
      )

      // Feature 4
      .call(() => setTexture(videoPath4))
      .to(
        ".box3",
        {
          y: 0,
          scale: 1,
          boxShadow: "none",
          backgroundColor: "transparent",
          duration: 0.45,
          ease: "power2.out",
        },
        ">"
      )
      .to(
        [".box1", ".box2", ".box3", ".box5"],
        { opacity: 0.28, duration: 0.01 },
        "<"
      )
      .to(".box4", { opacity: 1, y: 0 })
      .to(
        ".box4",
        {
          y: -8,
          scale: 1.04,
          boxShadow: "0 18px 60px rgba(255,184,107,0.20)",
          backgroundColor: "rgba(255,184,107,0.06)",
          duration: 0.8,
          ease: "power3.out",
        },
        "<"
      )
      .to(".box4 img", { scale: 1.14, duration: 0.7, ease: "power3.out" }, "<")
      .to(
        ".box4 p",
        {
          color: "#ffb86b",
          letterSpacing: "0.08em",
          textShadow: "0 8px 26px rgba(255,184,107,0.28)",
          duration: 0.7,
          ease: "power3.out",
        },
        "<"
      )

      // Feature 5
      .call(() => setTexture(videoPath5))
      .to(
        ".box4",
        {
          y: 0,
          scale: 1,
          boxShadow: "none",
          backgroundColor: "transparent",
          duration: 0.45,
          ease: "power2.out",
        },
        ">"
      )
      .to(
        [".box1", ".box2", ".box3", ".box4"],
        { opacity: 0.28, duration: 0.01 },
        "<"
      )
      .to(".box5", { opacity: 1, y: 0 })
      .to(
        ".box5",
        {
          y: -8,
          scale: 1.04,
          boxShadow: "0 18px 60px rgba(255,184,107,0.20)",
          backgroundColor: "rgba(255,184,107,0.06)",
          duration: 0.8,
          ease: "power3.out",
        },
        "<"
      )
      .to(".box5 img", { scale: 1.14, duration: 0.7, ease: "power3.out" }, "<")
      .to(
        ".box5 p",
        {
          color: "#ffb86b",
          letterSpacing: "0.08em",
          textShadow: "0 8px 26px rgba(255,184,107,0.28)",
          duration: 0.7,
          ease: "power3.out",
        },
        "<"
      );
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl uppercase">~~~</h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.09} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>

      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={clsx("box", `box${index + 1}`, feature.styles)}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>{" "}
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
