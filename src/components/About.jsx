import React from 'react'

const About = () => {
  return (
    <div 
      name="about"
      className="w-full h-screen bg-gradient-to-b fro to-gray--800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-sm mt-10">
                My full name is Vidhyasagar Dayanand Myana, I am from Maharashtra state's Solapur city.
                I have done Enginnering in Civil stream from N.K.Orchid College Of Enginnering And Technology,Solapur.
                After gradution I worked as Civil Engineer at Suroj Buildon pvt.ltd,Pune and Mumbai for 2 year after that I have been employee
                of Alacrity Construction pvt ltd at Pune and Solapur for 2 years.
            </p>
            <br/>
            <p className="text-sm">
                Being passionate about Computers and technology is the main reason for me to switch into this domain.After some research and
                self introspection I landed here in this tech industry.I have interest in desiging and developing the things.I would like to work
                with enthusiastic and passionate team and company for enhancing organizations goals. 
            </p>
        </div>

    </div>
  )
}

export default About;