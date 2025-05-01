import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 25,
        scale: 1.03,
        speed: 400,
      }}
      className="w-full xs:w-[220px] sm:w-[240px] rounded-[15px] border border-red-700 bg-gradient-to-br from-[#0a0a0a] to-[#1c0a0a] shadow-md hover:shadow-red-500 transition-all duration-300"
    >
      <div className="rounded-[15px] py-4 px-4 flex flex-col justify-between min-h-[230px]">
        {/* Icon */}
        <div className="relative w-full flex justify-center items-center overflow-hidden rounded-[10px] p-2 min-h-[80px] max-h-[120px]">
          <img
            src={icon}
            alt="service_icon"
            className="object-contain w-[40px] h-[40px]"  // Taille encore réduite de l'icône
          />
        </div>

        {/* Title */}
        <div className="mt-4 flex-1 flex flex-col items-center text-center">
          <h3 className="text-red-500 text-[16px] font-bold">{title}</h3>  {/* Taille du texte réduite */}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const About = () => {
  return (
    <>
      {/* Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>À propos</h2>
      </motion.div>

      {/* Présentation */}
      <motion.div variants={textVariant()} className="mt-10">
        <h3 className="text-secondary text-xl font-bold">Je me présente :</h3>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-[16px] max-w-4xl leading-[30px]"
      >
        Je m’appelle <strong>Demeillez Tabere Titouan</strong>, âgé de 19 ans. Je suis étudiant en <strong>BTS Services Informatiques aux Organisations (SIO)</strong>, option <strong>Solutions Logicielles et Applications Métiers (SLAM)</strong> au Lycée Gustave Flaubert, situé à Bihorel.
      </motion.p>

      {/* Mon Parcours */}
      <motion.div variants={textVariant()} className="mt-10">
        <h3 className="text-secondary text-xl font-bold">Mon parcours :</h3>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-[16px] max-w-4xl leading-[30px] text-left"
      >
        Depuis tout petit, j’ai toujours été passionné par l’informatique, et en grandissant, je me suis intéressé à la programmation, ce qui m’a permis de découvrir comment sont conçus les logiciels et les applications. C’est à ce moment-là que j’ai su que je voulais devenir développeur. Ce métier me motive pour plusieurs raisons : j’aime écrire des lignes de code, me casser la tête pour améliorer des scripts, et surtout, j’adore voir les résultats concrets de mon travail après avoir exploré toutes les solutions possibles.
      </motion.p>

      <motion.div variants={fadeIn('', '', 0.2, 1)} className="mt-10">
        <p className="text-tertiary text-[17px] mb-4">
          Vous pouvez consulter mon CV en cliquant sur le bouton ci-dessous :
        </p>
        <a
          href="https://drive.google.com/file/d/1enL2dJq5f6yAOsK5SXjxRS8f67y5p8jf/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="bg-secondary hover:bg-tertiary text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 ease-in-out">
            📄 Voir mon CV (PDF)
          </button>
        </a>
      </motion.div>

      {/* Section Services */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
