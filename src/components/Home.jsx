import React from "react";
import MyPhoto from "../downloads/mypic5.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useTheme } from "../ThemeContext"; // Import the useTheme hook

import "animate.css";

const Home = () => {
  const { isDarkMode } = useTheme(); // Access the theme mode

  return (
    <div
      name="home"
      className={`place-content-center h-screen w-full ${
        isDarkMode
          ? "bg-gradient-to-tr from-gray-800 via-gray-500 to-gray-100"
          : "bg-gradient-to-bl from-gray-300 via-gray-900 to-black"
      } text-white text-left`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pl-8 md:flex-row overflow-hidden">
        <div className="flex mt-4 flex-col justify-center h-full">
          <h3
            className={`lg:mt-0 md:-mt-96 font-bold sm:text-2xl mt-10 ${
              isDarkMode ? "text-white" : "text-white"
            }`}
          >
            Hi' &nbsp; There <br />I am a&nbsp; full Stack Developer
          </h3>
          <p
            className={`font-medium ${
              isDarkMode ? "text-white" : "text-white"
            } pt-7 max-w-md wow animate__animated animate__fadeInLeft animate__delay-0.5s`}
          >
            Enthusiastic and adaptive in nature to work with MERN technology for
            developing web applications.
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1idfgDAxLorTp0Bx9emr6wuA4YWAKOf0G/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center"
            >
              <button className="bg-cyan-500 shadow-2xl shadow-cyan-900 wow animate__animated animate__fadeInRightBig animate__delay-0.5s text-white  px-3 py-auto md:mt-7 flex items-center rounded-md bg-gradient-to-l from-cyan-500 to-gray-900 cursor-pointer ">
                <span className="hover:translate-x-6 duration-700 lg:ml-7">
                  Resume
                </span>

                <MdOutlineKeyboardArrowRight size={40} className="ml-7" />
              </button>
            </a>
          </div>
        </div>
        <div
          className={`rounded-full bottom-0 shadow-xl w-7/12 md:h-5/6 md:w-full ${
            isDarkMode
              ? "bg-gradient-to-bl to-cyan-900 via-gray-500 from-gray-100"
              : "bg-gradient-to-bl to-cyan-700 via-gray-800 from-gray-900"
          } md:mt-auto lg:mb-5 lg:h-4/6 lg:w-3/6 xl:h-4/6 xl:w-3/6 `}
        >
          <img
            src={MyPhoto}
            alt="my profile"
            className="md:h-full md:mt-52 md:ml-20 lg:h-screen lg:-mt-16 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
