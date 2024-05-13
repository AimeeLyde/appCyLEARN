import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"
import icnO1 from '../assets/images/icon01.png'
import imgBpract from '../assets/images/img_practices.jpeg'
const BestPractices = () => {
  return (
   <>
   <div>
    <img src={imgBpract} alt="" />
   </div>
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
              <Link to='/bonnesPratiques' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto 
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
   </>
  )
}

export default BestPractices