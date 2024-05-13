import React from 'react'
import FaqList from '../component/Faq/FaqList'
import faqImg from '../assets/images/faq-img.png'
import tipsimag from '../assets/images/img_tips.jpg'
const Tips = () => {
  return (
   <>
    <div>
      <img src={tipsimag} alt="" />
    </div>
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
   </>
  )
}

export default Tips