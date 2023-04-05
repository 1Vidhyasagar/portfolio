import React from 'react'
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div
      name="Contact"
      className=" text-center sm:text-left w-full h-screen bg-gray-100 p-10"
    >
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="wow animate__animated animate__fadeInLeft animate__delay-0.7s pl-4 ">
          <p className="text-2xl text-black font-bold mt-16">Contact</p>
          <a className="text-black pl-4" href="tel:+919822074397">
            Call me at &nbsp;<span>&#9990;</span>
            &nbsp;+91 9822074397
          </a>
          <p className=" text-center text-black">
            <FontAwesomeIcon icon={faEdit} style={{ color: "#06b6d4" }} />{" "}
            Kindly fill below and contact me{" "}
          </p>
        </div>
        <div
          className="wow animate__animated animate__zoomIn animate__delay-1s flex justify-center items-center"
          style={{ height: "300px" }}
        >
          <form
            action="https://getform.io/f/5375b9de-f060-4863-8ebd-795c95998635"
            method="post"
            className="flex flex-col w-full md:w-2/6 h-3/4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" border-gray-400 text-sm bg-transparent border-2 rounded-md text-center align:center  focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="border-gray-400 text-sm bg-transparent border-2 rounded-md text-center align:center text-gray-700 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="7"
              className="border-gray-400 p-2 text-sm bg-transparent border-2 rounded-md text-center align:center text-gray-700 focus:outline-none"
            ></textarea>
            <button className="text-white bg-cyan-500 px-4  my-2 mx-auto flex items-center rounded-md hover:scale-110   hover:bg-sky-800 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
      <footer className="border-t border-t-gray-500 text-xs w-full bg text-black pt-2  ">
        <div className="wow animate__animated animate__fadeInRight animate__delay-0.7s container mx-auto flex justify-between">
          <p>copyright &copy; 2023 | Vidhyasagar Myana. All rights reserved</p>
          <p>India</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact