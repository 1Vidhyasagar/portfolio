import React from 'react'
import MyPhoto from "../downloads/mypic.jpeg";
import { MdOutlineKeyboardArrowRight   } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div 
    name="home" 
    className="h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row">
           <div className="flex flex-col justify-center h-full">
            <h3 className=" text-4xl sm:text-2xl font-bold text-white">
                I am a Full Stack Developer
            </h3>
            <p className="text-gray-500 py-4 max-w-md">
                Enthusiastic and adaptive in nature to work with MERN technology for developing web applications.
            </p>

            <div>
            <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-3 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-400 cursor-context-menu "
            >
                Portfolio
                <span className="group-hover:rotate-90 duration-1000 " >
                <MdOutlineKeyboardArrowRight size={25}
                  className="ml-2"
                />
                </span>
               </Link>
            </div>
           </div>
           <div>
            <img src={MyPhoto} alt="Vidhyasagar profile" className="rounded-full w-5/12 mx-auto shadow-md shadow-gray-500"/>
           </div>
       </div>
    </div>
  )
}

export default Home