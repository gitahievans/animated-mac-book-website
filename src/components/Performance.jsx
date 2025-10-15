import React from "react";
import { performanceImages, performanceImgPositions } from "../Constants";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Performance = () => {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" })

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      // animate the text
      gsap.fromTo(".content p", {
        opacity: 0,
        y: 10,
      },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 2,
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      if (isMobile) return;

      const tl = gsap.timeline({
        defaults: { duration: 4, ease: "power1.inOut", overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "center center",
          scrub: true,
          invalidateOnRefresh: true,
          toggleActions: "play none reverse pause",
        },
      });

      performanceImgPositions.forEach((item) => {
        if (item.id === "p5") return;

        const selector = `.${item.id}`;
        const toVars = { bottom: `${item.bottom}%` };
        if (item.left !== undefined) toVars.left = `${item.left}%`;
        if (item.right !== undefined) toVars.right = `${item.right}%`;
        if (item.bottom !== undefined) toVars.bottom = `${item.bottom}%`;
        if (item.transform !== undefined) toVars.transform = `${item.transform}`;
        tl.to(selector, toVars, 0);
      });


    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <img key={id} src={src} alt={`${id}`} className={`perf-img ${id}`} />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
