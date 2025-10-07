import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-secondary font-medium mb-2">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        bg-black/40 backdrop-blur-sm
        py-3 px-5
        placeholder:text-gray-300
        text-white-100 rounded-lg outline-none border border-secondary
        focus:border-accent transition-all duration-300 font-medium
      "
    />
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(""); setNameError(""); setConfirmation("");

    if (!form.name.trim()) return setNameError("Le nom est requis.");
    if (!validateEmail(form.email)) return setEmailError("Email invalide.");

    setLoading(true);
    emailjs
      .send(
        "service_75jizp4",
        "template_cq8n1ra",
        { name: form.name, email: form.email, message: form.message },
        "CQfzJyMQlrsY0bZZQ"
      )
      .then(() => {
        setLoading(false);
        setConfirmation("Merci ! Je reviendrai vers vous rapidement.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        setConfirmation("Erreur d'envoi, veuillez réessayer.");
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Formulaire */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="
          flex-[0.75] 
          bg-black/50 backdrop-blur-lg border border-secondary 
          p-8 rounded-2xl shadow-lg shadow-red-900/30
        "
      >
        <p className={styles.sectionSubText}>
          Contact
        </p>
        <h3 className={styles.sectionHeadText}>Contacte moi</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <InputField
            label="Votre nom"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Insérez votre nom..."
            type="text"
          />
          {nameError && <p className="text-red-500 text-sm animate-pulse">{nameError}</p>}

          <InputField
            label="Adresse email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Votre adresse e-mail"
            type="email"
          />
          {emailError && <p className="text-red-500 text-sm animate-pulse">{emailError}</p>}

          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-2">Votre message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Écrivez votre message..."
              rows={6}
              className="
                bg-black/40 backdrop-blur-sm
                py-3 px-5 placeholder:text-gray-300 text-white-100
                rounded-lg outline-none border border-secondary
                focus:border-accent transition-all duration-300 font-medium
              "
            />
          </label>

          <button
            type="submit"
            className="
              bg-gradient-to-r from-secondary to-accent
              hover:from-accent hover:to-red-dark
              py-3 px-8 rounded-xl text-white font-bold
              shadow-lg shadow-red-900/30
              transition-all duration-300
            "
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {confirmation && <p className="text-green-500 mt-2 animate-fadeIn">{confirmation}</p>}
        </form>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
