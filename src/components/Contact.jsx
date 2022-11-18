import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-10 text-whie">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="">
          <p className="text-4xl text-white font-bold mt-36">Contact</p>
          <a className="text-white" href="tel:+919822074397">Call me at  &nbsp;<span>&#9990;</span>

          &nbsp;+91 9822074397</a> 

            


          <p className=" text-white"> Kindly fill below and contact me </p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/5375b9de-f060-4863-8ebd-795c95998635"  method="post" className="flex flex-col w-full md:w-2/6 h-3/4">
            <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="mb-1 text-sm bg-transparent border-2 rounded-md text-center text-white focis:outline-none"
            />
              <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="mb-1 text-sm bg-transparent border-2 rounded-md text-center text-white focis:outline-none"
            />
            <textarea 
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="p-2 text-sm bg-transparent border-2 rounded-md text-center align:center text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-blue-800 to to-blue-400 px-4  my-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
          </form> 
        </div>
      </div>
    </div>
  )
}

export default Contact