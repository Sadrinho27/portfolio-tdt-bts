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
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      {/* Conteneur avec le dégradé gold-grey-gradient */}
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full sm:w-[360px] gold-grey-gradient p-[1px] rounded-[20px]"
      >
        {/* Contenu de la carte */}
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[380px] flex justify-evenly items-center flex-col">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-[15px]"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>

          <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>

          {/* Affichage des tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
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
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mon Travail</p>
        <h2 className={`${styles.sectionHeadText}`}>Mes Projets</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Voici les projets que j'ai pu réaliser, ils attestent de ma compétence, chaque projet est accompagné d'une petite description ainsi qu'un lien pour accéder au dépôt.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
