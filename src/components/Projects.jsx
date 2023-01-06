import React from 'react'
import brewery from '../downloads/projects/brewery.png'
import covid from '../downloads/projects/covid.png'
import game from '../downloads/projects/game.png'
import movies from '../downloads/projects/movies.png'

const Projects = () => {
 
 const projects=[
    {
       id:1,
       src: brewery,
       href1: 'https://breweries-shop.netlify.app/',
       href2: 'https://github.com/1Vidhyasagar/shopbeer'

    },
    {
        id:2,
        src: covid,
        href1: 'https://covidtracker-world.netlify.app/',
        href2: 'https://github.com/1Vidhyasagar/Day_25.-3-'

     },
     {
        id:3,
        src: game,
        href1: 'https://gametictactoe1.netlify.app/',
        href2: 'https://github.com/1Vidhyasagar/game'

     },
     {
        id:4,
        src: movies,
        href1: 'https://movies-1list.netlify.app/',
        href2: 'https://github.com/1Vidhyasagar/Day_25.-2-'

     },
 ]
    return (
      <div
        name="projects"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
          <div>
            <p className="text-2xl font-bold">Projects</p>
            <p className="pt-1 ">Here are my completed projects</p>
          </div>
          <div className="pt-2 grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0 text-sm">
            {projects.map(({ id, src, href1, href2 }) => (
              <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 px-1"
                />
                <div className="text-1xl flex items-center justify-center">
                  <p>
                    Project title <br />
                    description
                  </p>
                </div>
                <div
                  className="flex items-center justify-center
                 bg-black"
                >
                  <a
                    href={href1}
                    className="w-1/2 px-7  text-sm duration-200 hover:scale-110"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LIVE
                  </a>
                </div>

                <div
                  className="flex items-center justify-center
                bg-gradient-to-b from-black to-gray-700"
                >
                  <a
                    href={href2}
                    className="w-1/2 text-sm duration-200 hover:scale-110"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FRONTEND
                  </a>
                  {/* make href for backend */}
                  <a
                    href={href2}
                    className="text-sm duration-200 hover:scale-110"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BACKEND
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p>Currently I am working on following projects</p>
            <ul className="list-disc text-sm ">
              <li>Movie ticket booking app/site</li>
              <li>AWS polymer search clone</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Projects