import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Connect = () => {

  const links=[
    {
        id:1,
        child:(
    <>
    <FaLinkedin size={25}/> LinkedIn
    </>
        ),
        href: 'https://www.linkedin.com/in/vidhyasagar-myana-530a08236/',
        style:'round-tr-md'
    },
    {
        id:2,
        child:(
    <>
    <FaGithub size={25}/> GitHub
    </>
        ),
        href: 'https://github.com/1Vidhyasagar',
    },
    {
        id:3,
        child:(
    <>
    <HiOutlineMail size={25}/>Mail
    </>
        ),
        href: 'mailto:vidhyasagarmyana9598@gmail.com',
    },
    {
        id:4,
        child:(
    <>
    <BsFillPersonLinesFill size={25}/> Resume
    </>
        ),
        href: '/vidhyasagarSD.pdf',
        style:'round-br-md',
        download:true,
    }
  ]

  return (
    <div className=" md:flex-col top-[35%] right-0 fixed">
        <ul>
        {links.map(({id, child, href, style, download})=>(
            // eslint-disable-next-line no-useless-concat
            <li key={id} className={"flex justify-between items-center w-35 h-12 px-5 mr-[-100px] hover:mr-[-10px] hover:rounded-md duration-500 bg-gray-700" + "  "+ style}>
              <a 
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target='_blank' 
              rel="noreferrer"
             
             >
             {child}
              </a>
            </li>

        ))}
            
        </ul>
    </div>
  )
}

export default Connect