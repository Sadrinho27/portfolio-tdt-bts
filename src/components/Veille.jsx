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
import { textVariant } from "../utils/motion";

const VeilleCard = ({ veille }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "linear-gradient(145deg, #1a0e10, #3a0d11)", // fond noir-rouge
      color: "#fff",
      boxShadow: "0 0 10px rgba(255, 0, 0, 0.3)", // effet lumineux rouge
    }}
    contentArrowStyle={{ borderRight: "7px solid #8B0000" }} // flèche rouge foncé
    date={veille.date}
    iconStyle={{ background: veille.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={veille.icon}
          alt={`${veille.company_name}_${veille.title}`}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-red-400 text-[24px] font-bold">{veille.title}</h3>
      <p className="text-white text-[16px] font-semibold" style={{ margin: 0 }}>
        {veille.company_name}
      </p>
      <a
        href={veille.source}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-sm text-white bg-red-600 hover:bg-red-700 transition px-3 py-1 rounded-md"
      >
        🔗 Source
      </a>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {veille.points.map((point, index) => (
        <li
          key={`veille-point-${index}`}
          className="text-white text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Veille = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        RA pour la Formation et Maintenance
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Veille technologique</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {veilles.map((veille, index) => (
          <VeilleCard key={`Veille-${index}`} veille={veille} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Veille, "veille");
