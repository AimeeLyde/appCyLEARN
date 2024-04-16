import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'

const socialLinks = [
  {
    path: " ",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />
  },
  {
    path: " ",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: " ",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
  },
];
const quickLinks01 =[
  {
    path: "/",
    display: "Mettre un lien"
  },
  {
    path: "/",
    display: "Mettre un lien"
  },
  {
    path: "/",
    display: "Mettre un lien"
  },

];
const quickLinks02 =[
  {
    path: "/",
    display: "Mettre un lien"
  },
  {
    path: "/",
    display: "Mettre un lien"
  },
  {
    path: "/",
    display: "Mettre un lien"
  },

];
const quickLinks03 =[
  {
    path: "/",
    display: "Mettre un lien"
  },
  {
    path: "/",
    display: "Mettre un lien"
  },
  {
    path: "/",
    display: "Mettre un lien"
  },

];
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10' >
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[]'>{year}</p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index)=>(
                <Link 
                to={link.path} 
                key={index}
                className='w-9 h-9 border boerder-solid border-[#181A1E] rounded-full flex items-center 
                justify-center group hover:bg-primaryColor hover:border-none'
                >{link.icon} </Link>
              ))}
            </div>
          </div>
          <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
                Liens rapides
              </h2>
              <ul>
                {quickLinks01.map((item, index)=> (<li key={index} className='mb-4'><Link className='text-[16px] leading-7 font-[400] text-textColor' to={item.path}>{item.display} </Link></li>))}
              </ul>
          </div>
          <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
                Liens rapides
              </h2>
              <ul>
                {quickLinks02.map((item, index)=> (<li key={index} className='mb-4'><Link className='text-[16px] leading-7 font-[400] text-textColor' to={item.path}>{item.display} </Link></li>))}
              </ul>
          </div>
          <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
                Liens rapides
              </h2>
              <ul>
                {quickLinks03.map((item, index)=> (<li key={index} className='mb-4'><Link className='text-[16px] leading-7 font-[400] text-textColor' to={item.path}>{item.display} </Link></li>))}
              </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;