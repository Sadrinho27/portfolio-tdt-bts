import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Study = () => {
  return (
    <article id="study" className="relative z-0">
      {/* Titre principal */}
      <motion.div variants={textVariant()} className="mt-12 text-center">
        <p className={styles.sectionSubText}>Mes Études</p>
        <h2 className={styles.sectionHeadText}>BTS SIO</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-8 text-white-100">
        {/* Épreuve E5 */}
        <motion.section variants={fadeIn('', '', 0.1, 1)} aria-labelledby="e5-title" className="space-y-4">
          <h3 id="e5-title" className="text-accent text-xl font-bold">
            Épreuve E5 – Parcours de professionnalisation
          </h3>
          <p className="text-white-100 text-[16px] leading-[30px]">
            Cette épreuve consiste à présenter nos projets devant un jury. La grille de synthèse récapitule les différents projets réalisés permettant de valider les compétences du référentiel. Voici ma grille de synthèse :
          </p>
          <ul className="list-none ml-5 space-y-2 text-[16px]" role="list">
            <li role="listitem">
              <motion.a
                href="https://drive.google.com/file/d/1ouulwgfYSJGGa6Bbhyq0oshKgOiIQAWo/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Ouvrir la grille de synthèse pour l'épreuve E5 (PDF)"
              >
                <button className="bg-secondary hover:bg-accent text-white-100 font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out flex items-center gap-2">
                  📄 Grille de synthèse – Épreuve E5
                </button>
              </motion.a>
            </li>
          </ul>
        </motion.section>

        {/* Épreuve E6 */}
        <motion.section variants={fadeIn('', '', 0.2, 1)} aria-labelledby="e6-title" className="space-y-4">
          <h3 id="e6-title" className="text-accent text-xl font-bold">
            Épreuve E6 – Production et fourniture de services informatiques
          </h3>
          <p className="text-white-100 text-[16px] leading-[30px]">
            Cette épreuve repose sur deux fiches présentant des projets réalisés lors des ateliers de professionnalisation. Elle consiste à intervenir sur un projet existant en temps réel, en réponse à la demande d’une nouvelle fonctionnalité. Avant toute modification du code, il est nécessaire de rédiger les user stories et d’adapter la structure de la base de données si besoin.
          </p>
          <ul className="list-none ml-5 space-y-2 text-[16px]" role="list">
            <li role="listitem" className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://drive.google.com/file/d/1L-cceeS0X-Nh6B0qFARR5qwerdta1RYD/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Ouvrir la fiche situation pro pour EasyBee Java (PDF)"
              >
                <button className="bg-secondary hover:bg-accent text-white-100 font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out flex items-center gap-2">
                  📄 Fiche Situation Pro - EasyBee Java
                </button>
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/189F_498eMGeKq7XDtTduibUCjrseNcxF/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Ouvrir la fiche situation pro pour EasyBee Web (PDF)"
              >
                <button className="bg-secondary hover:bg-accent text-white-100 font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out flex items-center gap-2">
                  📄 Fiche Situation Pro - EasyBee Web
                </button>
              </motion.a>
            </li>
          </ul>
        </motion.section>
      </div>
    </article>
  );
};

export default SectionWrapper(Study, 'study');
