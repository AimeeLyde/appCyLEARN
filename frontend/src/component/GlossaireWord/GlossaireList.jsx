import React from 'react'
import { glossaire } from '../../assets/data/glossaire'
import GlossaireCard from './GlossaireCard'

const GlossaireList = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
    {glossaire.map((item,index)=> 
    <GlossaireCard item={item} index={index} key={index} />)}
  </div>
}

export default GlossaireList