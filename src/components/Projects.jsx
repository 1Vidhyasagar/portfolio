import React from "react";
import brewery from "../downloads/projects/brewery.png";
import covid from "../downloads/projects/covid.png";
import game from "../downloads/projects/game.png";
import movies from "../downloads/projects/movies.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  swipeToSlide: true,
  variableWidth: true,
  arrows: true,
  dotsClass: "slick-dots",
  prevArrow: (
    <button type="button" className="slick-prev">
      <i className="fa fa-chevron-left"></i>
    </button>
  ),
  nextArrow: (
    <button type="button" className="slick-next">
      <i className="fa fa-chevron-right"></i>
    </button>
  ),

  customPaging: (i) => (
    <button className="slick-dot">
      <i className="fa fa-circle"></i>
    </button>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
  ],
};
// const dotStyle = {
//   width: "10px",
//   height: "10px",
// };

// const activeDotStyle = {
//   color: "#333333",
// };

  return (
    <div
      name="projects"
      className="p-4 text-center sm:text-left bg-gray-800 h-screen w-full "
    >
      <div className=" max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full pt-24 text-white px-4">
        <div>
          <p className="text-2xl font-bold">Projects </p>
          
        </div>

        <div className=" w-11/12 card-slider sm:px-0 text-sm ">
          <Slider {...settings}>
            {projects.map(({ id, title, abc, src, href1, href2 }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-700 rounded-lg bg-gray-900 mb-2  pl-2 border-8 border-gray-800"
                style={{
                  width: "300px",
                  display: "inline-block",
                }}
              >
                <p className="py-1 text-sky-400  text-sm  text-center w-full h-auto ">
                  Project : {title}
                </p>
                <div>
                  <p className=" text-justify p-  text-xs bg-gray max-w-sm w-full text-gray-200">
                    {abc}
                  </p>
                </div>

                <img
                  src={src}
                  alt=""
                  className="duration-200 hover:scale-95 w-12/12 rounded-md"
                />
                <div className="text-center">
                  <a
                    href={href1}
                    className=" text-center font-bold w-1/2 px-7  text-sm duration-200 hover:scale-125 hover:text-blue-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LIVE
                  </a>
                </div>

                <div className="text-center">
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
          </Slider>
        </div>

        <div className="pt-2 text-sm">
          <p>Currently I am working on Projects namely</p>
          <ul className="list-disc text-xs ">
            Movie ticket booking app/site &nbsp;&&nbsp; AWS polymer search clone
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
