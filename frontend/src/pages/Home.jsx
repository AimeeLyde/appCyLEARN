import React from 'react'
import About from '../component/About/About'
import ServiceList from '../component/Services/ServiceList'
import ServiceCard from '../component/Services/ServiceCard'
import faqImg from '../assets/images/faq-img.jpg'
import featureImg from "../assets/images/feature-img.jpg"
import heroImg01 from '../assets/images/homme-vert.jpg'
import heroImg02 from '../assets/images/cy-adult.png'
import heroImg03 from '../assets/images/cy-old.png'
import accessC from "../assets/images/accesCours.jpg"
import badge from "../assets/images/badge.jpg"
import classement from "../assets/images/classement.jpg"
import quiz from "../assets/images/quiz.jpg"
import icnO1 from '../assets/images/glossaire.jpg'
import icn02 from '../assets/images/astuces.jpg'
import icn03 from '../assets/images/bonnesP.jpg'
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
              <p className='text__para'>Bienvenue sur CY LEARN, la plateforme interactive dédiée à l'apprentissage de la cybersécurité pour tous les âges. 
              Que vous soyez un professionnel cherchant à renforcer vos compétences, un étudiant passionné par la sécurité informatique, 
              ou un parent souhaitant initier vos enfants aux bonnes pratiques en ligne, 
            <br />  <strong>CY LEARN</strong>  est votre solution. 
              </p>
              <Link to="/connexion">
                 <button className="btn">Commencer maintenant !</button>
              </Link>   
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
          <h2 className='heading text-center'>Explorez nos ressources</h2>
          <p className='text__para text-center'>Trois rubriques essentielles de CY LEARN qui vous aideront à renforcer vos compétences en cybersécurité. </p>
        </div>

        <div className="grid grid-cols_1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5">
            <div className='flex items-center justify-center'>
              <img src={icnO1} alt="" className="w-32 h-32 lg:w-48 lg:h-48 object-contain"/>
            </div>

            <div className="mt-[30px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Naviguez facilement dans le jargon technique</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Découvrez les définitions claires et concises des termes clés de la cybersécurité.
              Parfait pour les novices et les experts.
              </p>
              <Link to='/glossaire' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto 
              flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className='flex items-center justify-center'>
              <img src={icn02} alt="" className="w-32 h-32 lg:w-48 lg:h-48 object-contain"/>
            </div>

            <div className="mt-[30px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Améliorez votre sécurité en ligne</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Des configurations d'appareils aux pratiques de navigation sécurisée. Rédigées par des experts en cybersécurité.
              </p>
              <Link to='/astuces' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto 
              flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5">
            <div className='flex items-center justify-center'>
              <img src={icn03} alt=""  className="w-32 h-32 lg:w-48 lg:h-48 object-contain"/>
            </div>
            <div className="mt-[30px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Adoptez des habitudes sécuritaires avec nos guides</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Protégez vos informations personnelles et sécurisez vos comptes. Suivez nos recommandations pour prévenir les cyberattaques.
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
    {/* <About /> */}
    {/* about section end */}
    {/* services section start */}
      {/* <section>
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
      </section> */}
    {/* services section end */}
    
    {/* feature section start */}
    <section>
  <div className='container'>
    <div className="flex items-center justify-between flex-col lg:flex-row">
      {/* feature content */}
      <div className="xl:w-[670px]">
        <h2 className='heading'>
          Ne ratez <br/> aucune actualité 
        </h2>
        <p className='text__para'>
          La cybersécurité est un domaine en constante évolution. Récemment, plusieurs grandes entreprises ont subi des attaques de ransomware, soulignant l'importance de renforcer les mesures de sécurité. Les experts recommandent de maintenir les logiciels à jour et de former les employés à reconnaître les tentatives de phishing.
        </p>
        <p className='text__para mt-[30px]'>
          De plus, de nouvelles réglementations sur la protection des données sont entrées en vigueur, imposant des normes plus strictes pour la gestion des informations personnelles. Il est crucial de se tenir informé des dernières tendances et solutions en cybersécurité pour protéger efficacement ses actifs numériques.
        </p>
        <Link to="/actualites">
          <button className='btn'>Evoluez avec la cybersécurité</button>
        </Link>
      </div>
      {/* feature img */}
      <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
        <img src={featureImg} className="w-3/4"/>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="container">
    <div className='xl:w-[670px] mx-auto text-center'>
      <h2 className='heading'>
        Accédez à Toutes les Ressources
      </h2>
      <p className='text__para'>
        Connectez-vous pour profiter de tous les outils et contenus de CY LEARN. En tant qu'utilisateur connecté, vous aurez accès à une gamme complète de ressources pour améliorer vos compétences en cybersécurité.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-around mt-[30px]">
      <div className="py-[20px] px-5 text-center">
        <img src={accessC} alt="Cours" className="w-48 h-48 mx-auto object-contain"/>
        <h3 className='text-[20px] leading-6 text-headingColor font-[700] mt-[10px]'>Accès aux Cours</h3>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
          Suivez des cours interactifs conçus par des experts pour tous les niveaux.
        </p>
      </div>
      <div className="py-[20px] px-5 text-center">
        <img src={quiz} alt="Quiz" className="w-48 h-48 mx-auto object-contain"/>
        <h3 className='text-[20px] leading-6 text-headingColor font-[700] mt-[10px]'>Accès aux Quiz</h3>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
          Testez vos connaissances avec des quiz variés et engageants.
        </p>
      </div>
      <div className="py-[20px] px-5 text-center">
        <img src={classement} alt="Classement" className="w-48 h-48 mx-auto object-contain"/>
        <h3 className='text-[20px] leading-6 text-headingColor font-[700] mt-[10px]'>Classement des Joueurs</h3>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
          Comparez vos performances avec celles des autres utilisateurs et grimpez dans le classement.
        </p>
      </div>
      <div className="py-[20px] px-5 text-center">
        <img src={badge} alt="Badges" className="w-48 h-48 mx-auto object-contain"/>
        <h3 className='text-[20px] leading-6 text-headingColor font-[700] mt-[10px]'>Obtention de Badges</h3>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
          Gagnez des badges en fonction de vos progrès et de vos réalisations.
        </p>
      </div>
    </div>
    <div className="text-center mt-[50px]">
      <Link to="/connexion">
        <button className='btn'>Se Connecter Maintenant</button>
      </Link>
    </div>
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