import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
    whileHover={{ scale: 1.02 }}
    className="mb-4"
  >
    <VerticalTimelineElement
      position={index % 2 === 0 ? 'left' : 'right'} // <- Zig-zag alterné
      contentStyle={{
        background: "linear-gradient(145deg, #0a0a0a, #1a0a0a)",
        color: "#F2F2F2",
        boxShadow: "0 0 15px rgba(212, 0, 0, 0.4)",
        borderRadius: "10px",
        paddingBottom: "24px",
        minHeight: "200px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #D40000" }}
      date={experience.date}
      dateClassName="text-accent"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full p-2">
          <img
            src={experience.icon}
            alt={`${experience.company_name} logo`}
            className="w-[50%] h-[50%] max-w-[40px] object-contain"
            loading="lazy"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-accent text-[24px] font-bold leading-tight">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold mb-1">{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-3 mb-4" role="list">
        {experience.points.map((point, pointIndex) => (
          <li
            key={`experience-point-${pointIndex}`}
            role="listitem"
            className="text-white-100 text-[14px] pl-2 leading-[25px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  </motion.div>
);

const Experience = () => {
  return (
    <article id="experience" className="relative z-0" aria-label="Chronologie des expériences professionnelles">
      <motion.div variants={textVariant()} className="mt-12 text-center">
        <p className={styles.sectionSubText}>
          Ce que j'ai fait jusqu'à maintenant
        </p>
        <h2 className={styles.sectionHeadText}>
          Expérience professionnelle
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        {experiences.length > 0 ? (
          <VerticalTimeline lineColor="#D40000">
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
            ))}
          </VerticalTimeline>
        ) : (
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="text-white-100 text-center text-[18px] italic"
          >
            Expériences professionnelles à venir. En attendant, découvrez mes projets académiques !
          </motion.p>
        )}
      </div>
    </article>
  );
};

export default SectionWrapper(Experience, "experience");
