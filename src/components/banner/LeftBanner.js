import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiInstagram, SiLeetcode } from "react-icons/si"
import { skillsData } from "../../constants";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Software Developer.", "Backend Developer.", "JavaScript Developer.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Suryansh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I build reliable backend systems that power real-world fintech products — not just with code, but with thoughtful design, testing, and integration. Every API, queue, or database I touch is shaped to serve users at scale, with clarity and purpose.
        </p>
      </div>
      <div className="flex flex-col gap-10 lgl:gap-14">
        {/* Find Me In Section */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/iamsuru/" target="_blank" without rel="noreferrer">
              <span className="bannerIcon"><FaLinkedinIn /></span>
            </a>
            <a href="https://github.com/iamsuru/" target="_blank" without rel="noreferrer">
              <span className="bannerIcon"><FaGithub /></span>
            </a>
            <a href="https://leetcode.com/u/iamsuru/" target="_blank" without rel="noreferrer">
              <span className="bannerIcon"><SiLeetcode /></span>
            </a>
            <a href="https://instagram.com/iamsuru_07/" target="_blank" without rel="noreferrer">
              <span className="bannerIcon"><SiInstagram /></span>
            </a>
          </div>
        </div>

        {/* Best Skill On Section */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Best skill on</h2>
          <div className="flex gap-4 flex-wrap">
            {
              skillsData.map(({ icon, label }, index) => (
                <div key={index} className="relative group">
                  <span className="bannerIcon">{icon}</span>
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                    {label}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
