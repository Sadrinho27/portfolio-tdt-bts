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
    <div className="w-full sm:w-[360px] ...">
      <Tilt
        options={{
          max: 25,
          scale: 1.03,
          speed: 400,
        }}
        className="w-full sm:w-[360px] rounded-[20px] border border-red-700 bg-gradient-to-br from-[#0a0a0a] to-[#1c0a0a] shadow-md hover:shadow-red-500 transition-all duration-300"
      >
        <div className="rounded-[20px] py-6 px-6 flex flex-col justify-between min-h-[460px]">
          {/* Image */}
          <div className="relative w-full flex justify-center items-center overflow-hidden rounded-[15px] bg-black p-2 min-h-[200px] max-h-[280px]">
            <img
              src={image}
              alt="project_image"
              className="max-h-[260px] w-auto object-contain"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-red-700 hover:bg-red-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-12"
              >
                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>

          {/* Titre et description */}
          <div className="mt-5 flex-1 flex flex-col items-center text-center">
            <h3 className="text-red-500 text-[21px] font-bold">{name}</h3>
            <p className="mt-2 text-gray-200 text-[14px]">{description}</p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[13px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.2)} // ajoute un petit delay si besoin
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }} // s'active au scroll
      >
        <p className={`${styles.sectionSubText}`}>Mon Travail</p>
        <h2 className={`${styles.sectionHeadText}`}>Mes Projets</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Voici les projets que j'ai pu réaliser, ils attestent de ma compétence, chaque projet est accompagné d'une petite description ainsi qu'un lien pour accéder au dépôt.
        </motion.p>

      </div>
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)} // ou textVariant, ou autre
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-20 flex flex-wrap gap-7"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "works");
