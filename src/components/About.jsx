import React from 'react'

const About = () => {
  return (
    <div 
      name="about"
      className="w-full h-screen bg-gradient-to-b fro to-gray--800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-5">
                <p className="text-4xl pt-10 font-bold  ">About</p>
            </div>
            
            <p className="text-xl">
                Being passionate about Computers and technology is the main reason for me to work in this field. I have interest in desiging and developing the websites. I would like to work
                with enthusiastic, passionate team and company for enhancing organization's goals. 
            </p><br/>
            <p className="text-xl"> After practicing from basics to project level here are some projects in GitHub which I have pinned.
            <br/>
            Kindly go through it.&nbsp;&nbsp;
            <a className="text-xl text-decoration-line: underline" href="https://github.com/1Vidhyasagar" target="_blank" rel="noreferrer" >GitHub link</a></p>
        </div>

    </div>
  )
}

export default About;