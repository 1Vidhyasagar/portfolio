import React from 'react';
import html from"../downloads/html.png"
import css from"../downloads/css.png"
import javascript from"../downloads/javascript.png"
import react from"../downloads/react.png"
import node from"../downloads/node.png"
import mongodb from"../downloads/mongodb.png"
import express from"../downloads/express.png"
import mysql from"../downloads/mysql.png"
import github from"../downloads/github.png"

const Skills = () => { 

const tech=[
    {
        id:1,
        src:html, 
        title:'HTML',
        style:'shadow-orange-600'
    },
    {
        id:2,
        src:css,
        title:'CSS',
        style:'shadow-blue-400'
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
        title:'React.js',
        style:'shadow-green-300'
    },
    {
        id:5,
        src:node,
        title:'Node.js',
        style:'shadow-green-400'
    },
    {
        id:6,
        src:mongodb,
        title:'MongoDB',
        style:'shadow-green-800'
    },
    {
        id:7,
        src:mysql,
        title:'MySQL',
        style:'shadow-yellow-700'
    },
    {
        id:8,
        src:express,
        title:'Express.js',
        style:'shadow-sky-400'
    },
    {
        id:9,
        src:github,
        title:'GitHub',
        style:'shadow-gray-100'
    },
]

  return (
    <div name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-20">
            <div>
                <p className="text-2xl  font-bold inline">Skills
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