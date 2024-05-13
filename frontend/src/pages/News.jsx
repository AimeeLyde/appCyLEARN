import React from 'react'
import featureImg from "../assets/images/feature-img.png"
import { Link } from 'react-router-dom';
import About2 from '../component/About/About2'
import imgGlossaire from '../assets/images/img_news.jpg'
const News = () => {
  return (
    <>
    {/* 
    #TO DO
    Ecrire "Actualités" sur l'image 
    Diminuer la taille de l'image
    */}
      <div>
        <img src={imgGlossaire} alt="" />
      </div>
      <section>
        <div className='container'>
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* feature content */}
            <div className="xl:w-[670px]">
              <h2 className='heading'>
                Ne ratez <br/> aucune actualités 
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
                <button className='btn'>Mettre un lien vers actualités</button>
              </Link>
            </div>
            {/* feature img */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4"/>
            </div>
          </div>
        </div>
      </section>
      <About2/>
    </>

  )
}

export default News