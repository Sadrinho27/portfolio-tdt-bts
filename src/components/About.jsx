import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full gold-grey-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>À propos</h2>
      </motion.div>

      {/* Présentation */}
      <motion.div variants={textVariant()} className="mt-10">
        <span className="font-semibold text-white-800">Je me présente :</span>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] text-left"
      >
        Je m’appelle <strong>Demeillez Tabere Titouan</strong>, âgé de 19 ans. Je suis étudiant en <strong>BTS Services Informatiques aux Organisations (SIO)</strong>, option <strong>Solutions Logicielles et Applications Métiers (SLAM)</strong> au Lycée Gustave Flaubert, situé à Bihorel.
      </motion.p>

      {/* Mon Parcours */}
      <motion.div variants={textVariant()} className="mt-10">
        <span className="font-semibold text-white-800">Mon parcours :</span>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] text-left"
      >
        Depuis tout petit, j’ai toujours été passionné par l’informatique, et en grandissant, je me suis intéressé à la programmation, ce qui m’a permis de découvrir comment sont conçus les logiciels et les applications. C’est à ce moment-là que j’ai su que je voulais devenir développeur. Ce métier me motive pour plusieurs raisons : j’aime écrire des lignes de code, me casser la tête pour améliorer des scripts, et surtout, j’adore voir les résultats concrets de mon travail après avoir exploré toutes les solutions possibles.
      </motion.p>

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
