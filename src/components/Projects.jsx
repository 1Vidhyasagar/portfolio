import React from "react";
import brewery from "../downloads/projects/brewery.png";
import covid from "../downloads/projects/covid.png";
import game from "../downloads/projects/game.png";
import movies from "../downloads/projects/movies.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      abc: "A user-friendly website showcasing a comprehensive list of breweries from API with detailed information.",
      title: "Brewery List",
      src: brewery,
      href1: "https://breweries-shop.netlify.app/",
      href2: "https://github.com/1Vidhyasagar/shopbeer",
    },
    {
      id: 2,
      abc: "A website displaying Covid-19 case reports of various countries, created to provide real-time information.",
      title: "Covid Tracker",
      src: covid,
      href1: "https://covidtracker-world.netlify.app/",
      href2: "https://github.com/1Vidhyasagar/Day_25.-3-",
    },
    {
      id: 3,
      abc: "Tic Tac Toe game, play against computer on a static web app, easy-to-use, designed for fun and enjoyment!",
      title: "Fun game",
      src: game,
      href1: "https://gametictactoe1.netlify.app/",
      href2: "https://github.com/1Vidhyasagar/game",
    },
    {
      id: 4,
      abc: "A website displaying a comprehensive list of movies with detailed information, including ratings and reviews.",
      title: "Box office",
      src: movies,
      href1: "https://movies-1list.netlify.app/",
      href2: "https://github.com/1Vidhyasagar/Day_25.-2-",
    },
  ];
  return (
    <div
      name="projects"
      className="px-4 text-center sm:text-left bg-gradient-to-b from-gray-600 via-gray-900 to-gray-700 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-28">
        <div>
          <p className="text-2xl font-bold pt-3">Projects</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-8 mr-10 sm:px-0 text-sm">
          {projects.map(({ id, title, abc, src, href1, href2 }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <p className="py-1 bg-black text-white text-sm  text-center w-full ">
                Project : {title}
              </p>
              <div>
                <p className=" text-justify px-2  text-xs bg-gray max-w-sm w-full text-gray-200">
                  {abc}
                </p>
              </div>

              <img
                src={src}
                alt=""
                className="w-full rounded-md duration-200 hover:scale-105"
              />
              <div
                className="flex items-center justify-center
                 bg-black"
              >
                <a
                  href={href1}
                  className=" font-bold w-1/2 px-7  text-sm duration-200 hover:scale-125 hover:text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  LIVE
                </a>
              </div>

              <div
                className="text-center 
                bg-gradient-to-b  from-black to-gray-700"
              >
                <a
                  href={href2}
                  className=" w-1/2 text-sm duration-200 hover:scale-115 hover:text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  FRONTEND
                </a>{" "}
                &nbsp;
                {/* make href for backend */}
                <a
                  href={href2}
                  className="text-sm hover:scale-115 hover:text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  BACKEND
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-3 text-sm">
          <p>Currently I am working on Projects namely</p>
          <ul className="list-disc text-xs ">
            <li>
              Movie ticket booking app/site &nbsp;&&nbsp; AWS polymer search
              clone
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
