import React from 'react'
import FaqList from '../component/Faq/FaqList'
import faqImg from '../assets/images/faq-img.png'
import tipsimag from '../assets/images/img_tips.jpg'
const tips = [
  {
    title: "Utilisez des mots de passe forts",
    content: "Créez des mots de passe uniques pour chaque compte, en utilisant une combinaison de lettres majuscules et minuscules, de chiffres et de symboles. Évitez les mots de passe évidents comme '123456' ou 'password'."
  },
  {
    title: "Activez l'authentification à deux facteurs",
    content: "L'authentification à deux facteurs (2FA) ajoute une couche supplémentaire de sécurité en demandant une seconde forme de vérification en plus de votre mot de passe, comme un code envoyé par SMS."
  },
  {
    title: "Soyez vigilant face aux e-mails de phishing",
    content: "Ne cliquez pas sur les liens ou n'ouvrez pas les pièces jointes des e-mails provenant d'expéditeurs inconnus. Vérifiez l'authenticité de l'expéditeur avant de répondre ou d'agir sur un e-mail suspect."
  },
  {
    title: "Mettez à jour vos logiciels régulièrement",
    content: "Assurez-vous que votre système d'exploitation, vos applications et vos logiciels antivirus sont toujours à jour pour vous protéger contre les vulnérabilités connues."
  },
  {
    title: "Utilisez un réseau privé virtuel (VPN)",
    content: "Un VPN chiffre votre connexion Internet, ce qui rend plus difficile pour les pirates d'intercepter vos données, surtout lorsque vous utilisez des réseaux Wi-Fi publics."
  },
  {
    title: "Sauvegardez vos données régulièrement",
    content: "Effectuez des sauvegardes régulières de vos données importantes pour éviter de les perdre en cas de panne matérielle, d'attaque de ransomware ou d'autres incidents."
  },
  {
    title: "Soyez prudent sur les réseaux sociaux",
    content: "Ne partagez pas d'informations personnelles sensibles sur les réseaux sociaux et ajustez vos paramètres de confidentialité pour contrôler qui peut voir vos publications."
  },
  {
    title: "Utilisez des logiciels antivirus et antimalwares",
    content: "Installez et maintenez à jour des logiciels antivirus et antimalwares pour protéger vos appareils contre les logiciels malveillants et autres menaces."
  },
  {
    title: "Sécurisez votre réseau Wi-Fi domestique",
    content: "Changez le mot de passe par défaut de votre routeur, activez le chiffrement WPA3 et désactivez la diffusion du SSID pour protéger votre réseau domestique."
  },
  {
    title: "Soyez vigilant lors de l'utilisation des clés USB",
    content: "N'utilisez pas de clés USB non vérifiées, car elles peuvent contenir des logiciels malveillants. Scannez toujours les périphériques de stockage avant de les utiliser."
  },
  {
    title: "Évitez les téléchargements de sources non fiables",
    content: "Téléchargez des logiciels uniquement à partir de sites officiels ou de sources réputées pour minimiser le risque d'infection par des logiciels malveillants."
  },
  {
    title: "Surveillez vos comptes financiers",
    content: "Vérifiez régulièrement vos relevés bancaires et d'autres comptes financiers pour détecter toute activité suspecte ou non autorisée."
  },
  {
    title: "Utilisez des outils de gestion des mots de passe",
    content: "Un gestionnaire de mots de passe peut vous aider à créer, stocker et gérer des mots de passe forts et uniques pour chacun de vos comptes."
  },
  {
    title: "Apprenez à reconnaître les signes de compromission",
    content: "Soyez attentif aux signes indiquant que votre appareil pourrait être compromis, tels que des ralentissements inexpliqués, des pop-ups excessifs ou des comportements inhabituels."
  },
  {
    title: "Limitez les permissions des applications",
    content: "Vérifiez et limitez les permissions accordées aux applications sur vos appareils pour protéger vos informations personnelles."
  },
  {
    title: "Faites attention aux liens abrégés",
    content: "Les liens abrégés peuvent masquer des destinations dangereuses. Utilisez des services de prévisualisation de liens pour vérifier la sécurité avant de cliquer."
  },
];
const Tips = () => {
  return (
   <>
    <div>
      <img src={tipsimag} alt="" />
    </div>
      <section>
        <div className="container">
        <section>
      <div className='container'>
        <h2 className='heading text-center'>
          Astuces pour une Cybersécurité Renforcée
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-sm">
              <h3 className='text-[20px] font-[700] mb-4 text-headingColor'>{tip.title}</h3>
              <p className='text-[16px] text-textColor'>{tip.content}</p>
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

export default Tips