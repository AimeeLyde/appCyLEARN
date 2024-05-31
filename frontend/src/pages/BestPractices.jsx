import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"
import icnO1 from '../assets/images/icon01.png'
import imgBpract from '../assets/images/img_practices.jpeg'

const practices = [
  "Utilisez des mots de passe forts et uniques pour chaque compte.",
  "Activez l'authentification à deux facteurs (2FA) lorsque c'est possible.",
  "Soyez vigilant face aux e-mails de phishing et ne cliquez pas sur des liens suspects.",
  "Mettez à jour régulièrement vos logiciels et systèmes d'exploitation.",
  "Utilisez un logiciel antivirus et maintenez-le à jour.",
  "Ne partagez pas d'informations personnelles sensibles sur les réseaux sociaux.",
  "Sauvegardez régulièrement vos données importantes.",
  "Utilisez un VPN lorsque vous vous connectez à des réseaux Wi-Fi publics.",
  "Verrouillez votre ordinateur lorsque vous vous absentez.",
  "Soyez prudent lorsque vous téléchargez des fichiers ou des applications.",
  "Limitez les permissions des applications sur vos appareils.",
  "Sécurisez votre réseau Wi-Fi domestique avec un mot de passe fort.",
  "Déconnectez les appareils non utilisés du réseau.",
  "Utilisez un gestionnaire de mots de passe pour gérer vos mots de passe.",
  "Surveillez vos comptes bancaires et financiers pour détecter toute activité suspecte.",
  "Évitez d'utiliser des clés USB non vérifiées.",
  "Apprenez à reconnaître les signes de compromission de votre appareil.",
  "Utilisez des outils de chiffrement pour protéger vos données sensibles.",
  "Éduquez-vous continuellement sur les nouvelles menaces et les meilleures pratiques en cybersécurité.",
  "Faites attention aux liens abrégés, car ils peuvent cacher des destinations dangereuses.",
];
const BestPractices = () => {
  return (
   <>
   <div>
    <img src={imgBpract} alt="" />
   </div>
   <section>
      <div className='container'>
      <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">20 Bonnes Pratiques en Cybersécurité</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2"> {index + 1}</h3>
              <p className="text-lg text-gray-800">{practice}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
    </section>
   </>
  )
}

export default BestPractices