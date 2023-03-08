import React from "react";
import brewery from "../downloads/projects/brewery.png";
import covid from "../downloads/projects/covid.png";
import game from "../downloads/projects/game.png";
import movies from "../downloads/projects/movies.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";



const Projects = () => {

  const projects = [
    {
      id: 1,
      abc: "A user-friendly website showcasing a comprehensive list of breweries from API with information.",
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
      abc: "Tic-Tac-Toe game, play against computer on a static web, easy-to-use, designed for fun & enjoyment!",
      title: "Fun game",
      src: game,
      href1: "https://gametictactoe1.netlify.app/",
      href2: "https://github.com/1Vidhyasagar/game",
    },
    {
      id: 4,
      abc: "A website showing a comprehensive list of movies with detailed information, ratings and reviews.",
      title: "Box office",
      src: movies,
      href1: "https://movies-1list.netlify.app/",
      href2: "https://github.com/1Vidhyasagar/Day_25.-2-",
    },
  ];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      if (slider) {
        slider.slickNext();
      }
    }, 10000); // Change this value to set the autoplay interval

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      name="projects"
      className="p-4 pt-16 text-center sm:text-left bg- bg-gray-300 h-full w-full "
    >
      <div className=" max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full  text-black px-4 pl-8">
        <div className="flex  align-center  ">
          <p className="text-2xl font-bold">Projects </p>
          <p className="text-sm mt-2">
            &nbsp;&nbsp;&nbsp;Explore my projects gallery, where a click is all
            it takes to discover!
          </p>
        </div>

        <div className="lg: grid grid-cols-2 sm:grid-cols-3  gap-8 text-center sm:px-0 ">
          {projects.map(({ id, title, abc, src, href1, href2 }) => (
            <div key={id} className=" bg-gray-800 rounded-lg">
              <p className="py-1 text-sky-400  text-sm  text-center w-full h-auto ">
                Project : {title}
              </p>
              <div>
                <p className="px-5 pb-1 text-justify p-  text-xs bg-gray text-gray-200">
                  {abc}
                </p>
              </div>

              <img src={src} alt="" className=" w-10/12 h-24 mx-auto" />
              <div className="text-center text-white">
                <a
                  href={href1}
                  className=" text-center font-bold w-1/2 px-7  text-sm duration-200 hover:scale-125 hover:text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  LIVE
                </a>
              </div>

              <div className="text-center text-white">
                <a
                  href={href2}
                  className=" w-1/2 text-sm duration-200 hover:scale-125 hover:text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  FRONTEND
                </a>
                &nbsp;&nbsp;
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

        <div className="pt-2 text-sm">
          <p>
            <b>Currently I am working on Projects namely</b>
          </p>
          <ul className="font-semibold  list-disc text-xs ">
            Movie ticket booking app/site &nbsp;&&nbsp; AWS polymer search clone
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
