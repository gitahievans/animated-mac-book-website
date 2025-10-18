import React, { useEffect } from "react";
import Title from "../assets/apple/title.png";
import Video from "../assets/apple/videos/hero.mp4";
import { useRef } from "react";
const Hero = () => {
  // const videoRef = useRef();

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 2;
  //   }
  // });

  return (
    <section id="hero">
      <img src={Title} alt="MacBook Title" className="w-1/3" />

      <video
        // ref={videoRef} 
        src={Video}
        autoPlay
        playsInline muted />


      <div>
        <button className="bg-gradient-to-r from-[#003b45] via-[#0d8a9d] to-[#003b45] px-4 py-2 rounded-md mt-4 font-medium">
          Buy: $1599
        </button>
      </div>
    </section>
  );
};

export default Hero;
