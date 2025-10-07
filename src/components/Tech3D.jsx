import React from "react";
import { motion } from "framer-motion"; // Ajoute pour header et stagger
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion"; // Pour animations cohérentes

const Tech = () => {
  return (
    <article id="tech" className="relative z-0"> {/* ID pour scroll ; article semantique */}
      {/* Header - Uniforme avec autres sections */}
      <motion.div variants={textVariant()} className="mt-12 text-center">
        <p className={styles.sectionSubText}>Ma stack technique</p>
        <h2 className={styles.sectionHeadText}>Compétences</h2>
      </motion.div>

      <div className="mt-20 flex flex-row flex-wrap justify-center items-center gap-10">
        {technologies.map(({ name, icon }, index) => (
          <motion.div
            key={name}
            variants={fadeIn('up', 'spring', index * 0.2, 0.75)} // Stagger entrée au scroll
            className="w-24 h-24 xs:w-28 xs:h-28 flex justify-center items-center" // Responsive : plus petit mobile
            whileHover={{ scale: 1.1 }} // Hover feedback
            aria-label={`${name} technology icon`} // A11y pour screen readers
          >
            <BallCanvas icon={icon} name={name} /> {/* Passe name pour title dans Ball */}
          </motion.div>
        ))}
      </div>
    </article>
  );
};

export default SectionWrapper(Tech, "tech"); // Ajoute 'tech' pour HOC id si besoin
