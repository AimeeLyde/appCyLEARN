import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo-cylearn.png";
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const navLinks = [
  {
    path: '/accueil',
    display: 'Accueil'
  },
  {
    path: '/actualites',
    display: 'Actualités'
  },
  {
    path: '/glossaire',
    display: 'Glossaire'
  },
  {
    path: '/astuces',
    display: 'Astuces'
  },
  {
    path: '/motsDesExperts',
    display: 'Mot des Experts'
  },
  {
    path: '/bonnesPratiques',
    display: 'Bonnes Pratiques'
  }
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="CY Learn Logo" />
          </div>
          <div className='flex flex-col md:flex-row md:justify-between w-full md:w-auto gap-10'>
            {navLinks.map((link, index) => (
              <div key={index}>
               
                <ul>
                  <li className='mb-4'>
                    <Link className='text-[16px] leading-7 font-[400] text-textColor' to={link.path}>
                      {link.display}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          
        </div>
        <div className="text-center mt-8 text-textColor">
          © {year} CY Learn. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
