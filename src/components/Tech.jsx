import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ name, icon, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
    className="w-full from-secondary to-red-dark bg-gradient-to-br p-[1px] rounded-[20px] shadow-lg shadow-red-700/50"
    whileHover={{ scale: 1.05 }}
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[140px] flex flex-col justify-center items-center"
    >
      <img
        src={icon}
        alt={`${name} icon`}
        className="w-16 h-16 object-contain"
        loading="lazy"
      />
      <h3 className="text-secondary text-[18px] font-bold mt-4 text-center">{name}</h3>
    </Tilt>
  </motion.div>
);

const Tech = () => {
  return (
    <article id="tech" className="relative z-0">
      {/* Header */}
      <motion.div variants={textVariant()} className="mt-12 text-center">
        <p className={styles.sectionSubText}>Ma stack technique</p>
        <h2 className={styles.sectionHeadText}>Compétences</h2>
      </motion.div>

      {/* Grid techs */}
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-10">
          {technologies.map((tech, index) => (
            <div key={tech.name} className="w-[150px] md:w-[200px]">
              <TechCard index={index} {...tech} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SectionWrapper(Tech, "tech");
