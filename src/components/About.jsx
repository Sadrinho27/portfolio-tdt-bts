import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
    whileHover={{ scale: 1.05 }}
    className="flex justify-center"
  >
    <Tilt
      options={{
        max: 25,
        scale: 1.03,
        speed: 400,
      }}
      className="w-full xs:w-[220px] sm:w-[240px] rounded-[15px] border border-red-dark bg-gradient-to-br from-black-100 to-black-200 shadow-md hover:shadow-[0_0_20px_rgba(212,0,0,0.6)] transition-all duration-300 cursor-pointer"
      tabIndex={0}
      role="button"
      aria-label={`Découvrir ${title}`}
    >
      <div className="rounded-[15px] py-4 px-4 flex flex-col justify-between min-h-[230px]">
        {/* Icon */}
        <div className="relative w-full flex justify-center items-center overflow-hidden rounded-[10px] p-2 min-h-[80px] max-h-[120px]">
          <img
            src={icon}
            alt={`Icône pour ${title}`}
            className="object-contain w-[32px] h-[32px]"
            loading="lazy"
          />
        </div>

        {/* Title */}
        <div className="mt-4 flex-1 flex flex-col items-center text-center">
          <h3 className="text-secondary text-[16px] font-bold">{title}</h3>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const About = () => {
  return (
    <article id="about" className="relative z-0">
      {/* Header */}
      <motion.div variants={textVariant()} className="mt-12 text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>À propos</h2>
      </motion.div>

      {/* Présentation */}
      <motion.div variants={textVariant()} className="mt-10">
        <h3 className="text-secondary text-xl font-bold">Je me présente :</h3>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-white-100 text-[16px] max-w-4xl leading-relaxed font-normal"
      >
        Je m’appelle <strong className="font-bold">Demeillez Tabere Titouan</strong>, âgé de 19 ans.
        Je suis étudiant en <strong className="font-bold">BTS Services Informatiques aux Organisations (SIO)</strong>,
        option <strong className="font-bold">Solutions Logicielles et Applications Métiers (SLAM)</strong>
        au Lycée Gustave Flaubert, situé à Bihorel.
      </motion.p>

      {/* Mon Parcours */}
      <motion.div variants={textVariant()} className="mt-10">
        <h3 className="text-secondary text-xl font-bold">Mon parcours :</h3>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-white-100 text-[16px] max-w-4xl leading-relaxed font-normal"
      >
        Depuis tout petit, j’ai toujours été passionné par l’informatique, et en grandissant,
        je me suis intéressé à la programmation, ce qui m’a permis de découvrir comment sont conçus
        les logiciels et les applications. C’est à ce moment-là que j’ai su que je voulais devenir développeur.
        Ce métier me motive pour plusieurs raisons : j’aime écrire des lignes de code, me casser la tête
        pour améliorer des scripts, et surtout, j’adore voir les résultats concrets de mon travail après
        avoir exploré toutes les solutions possibles.
      </motion.p>

      {/* CV Button */}
      <motion.div variants={fadeIn('', '', 0.2, 1)} className="mt-10">
        <p className="text-white-100 text-[17px] mb-4">
          Vous pouvez consulter mon CV en cliquant sur le bouton ci-dessous :
        </p>
        <motion.a
          href="https://drive.google.com/file/d/1enL2dJq5f6yAOsK5SXjxRS8f67y5p8jf/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Télécharger ou visualiser mon CV au format PDF"
        >
          <button className="bg-secondary hover:bg-red-light text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-red-500/50 transition-all duration-300 ease-in-out flex items-center gap-2">
            📄 Voir mon CV (PDF)
          </button>
        </motion.a>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={fadeIn('up', '', 0.5, 1)}
        className="mt-20 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </article>
  );
};

export default SectionWrapper(About, 'about');
