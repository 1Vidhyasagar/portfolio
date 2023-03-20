import React from 'react'
import MyPhoto from "../downloads/mypic2.png";

import { MdOutlineKeyboardArrowRight   } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="place-content-center h-screen w-full px-5  bg-gradient-to-bl from-gray-100  via-gray-900 to-black text-white text-left"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col  items-center justify-center h-full px-4 pl-8  md:flex-row">
        <div className="flex mt-4 flex-col justify-center h-full">
          <h3 className="font-bold sm:text-2xl  text-white ">
            Hi' &nbsp; There <br />I am a full Stack Developer
          </h3>
          <p className="pl-4 mt-2 mb-4 font-medium  text-gray-400 py-4 max-w-md">
            Enthusiastic and adaptive in nature to work with MERN technology for
            developing web applications.
          </p>

          <div>
            <a
              href="https://drive.google.com/file/d/1idfgDAxLorTp0Bx9emr6wuA4YWAKOf0G/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="  text-white w-6/12 px-3 py-1 my-2 flex items-center rounded-md bg-gradient-to-l from-cyan-500  to-gray-900 cursor-pointer 
              "
              >
                Resume
                <MdOutlineKeyboardArrowRight size={40} className="ml-2" />
              </button>
            </a>
          </div>
        </div>
        <div className="w-7/12 h-screen  overflow-hidden">
          <img
            src={MyPhoto}
            alt="Vidhyasagar profile"
            className="w-3/6 mix-blend-overlay mt-16 lg:mt-24 lg: mx-auto
          "
          />
        </div>
      </div>
    </div>
  );
}

export default Home