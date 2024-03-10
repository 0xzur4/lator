import React from 'react'
import Ig from '../assets/icons8-instagram-48.png'
import Tw from '../assets/icons8-twitter-squared-48.png'
import Li from '../assets/icons8-linkedin-48.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      </main>
      <footer className="bg-gray-800 text-white text-left p-4">
        <Link to="https://www.linkedin.com/in/yourname/">
          <img
            className='h-7 w-7 float-right ml-8'
            src={Li}
            alt='logo-linkedin'
          />
        </Link>
        <Link to="https://instagram.com/yourname">
          <img
            className='h-7 w-7 float-right ml-8'
            src={Ig}
            alt='logo-instagram'
          />
        </Link>
        <Link to="https://twitter.com/Yourname">
          <img
            className='h-7 w-7 float-right ml-0'
            src={Tw}
            alt='logo-twitter'
          />
        </Link>
        <p className='flex flex-grow ml-[0px] mt-[2px]'>&copy; 2023 Gobh | 👋</p>
      </footer>
    </div>
  )
}
export default Footer