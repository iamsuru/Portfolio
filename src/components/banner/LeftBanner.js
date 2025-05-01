import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub, FaNodeJs, FaGit, FaJava } from "react-icons/fa";
import { SiExpress, SiFastify, SiFirebase, SiInstagram, SiJavascript, SiLeetcode, SiMongodb, SiMysql, SiPostgresql, SiTypescript } from "react-icons/si"

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
            <a href="https://linkedin.com/in/iamsuru/" target="_blank">
              <span className="bannerIcon"><FaLinkedinIn /></span>
            </a>
            <a href="https://github.com/iamsuru/" target="_blank">
              <span className="bannerIcon"><FaGithub /></span>
            </a>
            <a href="https://leetcode.com/u/iamsuru/" target="_blank">
              <span className="bannerIcon"><SiLeetcode /></span>
            </a>
            <a href="https://instagram.com/iamsuru_07/" target="_blank">
              <span className="bannerIcon"><SiInstagram /></span>
            </a>
          </div>
        </div>

        {/* Best Skill On Section */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Best skill on</h2>
          <div className="flex gap-4 flex-wrap">
            <span className="bannerIcon"><SiJavascript /></span>
            <span className="bannerIcon"><SiTypescript /></span>
            <span className="bannerIcon"><FaJava /></span>
            <span className="bannerIcon"><FaNodeJs /></span>
            <span className="bannerIcon"><SiFastify /></span>
            <span className="bannerIcon"><SiExpress /></span>
            <span className="bannerIcon"><FaReact /></span>
            <span className="bannerIcon"><SiMysql /></span>
            <span className="bannerIcon"><SiPostgresql /></span>
            <span className="bannerIcon"><SiMongodb /></span>
            <span className="bannerIcon"><SiFirebase /></span>
            <span className="bannerIcon"><FaGit /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
