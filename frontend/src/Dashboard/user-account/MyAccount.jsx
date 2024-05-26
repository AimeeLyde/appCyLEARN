import React from 'react'
import { useContext, useState } from 'react';
import { authContext } from '../../context/AuthContext';
import userImg from "../../assets/images/doctor-img01.png";
const MyAccount = () => {

  const {dispatch} = useContext(authContext)
  const [ tab, setTab ] = useState('cours')
  const handleLogout = () =>{
    dispatch({type: "LOGOUT"})
  }
  return (
<div className='max-w-[1170] px-5 mx-auto' >
  <div className="grid md:grid-cols-3 gap-10">
    <div className='pb-[50px] px-[30px] rounded-md'>
      <div className='flex items-center justify-center'>
        <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
          <img src={userImg}
          alt="badge"
          className='w-full h-full rounded-full'>
          </img>
        </figure>
      </div>
      <div className="text-center mt-4">
        <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>
            CY Novice : 200 exp
        </h3>
        <h2 className='text-textColor text-[20px] leading-6 font-medium'> Aimée Désirée </h2>
        <p className="text-textColor text-[15px] leading-6 font-medium">email@email.com</p>
      </div>
      <div className="mt-[50px] md:mt-[100px]">
        <button onClick={handleLogout} className='w-full bg-[#181A13] p-3 text-[16px] leading-7 rounded-md text-white'>
            Déconnexion
        </button>
        <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>
            Supprimer mon compte
        </button>
      </div>
    </div>

    <div className="md:col-span-2 md:px-[30px]">
      <div>
        <button onClick={() => setTab('cours')} className='p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px]
        leading-7 border border-solid border-primaryColor'>
          Cours
        </button>
        <button className='p-2 px-5 rounded-md text-headingColor font-semibold text-[16px]
        leading-7 border border-solid border-primaryColor'>
          Quiz
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default MyAccount