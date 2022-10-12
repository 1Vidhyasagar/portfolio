import React from 'react'

const Interests = () => {
  return (
    <div 
      name="Interests"
      className="w-full h-screen bg-[url('./downloads/bg.jpg')] text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto pt-5 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold">Interests</p>
            </div>
        <div>
            <ul className="list-disc p-auto">
                <li>Travelling</li>
                <li>learning new languages</li>
                <li>Art</li>


            </ul>
        </div>
           
            
        </div>

    </div>
  )
}

export default Interests