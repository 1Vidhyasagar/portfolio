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
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
            <div className="pb-8">
                <p className="text-4xl font-bold inline ">Projects</p>
                <p className="-py-2">Here are my completed projects</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">

                {projects.map(({id,src,href1,href2})=>(
                <div key ={id} className="shadow-md shadow-gray-500 rounded-lg">
                    <img src={src} 
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 px-5"/>
                    <div className="flex items-center justify-center">

                        <a href={href1} className="w-1/2 px-7 py-1 m-1 text-sm duration-200 hover:scale-110" target='_blank' rel="noreferrer">Demo</a>
                        <a href={href2} className="w-1/2 px-7 py-1 m-1 text-sm duration-200 hover:scale-110" target='_blank' rel="noreferrer">Code</a>
                    </div>
                </div>
            
               
                ))
            }
            </div>
           
        <div className="mt-12">
            <p>Currently I am working on following projects</p>
            <ul className="list-disc text-sm m-2">
                <li>
                 Movie ticket booking app/site
                </li>
                <li>
                 AWS polymer search clone
                </li>
                
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Projects