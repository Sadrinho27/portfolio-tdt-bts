import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { veilles } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const VeilleCard = ({ veille, index }) => {
  const isRight = index % 2 !== 0; // alternance gauche/droite

  return (
    <motion.div
      variants={fadeIn(isRight ? "right" : "left", "spring", index * 0.15, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <VerticalTimelineElement
        position={isRight ? "right" : "left"}
        contentStyle={{
          backdropFilter: "blur(10px)",
          background: "rgba(15, 0, 0, 0.5)",
          border: "1px solid rgba(212, 0, 0, 0.25)",
          boxShadow: "0 0 25px rgba(212, 0, 0, 0.2)",
          borderRadius: "16px",
          color: "#fff",
          transition: "all 0.4s ease-in-out",
        }}
        contentArrowStyle={{
          borderRight: "7px solid rgba(212, 0, 0, 0.6)",
        }}
        date={
          <span className="text-gray-300 text-[14px] font-light tracking-wide">
            {veille.date}
          </span>
        }
        iconStyle={{
          background: "radial-gradient(circle at center, #ff1a1a 0%, #660000 90%)",
          boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
        }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={veille.icon}
              alt={veille.title}
              className="w-[60%] h-[60%] object-contain drop-shadow-[0_0_8px_#ff1a1a]"
            />
          </div>
        }
      >
        <div className="text-center sm:text-left">
          <h3 className="text-secondary text-[22px] font-bold tracking-wide">
            {veille.title}
          </h3>
          <p className="text-white-100 text-[15px] font-semibold italic mt-1">
            {veille.company_name}
          </p>

          <a
            href={veille.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-white-100 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-red-dark transition-all px-3 py-1 rounded-md shadow-md hover:shadow-red-500/40"
          >
            🔗 Consulter la source
          </a>
        </div>

        {/* Points clés */}
        <ul className="mt-4 list-disc ml-5 space-y-2">
          {veille.points.map((point, i) => (
            <motion.li
              key={`veille-point-${i}`}
              className="text-white-100 text-[14px] leading-relaxed pl-1"
              whileHover={{ scale: 1.03, color: "#FF4D4D" }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </motion.div>
  );
};

const Veille = () => (
  <>
    <motion.div
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="text-center"
    >
      <p className={styles.sectionSubText}>
        Réalité augmentée & innovation
      </p>
      <h2 className={styles.sectionHeadText}>
        Veille technologique
      </h2>
    </motion.div>

    <div className="mt-16 flex flex-col">
      <VerticalTimeline lineColor="rgba(212, 0, 0, 0.4)">
        {veilles.map((veille, index) => (
          <VeilleCard key={`veille-${index}`} veille={veille} index={index} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Veille, "veille");
