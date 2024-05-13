import React from 'react'
import WordsExpertList from '../component/WordsExpert/WordsExpertList'
import imgExpert from '../assets/images/img_expertWords.jpg'
const WordFromExperts = () => {
  return (
    <>
    <div>
      <img src={imgExpert} alt="" />
    </div>
      <section>
    <div className="container">
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            {/* Faut que le titre prenne la largeur */}
            Quelques mots et conseils des experts en CyberSécurité
          </h2>
            <p className='text__para text-center'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
      </div>
        <WordsExpertList />
    </div>
  </section>
    </>

  )
}

export default WordFromExperts