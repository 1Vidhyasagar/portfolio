import React from 'react'
import MyPhoto from "../downloads/mypic.jpeg";

import { MdOutlineKeyboardArrowRight   } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full px-5  bg-gradient-to-b from-gray-700  via-black to-black text-white text-left"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pl-8  md:flex-row">
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
              <button className=" group text-white w-fit px-3 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 hover:bg-gray-500 cursor-pointer">
                Resume
                <span>
                  <MdOutlineKeyboardArrowRight size={40} className="ml-2" />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={MyPhoto}
            alt="Vidhyasagar profile"
            className="mb-20  lg:mt-20 rounded-tl-3xl rounded-br-3xl w-7/12  mx-auto
            shadow-2xl shadow-gray-800"
          />
        </div>
      </div>
    </div>
  );
}

export default Home