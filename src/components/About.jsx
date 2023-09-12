import React from "react";
import MyPhoto from "../downloads/about.gif";

import { useTheme } from "../ThemeContext";
import Mern from "../downloads/640px-MERN-logo.png";


const About = () => {

  const { isDarkMode } = useTheme();

  return (
    <div
      name="about"
      className={`text-center sm:text-left w-full h-screen text-black
      ${isDarkMode ? "bg-gray-200" : " bg-gray-500"}`}
    >
      <div className="max-w-screen-lg px-4 pl-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-2xl font-bold">About</p>
        </div>
        <div className="flex space-x-8">
          <div className="wow animate__animated animate__fadeInLeft animate__delay-0.7s text-justify font-medium text-black">
            <p>
              Being passionate about Computers and technology is the main reason
              for me to work in this field. I have an interest in designing and
              developing websites. I would like to work with an enthusiastic,
              passionate team and company for enhancing the organization's
              goals.
            </p>
            <br />

            <div className="  px-auto md:mt-12   lg:w-5/12 xl:h-4/6 xl:w-3/6">
              <img
                src={Mern}
                alt="my profile"
                className={`lg:-mt-16 ${isDarkMode ? "filter-invert" : ""}`}
              />
            </div>
          </div>
          <div className="wow animate__animated animate__fadeInRight animate__delay-0.7s ">
            <img
              src={MyPhoto}
              alt="developer gif"
              className="rounded-tl-3xl rounded-br-3xl shadow-xl shadow-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
