import {useEffect, useRef} from 'react'
import logo from "../../assets/images/logo-cylearn.png";
import { NavLink, Link } from 'react-router-dom';
import userImg from '../../assets/images/avatar-icon.png'
import {BiMenu} from "react-icons/bi"
const navLinks =[
  {
    path:'/accueil',
    display: 'Accueil'
  },
  {
    path:'/actualites',
    display: 'Actualités'
  },
  {
    path:'/glossary',
    display: 'Glossaire'
  },
  {
    path:'/astuces',
    display: 'Astuces'
  },
  {
    path:'/motsDesExperts',
    display: 'Mot des Experts'
  },
  {
    path:'/bonnesPratiques',
    display: 'Bonnes Pratique'
  },
]

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const handleStickyHeader = ()=>{
    window.addEventListener('scroll', ()=>{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  })
const toggleMenu =()=> menuRef.current.classList.toggle('show__menu')
  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* MENU */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index)=>(
                <li key={index}>
                  <NavLink to={link.path} className={navClass =>
                    navClass.isActive
                    ? "text-primaryColor text-[14px] leading-7 font-[600]" 
                    : "text-textColor text-[14px] leading-7 font-[500]"
                  }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Nav Right */}
          <div className="flex items-center gap-4">
            <div className='hidden'>
              <Link to ="/">
              <figure className='w-[25px] h-[25px] rounded-full cursor-pointer'>
                <img src={userImg} ClassName="w-full rounded-full" alt="" />
              </figure>
              </Link>
            </div>
            <Link to ="/connexion">
            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[33px] flex items-center  
            justify-center rounded-[40px]'>
                  Connexion
            </button>
            </Link>
            <span className='md:hidden'onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header