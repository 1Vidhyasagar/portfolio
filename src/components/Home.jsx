import React from "react";
import MyPhoto from "../downloads/mypic5.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "animate.css";

const Home = () => {
  return (
    <div
      name="home"
      className="place-content-center h-screen w-full px-5 bg-gray-800 md:bg-gradient-to-bl from-gray-300 via-gray-900 to-black text-white text-left"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pl-8 md:flex-row overflow-hidden">
        <div className="flex mt-4 flex-col justify-center h-full ">
          <h3 className="wow animate__animated animate__fadeInLeft animate__delay-0.7s lg:mt-0 md:-mt-96 font-bold sm:text-2xl mt-10 text-white ">
            Hi' &nbsp; There <br />I am a&nbsp; full Stack Developer
          </h3>
          <p className="pl-4 mb-2 font-medium text-gray-300 py-4 max-w-md wow animate__animated animate__fadeInLeft animate__delay-1s">
            Enthusiastic and adaptive in nature to work with MERN technology for
            developing web applications.
          </p>

          <div className="">
            <a
              href="https://drive.google.com/file/d/1idfgDAxLorTp0Bx9emr6wuA4YWAKOf0G/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-cyan-500 shadow-2xl shadow-cyan-900 wow animate__animated animate__fadeInRightBig animate__delay-1s text-white w-5/12 px-3 py-1 flex items-center rounded-md bg-gradient-to-l from-cyan-500 to-gray-900 cursor-pointer ">
                <span className="hover:translate-x-6 duration-700 lg:ml-7">
                  Resume
                </span>

                <MdOutlineKeyboardArrowRight size={40} className="ml-7" />
              </button>
            </a>
          </div>
        </div>
        <div className="wow animate__animated animate__fadeInRight animate__delay-0.7s rounded-full bottom-0 shadow-xl shadow-cyan-500 w-7/12 md:h-5/6 md:w-full bg-gradient-to-bl to-cyan-700 via-gray-800 from-gray-900 md:mt-auto lg:mb-5 lg:h-4/6 lg:w-3/6 xl:h-4/6 xl:w-3/6 lg:ml-auto ">
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
