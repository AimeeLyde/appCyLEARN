import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom';
const About = () => {
  return <section>
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/* about image */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>
            {/* about contenu */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading">
                    Premier Titre pour la section
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
                <Link to='/'><button className='btn'>Mettre un lien-About</button></Link>
            </div>
        </div>
    </div>
  </section>
}

export default About