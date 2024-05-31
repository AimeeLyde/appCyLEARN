import React from 'react'
import WordsExpertList from '../component/WordsExpert/WordsExpertList'
import imgExpert from '../assets/images/expertsWord.jpg'

const experts = [
  {
    name: "Jean Dupont",
    title: "Expert en Cybersécurité",
    advice: "Pour protéger vos informations personnelles, utilisez toujours des mots de passe forts et différents pour chaque compte. L'authentification à deux facteurs est également un excellent moyen de renforcer la sécurité de vos comptes."
  },
  {
    name: "Marie Curie",
    title: "Chercheuse en Sécurité Informatique",
    advice: "Les attaques par phishing sont de plus en plus sophistiquées. Soyez vigilant face aux e-mails et aux liens suspects. Toujours vérifier l'authenticité de l'expéditeur avant de cliquer sur un lien ou de télécharger une pièce jointe."
  },
  {
    name: "Albert Einstein",
    title: "Consultant en Sécurité des Réseaux",
    advice: "La mise à jour régulière de vos logiciels et systèmes d'exploitation est cruciale pour combler les failles de sécurité et protéger vos appareils contre les cyberattaques."
  },
  {
    name: "Ada Lovelace",
    title: "Ingénieure en Sécurité des Systèmes",
    advice: "L'utilisation d'un VPN est recommandée pour sécuriser votre connexion Internet, surtout lorsque vous utilisez des réseaux Wi-Fi publics. Cela chiffre vos données et les protège contre les interceptions."
  },
  {
    name: "Alan Turing",
    title: "Cryptanalyste et Informaticien",
    advice: "Adopter des pratiques de sauvegarde régulières est essentiel. En cas de ransomware ou de panne matérielle, vous pourrez récupérer vos données sans perdre des informations cruciales."
  },
  {
    name: "Grace Hopper",
    title: "Pionnière de l'Informatique",
    advice: "Assurez-vous que vos logiciels et systèmes d'exploitation sont toujours à jour pour protéger vos appareils contre les menaces potentielles."
  },
  {
    name: "Linus Torvalds",
    title: "Créateur de Linux",
    advice: "L'open source est un excellent moyen de maintenir la sécurité, car il permet une revue de code par la communauté pour identifier et corriger les vulnérabilités rapidement."
  },
  {
    name: "Kevin Mitnick",
    title: "Consultant en Sécurité",
    advice: "La formation et la sensibilisation à la sécurité sont essentielles. Les employés bien formés peuvent reconnaître et éviter les menaces potentielles, réduisant ainsi le risque d'attaques réussies."
  },
  {
    name: "Bruce Schneier",
    title: "Cryptographe et Auteur",
    advice: "La cryptographie est une pierre angulaire de la cybersécurité. Utilisez des protocoles de cryptage robustes pour protéger vos données en transit et au repos."
  },
  {
    name: "Whitfield Diffie",
    title: "Cryptographe",
    advice: "L'authentification et la gestion des clés sont essentielles pour la sécurité. Assurez-vous que seules les personnes autorisées ont accès aux informations sensibles."
  },
];
const WordFromExperts = () => {
  return (
    <>
    <div>
      <img src={imgExpert} alt="" />
    </div>
      <section>
    <div className="container">
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Conseils et Mots d'Experts en Cybersécurité</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{expert.name}</h3>
              <p className="text-sm text-gray-600">{expert.title}</p>
              <p className="mt-4 text-lg text-gray-800">{expert.advice}</p>
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

export default WordFromExperts