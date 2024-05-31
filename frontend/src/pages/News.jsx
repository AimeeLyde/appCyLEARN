import React from 'react'
import featureImg from "../assets/images/feature-img.jpg"
import { Link } from 'react-router-dom';
import About2 from '../component/About/About2'
import imgGlossaire from '../assets/images/news.jpg'
const News = () => {
  return (
    <>
    {/* 
    #TO DO
    Ecrire "Actualités" sur l'image 
    Diminuer la taille de l'image
    */}
      <div>
        <img src={imgGlossaire} alt="" />
      </div>
      <section>
        <div className='container'>
          <div className="flex items-center justify-between flex-col lg:flex-row">
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
              
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <h2 className='heading'>
            Les Dernières Attaques et Vulnérabilités
          </h2>
          <div className='text__para'>
            <h3>Récents Ransomwares</h3>
            <p>
              Plusieurs entreprises de premier plan ont récemment été victimes de ransomware, entraînant des pertes financières et des interruptions de service. Les experts recommandent des sauvegardes régulières et l'éducation des employés pour minimiser les risques.
            </p>
          </div>
          <div className='text__para mt-[30px]'>
            <h3>Vulnérabilités Zero-Day</h3>
            <p>
              Des failles critiques ont été découvertes dans des logiciels couramment utilisés, nécessitant des mises à jour immédiates pour éviter des exploitations potentielles.
            </p>
          </div>
          <div className='text__para mt-[30px]'>
            <h3>Attaques Phishing en Augmentation</h3>
            <p>
              Les campagnes de phishing sont de plus en plus sophistiquées, ciblant des individus avec des courriels personnalisés. La vigilance et la formation continue sont essentielles pour se protéger.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <h2 className='heading'>
            Nouvelles Réglementations et Conformité
          </h2>
          <div className='text__para'>
            <h3>RGPD et Ses Impacts</h3>
            <p>
              Depuis l'introduction du RGPD, les entreprises doivent se conformer à des normes strictes de protection des données personnelles. Les non-conformités peuvent entraîner des amendes sévères.
            </p>
          </div>
          <div className='text__para mt-[30px]'>
            <h3>Normes de Sécurité ISO</h3>
            <p>
              Les nouvelles versions des normes ISO sur la sécurité de l'information fournissent des directives mises à jour pour protéger les informations sensibles.
            </p>
          </div>
          <div className='text__para mt-[30px]'>
            <h3>Conformité HIPAA</h3>
            <p>
              Pour les entités de santé, la conformité HIPAA reste cruciale pour la protection des informations de santé des patients. Des mises à jour régulières sont nécessaires pour rester conformes.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <h2 className='heading'>
            Tendances et Innovations en Cybersécurité
          </h2>
          <div className='text__para'>
            <h3>Intelligence Artificielle et Sécurité</h3>
            <p>
              L'IA joue un rôle croissant dans la détection des menaces et la réponse aux incidents, offrant des solutions plus rapides et plus précises.
            </p>
          </div>
          <div className='text__para mt-[30px]'>
            <h3>Blockchain pour la Sécurité des Données</h3>
            <p>
              La technologie blockchain est explorée pour assurer l'intégrité et la sécurité des données, avec des applications dans divers secteurs.
            </p>
          </div>
          <div className='text__para mt-[30px]'>
            <h3>Évolution des Solutions Antivirus</h3>
            <p>
              Les logiciels antivirus évoluent pour inclure des fonctionnalités avancées telles que la détection comportementale et la protection contre les ransomwares.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <h2 className='heading'>
            Conseils et Bonnes Pratiques
          </h2>
          <div className='text__para'>
            <h3>Renforcement des Mots de Passe</h3>
            <p>
              Utilisez des mots de passe forts et uniques pour chaque compte, et activez l'authentification à deux facteurs lorsque cela est possible.
            </p>
          </div>
          <div className='text__para mt-[30px]'>
            <h3>Sauvegardes et Reprises après Sinistre</h3>
            <p>
              Effectuez des sauvegardes régulières de vos données critiques et testez régulièrement vos plans de reprise après sinistre.
            </p>
          </div>
          <div className='text__para mt-[30px]'>
            <h3>Sensibilisation à la Sécurité</h3>
            <p>
              Organisez des sessions de formation pour sensibiliser les employés aux menaces courantes et aux meilleures pratiques de cybersécurité.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <h2 className='heading'>
            Études de Cas et Retours d'Expérience
          </h2>
          <div className='text__para'>
            <h3>Cas de Violation de Données</h3>
            <p>
              Analysez des cas récents de violations de données pour comprendre comment elles se sont produites et comment elles auraient pu être évitées.
            </p>
          </div>
          <div className='text__para mt-[30px]'>
            <h3>Stratégies de Réponse aux Incidents</h3>
            <p>
              Examinez les stratégies efficaces de réponse aux incidents mises en place par diverses entreprises pour minimiser les dommages.
            </p>
          </div>
          <div className='text__para mt-[30px]'>
            <h3>Leçons Tirées des Cyberattaques</h3>
            <p>
              Discutez des leçons apprises des cyberattaques majeures et comment les entreprises peuvent renforcer leurs défenses.
            </p>
          </div>
        </div>
      </section>
      
    </>

  )
}

export default News