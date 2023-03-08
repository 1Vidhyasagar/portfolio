import React from 'react'
import MyPhoto from "../downloads/about.gif";


const About = () => {
  return (
    <div
      name="about"
      className="text-center sm:text-left w-full h-screen bg-white  text-black  "
    >
      <div className="max-w-screen-lg px-4 pl-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-2xl font-bold  ">About</p>
        </div>
        <div class="flex space-x-8">
          <div className=" text-justify font-medium text-black">
            <p>
              Being passionate about Computers and technology is the main reason
              for me to work in this field. I have an interest in designing and
              developing websites. I would like to work with an enthusiastic,
              passionate team and company for enhancing the organization's
              goals.
            </p>
            <br />
            <p>
              {" "}
              After practicing from basics to project level here are some
              projects in GitHub which I have pinned.
              <br />
              Kindly go through it.&nbsp;&nbsp;
              <a
                className="text-xl text-cyan-500 text-decoration-line: underline"
                href="https://github.com/1Vidhyasagar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub link
              </a>
            </p>
          </div>
          <div>
            <img
              src={MyPhoto}
              alt="developer gif"
              className=" rounded-tl-3xl rounded-br-3xl  shadow-xl shadow-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;