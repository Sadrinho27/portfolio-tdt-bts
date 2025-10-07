import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

const Hero = () => {
  const [webglSupported, setWebglSupported] = useState(false);

  const skillsStrings = useMemo(
    () => [
      "du développement web",
      "du JavaScript",
      "du Python",
      "de la CyberSécurité",
      "de l'intelligence artificielle",
      "de l'administration système",
      "de l'algorithmique",
      "du développement backend",
      "de la programmation orientée objet",
      "de la gestion de bases de données",
      "du DevOps",
      "de l'automatisation avec scripts",
    ],
    []
  );

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/herobg.png')]"
    >
      {/* 🔹 Overlay subtil pour renforcer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-200/40 to-black-300/70 pointer-events-none" />

      {/* 🔹 Contenu principal */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Ligne rouge à gauche */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary shadow-[0_0_15px_#D40000]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-secondary to-red-dark" />
        </div>

        {/* Texte principal */}
        <div>
          <h1 className={`${styles.heroHeadText} drop-shadow-lg`}>
            Enchanté, moi c'est{" "}
            <span className="text-secondary">Titouan</span>
          </h1>

          <div className={`${styles.heroSubText} mt-2`}>
            Je fais
            <div role="status" aria-live="polite" className="inline ml-2">
              <Typewriter
                options={{
                  strings: skillsStrings,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  loopCount: Infinity,
                  deleteSpeed: "natural",
                  pauseFor: 2000,
                  cursorClassName: "text-secondary",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Canvas 3D ou fallback */}
      <div className="absolute inset-0 z-0">
        {webglSupported ? (
          <ComputersCanvas />
        ) : (
          <div className="flex justify-center items-center h-full text-white bg-black-300/40">
            <div className="text-center p-8">
              <ArrowDownIcon className="w-16 h-16 mx-auto mb-4 text-secondary opacity-50" />
              <p className="text-lg">
                Animation 3D non supportée. Explorez mes compétences ci-dessous !
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 🔹 Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
          aria-label="Descendre vers la section À propos"
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
