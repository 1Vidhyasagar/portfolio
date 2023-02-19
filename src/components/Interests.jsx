import React from 'react'

const Interests = () => {
  return (
    <div
      name="Interests"
      className="text-center sm:text-left w-full h-screen bg-[url('./downloads/bg.jpg')] text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto pt-10  flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-2xl font-bold"> Achievements</p>
        </div>
        <div>
          <ul className="list-disc p-auto">
            &nbsp;&nbsp;Guvi JavaScript{" "}
            <a
              href="https://www.guvi.in/verify-certificate?id=3Yl42qi27wc6160d6A&course=javascript_en"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-line: underline"
            >
              Certificate link
            </a>
          </ul>
        </div>
        <div className="pt-10 pb-4">
          <p className="text-2xl font-bold">Interests</p>
        </div>
        <div>
          <ul className="list-disc p-auto ">
            &nbsp;&nbsp;Art
            <br />
            &nbsp;&nbsp;Travelling <br />
            &nbsp;&nbsp;Learning new languages
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Interests