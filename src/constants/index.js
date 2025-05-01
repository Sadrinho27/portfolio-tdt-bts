import { color } from "framer-motion";
import {
  Figma,
  python,
  java,
  Php,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  SQL,
  JavaProj,
  Formation,
  payloadmaster,
  threejs,
  portfolio,
  cobian,
  blockchain,
  Sloom,
  CompileVortex,
  fourNK,
  logo,
  quizzoum,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos ",
  },
  {
    id: "study",
    title: "Études",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "veille",
    title: "Veille ",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "JavaScript", icon: javascript },
  { title: "Figma", icon: Figma },
  { title: "Node JS", icon: nodejs },
  { title: "Python", icon: python },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Java", icon: java },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "SQL", icon: SQL },
];

export const experiences = [
  {
    title: "Stage en Intelligence Artificielle",
    company_name: "4NK",
    icon: fourNK,
    iconBg: "#161329",
    date: "Mai 2024 - Juillet 2024",
    points: [
      "Durant ce stage, j'ai acquis de l'expérience en intelligence artificielle, en particulier dans l'utilisation d'API liées à l'IA.",
      "J'ai également commencé à m'intéresser aux langages Rust, JavaScript et TypeScript.",
    ],
  },
  {
    title: "Stage en Intégration",
    company_name: "4NK",
    icon: fourNK,
    iconBg: "#161329",
    date: "Janvier 2025 - Février 2025",
    points: [
      "Ce stage m'a permis d'approfondir mes compétences en TypeScript, notamment en intégrant la stack technique de 4NK dans celle de Lecoffre.io.",
    ],
  },
];

export const veilles = [
  {
    title: "Full Dive VR, utopie ou futur proche?",
    company_name: "MBA DMB",
    icon: logo,
    iconBg: "#161329",
    source: "https://blog.mbadmb.com/full-dive-vr-et-perception-haptique-utopie-ou-futur-proche-par-lucie-hautekiet/",
    points: [
      "Réflexion sur la faisabilité du Full Dive VR, inspirée de l'univers de Sword Art Online, et sur les avancées technologiques nécessaires pour y parvenir.",
      "Mise en lumière de l'importance de la perception haptique et des interfaces neuronales dans le développement de cette technologie.",
    ],
  },
  {
    title: "The Next Level of Virtual Reality: Exploring Full Dive VR",
    company_name: "EnableGeek",
    icon: logo,
    iconBg: "#161329",
    source: "https://www.enablegeek.com/blog/the-next-level-of-virtual-reality-exploring-full-dive-vr/",
    points: [
      "Exploration des fondements technologiques du Full Dive VR, incluant les interfaces cerveau-ordinateur, la simulation des sens et les technologies d'affichage avancées.",
      "Présentation des applications potentielles dans divers secteurs tels que l'éducation, le divertissement et la collaboration à distance.",
    ],
  },
  {
    title: "Is Full Dive VR The Future Of Gaming? Myth Or Reality?",
    company_name: "ARVRRealm",
    icon: logo,
    iconBg: "#161329",
    source: "https://arvrrealm.com/is-full-dive-vr-the-future-of-gaming-myth-or-reality/",
    points: [
      "Discussion sur le potentiel du Full Dive VR dans le domaine du jeu vidéo, en mettant en avant les avantages et les défis technologiques et éthiques associés.",
      "Analyse des obstacles à surmonter pour que cette technologie devienne une réalité grand public.",
    ],
  },
  {
    title: "Full Dive VR Technology: Possibilities and Limitations",
    company_name: "RevolveAI",
    icon: logo,
    iconBg: "#161329",
    source: "https://revolveai.com/full-dive-vr-technology/",
    points: [
      "Examen des possibilités offertes par le Full Dive VR, notamment en matière d'immersion sensorielle grâce aux technologies haptiques.",
      "Identification des limitations actuelles et des défis à relever pour une adoption généralisée.",
    ],
  },
];
export const projects = [
  {
    name: "TP Blockchain",
    description:
      "Le site sur lequel vous vous trouvez actuellement",
    tags: [
      { name: "Blockchain", color: "blue-text-gradient" },
      { name: "Transactions", color: "green-text-gradient" },
      { name: "Smart Contracts", color: "pink-text-gradient" }
    ],
    image: blockchain,
    source_code_link:
      "https://github.com/Sadrinho27/Blockchain.git",
  },
  {
    name: "Portfolio",
    description:
      "Le site sur lequel vous vous trouvez actuellement",
    tags: [
      { name: "Portfolio", color: "blue-text-gradient" },
      { name: "Identité", color: "green-text-gradient" },
      { name: "CV", color: "pink-text-gradient" },
    ],
    image: portfolio,
    source_code_link:
      "https://github.com/Sadrinho27/portfolio-tdt2",
  },
  {
    name: "Site Vitrine Sloom",
    description:
      "Ceci est mon tout premier projet réalisé en informatique.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" }
    ],

    image: Sloom,
    source_code_link: "https://github.com/Sadrinho27/Site-Vitrine-Sloom.git",
  },
  {
    name: "TD Cobian",
    description:
      "C'est un travail dirigé fait en cours qui à pour but de mettre en place un systeme de sauvegarde automatique",
    tags: [
      { name: "Cobian", color: "blue-text-gradient" },
      { name: "Sauvegarde", color: "green-text-gradient" },
    ],
    image: cobian,
    source_code_link: "https://github.com/Sadrinho27/Cobian",
  },
  {
    name: "EasyBee Stock",
    description:
      "Easybee se spécialise dans la vente d'équipements apicoles. Notre mission est de concevoir une application pour gérer les stocks.",
    tags: [
      { name: "Eclipse", color: "green-text-gradient" },
      { name: "Java", color: "blue-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" }
    ],
    image: JavaProj,
    source_code_link: "https://github.com/Sadrinho27/EasybeeJava",
  },
  {
    name: "EasyBee Formation",
    description:
      "Easybee se spécialise dans la vente d'équipements apicoles. Notre mission est de concevoir un site web pour réserver des formations.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JS", color: "pink-text-gradient" },
      { name: "PHP", color: "red-text-gradient" }
    ],
    image: Formation,
    source_code_link: "https://github.com/Sadrinho27/EasyBeeWeb",
  },
  {
    name: "GEN IA",
    description:
      "Outils pour la création de contrat au format 4nk",
    tags: [
      { name: "OpenIA", color: "blue-text-gradient" },
      { name: "JSON", color: "green-text-gradient" }
    ],
    image: fourNK,
    source_code_link: "https://drive.google.com/file/d/1Ykj28iHveKm2g8F4Iq5Xg72QjpMF8HNg/view?usp=sharing",
  },
  {
    name: "Retranscription IA",
    description:
      "Outils pour la conversion de contrat normaux en contrat 4NK",
    tags: [
      { name: "OpenIA", color: "blue-text-gradient" },
      { name: "JSON", color: "green-text-gradient" }
    ],
    image: fourNK,
    source_code_link: "https://drive.google.com/file/d/1opFkNDAfyYNfCzSD5t0PptfqnZZY35CT/view?usp=sharing",
  },
  {
    name: "Intégration 4nk",
    description:
      "Intégration d'une solution logiciel dans un autre logiciel",
    tags: [
      { name: "Typescript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "orange-text-gradient" }
    ],
    image: fourNK,
    source_code_link: "",
  },
  {
    name: "Quizzoum - Application de quiz sur Android",
    description:
      "First Android Studio project. This Android quiz application allows users to test their knowledge in Computer Science, History, Geography, and Natural Sciences. It features single-choice quizzes, real-time score tracking, a player leaderboard, and an admin panel for user management.",
    tags: [
      { name: "AndroidAppDevelopment", color: "green-text-gradient" },
      { name: "QuizApplication", color: "orange-text-gradient" },
      { name: "Java", color: "red-text-gradient" }
    ],
    image: quizzoum,
    source_code_link:
      "https://github.com/Sadrinho27/Quizzoum.git",
  }
];
