import React from 'react';
import html from"../downloads/html.png"
import css from"../downloads/css.png"
import javascript from"../downloads/javascript.png"
import react from"../downloads/react.png"
import node from"../downloads/node.png"
import mongodb from"../downloads/mongodb.png"
import tailwind from"../downloads/tailwind.png"
import github from"../downloads/github.png"

const Skills = () => {

const tech=[
    {
        id:1,
        src:html,
        title:'HTML',
        style:'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        title:'CSS',
        style:'shadow-blue-500'
    },
    {
        id:3,
        src:javascript,
        title:'JavaScript',
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src:react,
        title:'React',
        style:'shadow-blue-400'
    },
    {
        id:5,
        src:node,
        title:'Node',
        style:'shadow-green-700'
    },
    {
        id:6,
        src:mongodb,
        title:'MongoDB',
        style:'shadow-green-500'
    },
    {
        id:7,
        src:tailwind,
        title:'Tailwind',
        style:'shadow-sky-400'
    },
    {
        id:8,
        src:github,
        title:'GitHUb',
        style:'shadow-gray-500'
    },
]

  return (
    <div name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-20">
            <div>
                <p className="text-4xl font-bold pt-12 inline">Skills
                </p>
                <p className="py-10 pb-3 pt-2	">These are my skills I am focusing on</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center sm:px-0">

            {
                tech.map(({id, src, title, style})=>(
               <div 
               key={id}
                className={`w-44 shadow-md hover:scale-105 duration-500  rounded-lg ${style}`}>
                <img  src={src} alt="" className=" w-10 mx-auto" />
                <p className="mt-2 text-sm">{title}</p>
             </div>
                ))
            }
       
          </div>
       
        </div>

    </div>
  )
}

export default Skills