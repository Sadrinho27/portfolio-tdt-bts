import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Study = () => {
  return (
    <>
      {/* Titre principal */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Mes Études</p>
        <h2 className={`${styles.sectionHeadText}`}>BTS SIO</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-8 text-white">
        {/* Épreuve E5 */}
        <motion.div variants={fadeIn('', '', 0.1, 1)}>
          <h3 className="text-secondary text-xl font-bold">Épreuve E5 – Parcours de professionnalisation</h3>
          <p className="mt-2 text-[16px]">
            Cette épreuve consiste à présenter nos projets devant un jury. La grille de synthèse récapitule les différents projets réalisés permettant de valider les compétences du référentiel. Voici ma grille de synthèse :
          </p>
          <a
            href="https://drive.google.com/file/d/1ouulwgfYSJGGa6Bbhyq0oshKgOiIQAWo/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4"
          >
            <button className="bg-secondary hover:bg-tertiary text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 ease-in-out">
              📄 Grille de synthèse – Épreuve E5
            </button>
          </a>
        </motion.div>

        {/* Épreuve E6 */}
        <motion.div variants={fadeIn('', '', 0.2, 1)}>
          <h3 className="text-secondary text-xl font-bold">Épreuve E6 – Production et fourniture de services informatiques</h3>
          <p className="mt-2 text-[16px]">
            Cette épreuve repose sur deux fiches présentant des projets réalisés lors des ateliers de professionnalisation. Elle consiste à intervenir sur un projet existant en temps réel, en réponse à la demande d’une nouvelle fonctionnalité. Avant toute modification du code, il est nécessaire de rédiger les user stories et d’adapter la structure de la base de données si besoin.
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-2 text-[16px]">
            <li>
              <a
                href="https://drive.google.com/file/d/1L-cceeS0X-Nh6B0qFARR5qwerdta1RYD/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-secondary hover:bg-tertiary text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 ease-in-out">
                  📄 Fiche Situation Pro - EasyBee Java
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/189F_498eMGeKq7XDtTduibUCjrseNcxF/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-secondary hover:bg-tertiary text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 ease-in-out">
                  📄 Fiche Situation Pro - EasyBee Web
                </button>
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

    </>
  );
};

export default SectionWrapper(Study, 'study');
