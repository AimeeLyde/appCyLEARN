import React from 'react'
import About from '../component/About/About'
import ServiceList from '../component/Services/ServiceList'
import ServiceCard from '../component/Services/ServiceCard'
import faqImg from '../assets/images/faq-img.png'
import featureImg from "../assets/images/feature-img.png"
import heroImg01 from '../assets/images/homme-vert.jpg'
import heroImg02 from '../assets/images/cy-adult.png'
import heroImg03 from '../assets/images/cy-old.png'
import icnO1 from '../assets/images/icon01.png'
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"
import LevelCoursList from '../component/LevelCours/LevelCoursList'
import FaqItem from '../component/Faq/FaqItem'
import FaqList from '../component/Faq/FaqList'




const Home = () => {
  return (
  <>
  {/* hero section start */}
    <section className='pt-[60px] 2xl:h-[800px]'>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* hero content */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">La CyberSécurité pour les grands et les petits</h1>
              <p className='text__para'>Quisque sit amet sapien pellentesque, consectetur nisi et, porttitor diam. Proin in malesuada enim, sed tincidunt magna.  
                Praesent sed orci a lacus egestas accumsan vel non enim. Donec a risus et justo consectetur feugiat eu consectetur sapien.
              </p>
              <button className="btn">En Savoir plus</button>
            </div>
          </div>
            {/* hero counter */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className='w-full rounded-lg' src={heroImg01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img className='w-full mb-[30px] rounded-lg' src={heroImg02} alt="" />
                <img className='w-full rounded-lg' src={heroImg03} alt="" />
              </div>
            </div>
          </div>
      </div>
    </section>
    {/* hero section end */}
    <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Viens apprendre la CyberSécurité en s'amusant</h2>
          <p className='text__para text-center'>Quisque sit amet sapien pellentesque, consectetur nisi et, porttitor diam. Proin in malesuada enim, sed tincidunt magna. </p>
        </div>

        <div className="grid grid-cols_1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5">
            <div className='flex items-center justify-center'>
              <img src={icnO1} alt=""/>
            </div>

            <div className="mt-[30px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Cliquez pour en savoir plus</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Quisque sit amet sapien pellentesque, consectetur nisi et, porttitor diam.
              </p>
              <Link to='/astuces' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto 
              flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className='flex items-center justify-center'>
              <img src={icnO1} alt=""/>
            </div>

            <div className="mt-[30px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Cliquez pour en savoir plus</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Quisque sit amet sapien pellentesque, consectetur nisi et, porttitor diam.
              </p>
              <Link to='/astuces' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto 
              flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5">
            <div className='flex items-center justify-center'>
              <img src={icnO1} alt=""/>
            </div>
            <div className="mt-[30px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Cliquez pour en savoir plus</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Quisque sit amet sapien pellentesque, consectetur nisi et, porttitor diam.
              </p>
              <Link to='/astuces' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto 
              flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>
            </div>
          </div>
        </div>  
      </div>
    </section>
    {/* about section start */}
    <About />
    {/* about section end */}
    {/* services section start */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Tout pour apprendre</h2>
            <p className='text__para text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur diam id metus auctor consectetur. 
                In hac habitasse platea dictumst.
            </p>
          </div>
          <ServiceList/>
        </div>
      </section>
    {/* services section end */}
    
    {/* feature section start */}
    <section>
      <div className='container'>
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* feature content */}
          <div className="xl:w-[670px]">
            <h2 className='heading'>
              Proposez <br/> un meilleur titre
            </h2>
            <p className='text__para'>
                    Suspendisse ex magna, maximus nec tincidunt nec, sagittis hendrerit dui. Donec quis enim ullamcorper, ullamcorper est nec, ornare nulla. 
                    Nunc dapibus sed ante sed pulvinar. Praesent nulla erat, sagittis sed odio sit amet, consectetur 
                    vehicula mi. Integer fringilla, mauris ut semper vehicula, lectus orci luctus diam, et faucibus ante urna non magna. 
                </p>
                <p className='text__para mt-[30px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur diam id metus auctor consectetur. 
                    In hac habitasse platea dictumst. Praesent turpis mi, euismod finibus dignissim eu, ornare eget nulla. Suspendisse ex magna, 
                    maximus nec tincidunt nec, sagittis hendrerit dui. 
                </p>
            <Link to="/">
              <button className='btn'>Mettre un lien-Home</button>
            </Link>
          </div>
          {/* feature img */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} className="w-3/4"/>
          </div>
        </div>
      </div>
    </section>
    {/* feature section end */}
    {/* Les différents niveaux de cours start */}
    <section>
      <div className="container">
        <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Cours de tous les niveaux
            </h2>
              <p className='text__para text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
        </div>
          <LevelCoursList />
      </div>
    </section>
    {/* Les différents niveaux de cours end */}

    {/* faq section start */}
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className='w-1/2 hidden md:block'>
            <img src={faqImg} alt="" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="heading">
              Les questions fréquentes 
            </h2>
            <FaqList/>
          </div>
        </div>
      </div>
    </section>
    {/* faq section end */}

    {/* témoignages */}
    {/* <section>
      <div className="container">
        <div className='xl:w-[470px] mx-auto'>
              <h2 className='heading text-center'>
                Quelques mots des experts
              </h2>
                <p className='text__para text-center'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
        </div>
        <WordsExperts />
      </div>
    </section> */}
    {/* témoignages */}


  </>
  )
}

export default Home