import React from 'react'
import MyPhoto from "../downloads/mypic.jpeg";

import { MdOutlineKeyboardArrowRight   } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full px-4  bg-gradient-to-b from-black via-black to-gray-800 text-white text-left"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className=" text-4xl font-bold sm:text-2xl pt-20  text-white ">
            Hi' &nbsp; There <br />I am a full Stack Developer
          </h3>
          <p className="font-medium  text-gray-400 py-4 max-w-md">
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
                  <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={MyPhoto}
            alt="Vidhyasagar profile"
            className="rounded-tl-3xl rounded-br-3xl w-5/12  mx-auto border-2 border-white
            shadow-2xl shadow-gray-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Home