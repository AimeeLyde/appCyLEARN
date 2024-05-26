import React from 'react'
import {useState} from 'react'
import signupImg from '../assets/images/signup.gif';
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from 'react-spinners/HashLoader'



const Register = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: "",
      password: "",
      })
    const handleInputChange = e=>{
      setFormData({... formData,[e.target.name]:e.target.value})
    }
    const [loading, setLoading] =useState(false)
    const navigate = useNavigate()


    const submitHandler = async event=>{
      event.preventDefault()
      setLoading(true)

      try {
        const res = await fetch(`${BASE_URL}/auth/register`,{
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        const {message} = await res.json()
        if (!res.ok) {
          throw new Error(message)
        }

        setLoading(false)
        toast.success(message)
        navigate('/connexion')
      } catch (err) {
        toast.error(err.message)
        setLoading(false)
      }
    }
  return (
   <section className='px-5 xl:px-0'>
    <div className='max-w-[1170px] mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
          <figure className='rounded-l-lg'>
            <img src={signupImg} alt="" className='w-full rounded-l-lg'/>
          </figure>
        </div>

        <div className="rounded-l-lg lg:pl-16 py-10">
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
            Créer <span className='text-primaryColor'>votre compte</span>
          </h3>

          <form onSubmit={submitHandler}>
            <div className='mb-5'>
              <input 
              type="text" 
              placeholder='Nom complet' 
              name='name' 
              value={formData.name}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leding-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
              required
              />
            </div>

            <div className='mb-5'>
              <input 
              type="email" 
              placeholder='Entrez votre email' 
              name='email' 
              value={formData.email} 
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leding-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
              required
              />
            </div>

            <div className='mb-5'>
              <input 
              type="password" 
              placeholder='Entrez votre mot de passe' 
              name='password' 
              value={formData.password} 
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leding-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
              required
              />
            </div>

            <div className='mt-7'>
              <button disabled={loading && true}
              type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                {loading ? (<HashLoader size={35} color="#FFFFFF"/>) :('créer mon compte')}
              </button>
            </div>
            <p className='mt-5 text-textColor text-center'>
              Déjà un compte ? <Link to='/connexion' className='text-primaryColor'>me connecter</Link>
            </p>
          </form>

        </div>

      </div>
    </div>
   </section>
  )
}

export default Register