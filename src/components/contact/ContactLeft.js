import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { SiInstagram } from 'react-icons/si';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Suryansh Shrivastava</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Development Engineer - II
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm always open to discussing new projects, collaboration opportunities, or anything tech-related. Feel free to reach out — let's build something impactful together!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText"><a href='tel:+919589661210'>+91 9589661210</a></span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText"><a href='mailto:iamsuru07@gmail.com'>iamsuru07@gmail.com</a></span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/iamsuru/" target="_blank" without rel="noreferrer">
            <span className="bannerIcon"><FaLinkedinIn /></span>
          </a>
          <a href="https://instagram.com/iamsuru_07/" target="_blank" without rel="noreferrer">
            <span className="bannerIcon"><SiInstagram /></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft