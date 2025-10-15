import React from "react";
import MaskImage from "../assets/apple/mask-logo.svg";
import Video from "../assets/apple/videos/game.mp4";

const Showcase = () => {
  return (
    <div id="section">
      <div className="media">
        <video src={Video} loop muted autoPlay playsInline />
        <div className="mask">
          <img src={MaskImage} alt="Mask" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                . M4 powers
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that’s
                unbelievably thin, light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>
              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
