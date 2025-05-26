import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

const Hero = () => {
  const [webglSupported, setWebglSupported] = useState(false);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  return (
    <section
      className="relative w-full h-screen mx-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/herobg.png)` }}
    >
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Enchanté, moi c'est <span className="text-secondary">Titouan</span>
          </h1>

          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            Je fais
            <Typewriter
              options={{
                strings: [
                  "du développement web",
                  "du JavaScript",
                  "du Python",
                  "de la CyberSecurité",
                  "de l'intelligence artificielle",
                  "de l'administration système",
                  "de l'algorithmique",
                  "du développement backend",
                  "de la programmation orientée objet",
                  "de la gestion de bases de données",
                  "du DevOps",
                  "de l'automatisation avec scripts"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1500,
              }}
            />
          </div>
        </div>
      </div>

      {/* Affiche le canvas si support WebGL sinon fallback */}
      {webglSupported ? (
        <ComputersCanvas />
      ) : (
        <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50">
          <p>Animation 3D non supportée sur votre appareil.</p>
        </div>
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
