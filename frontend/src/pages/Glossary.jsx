import React from 'react'
import GlossaireList from '../component/GlossaireWord/GlossaireList'
import imgGlossaire from '../assets/images/img_glossaire.jpeg'
const Glossary = () => {
  return (
    <>
    {/* 
    #TO DO
    Ecrire "Le glossaire" sur l'image 
    Les lettres auront la même couleur
    Mettre une barre de recherche en haut
    Diminuer la taille de l'image
    */}
      <div>
        <img src={imgGlossaire} alt="" />
      </div>
    <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Tout pour apprendre</h2>
        </div>
        <GlossaireList/>
      </div>
    </section>
    </>
 
  )
}

export default Glossary