import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      whileHover={{ scale: 1.02 }}
      className="w-full h-full"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.03,
          speed: 400,
        }}
        className="w-full h-full rounded-[20px] border border-red-dark bg-gradient-to-br from-black-200 to-black-100 shadow-card hover:shadow-red-500/50 transition-all duration-300"
      >
        <div className="rounded-[20px] py-6 px-6 flex flex-col justify-between min-h-[460px]">
          {/* Image */}
          <div className="relative w-full aspect-[16/9] flex justify-center items-center overflow-hidden rounded-[15px] bg-black-muted p-2">
            <img
              src={image}
              alt={`Image du projet ${name}`}
              className="max-h-[260px] w-auto object-contain"
            />
            <div className="absolute inset-0 flex justify-end m-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-secondary hover:bg-accent w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-12"
              >
                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>

          {/* Titre + description */}
          <div className="mt-5 flex-1 flex flex-col items-center text-center">
            <h3 className="text-secondary text-[21px] font-bold">{name}</h3>
            <p className="mt-2 text-white-100 text-[14px] leading-[20px]">{description}</p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <motion.span
                key={tag.name}
                className={`px-3 py-1 rounded-full text-[13px] ${tag.color} font-medium`}
                whileHover={{ scale: 1.05 }}
              >
                #{tag.name}
              </motion.span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center"
      >
        <p className={styles.sectionSubText}>Mon Travail</p>
        <h2 className={styles.sectionHeadText}>Mes Projets</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-3 text-white-100 text-[17px] max-w-3xl leading-[30px]"
      >
        Ces projets démontrent mon savoir-faire technique. Pour chacun, vous trouverez une description concise ainsi qu’un lien vers le dépôt de code.
      </motion.p>

      {/* 🧱 Grille */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="
          mt-20 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-10 
          auto-rows-fr 
          place-items-stretch
        "
      >
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <p className="col-span-full text-white-100 text-center text-[18px] italic">
            Projets à venir. En attendant, explorez mes compétences !
          </p>
        )}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "work");
