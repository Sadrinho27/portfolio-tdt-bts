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
    id: "experience",
    title: "Expériences",
  },
  {
    id: "work",
    title: "Projets",
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
    title: "R&D Case: Augmented Reality for Maintenance Training",
    company_name: "NLR",
    icon: logo,
    iconBg: "#161329",
    source: "https://www.nlr.org/newsroom/case/augmented-reality-for-maintenance-training/",
    points: [
      "Étude de cas démontrant l'efficacité de la RA dans la formation à la maintenance, avec une meilleure rétention des connaissances et une réduction des erreurs.",
      "Intégration de la RA dans le processus de formation pour une expérience d'apprentissage plus immersive et interactive."
    ]
  },
  {
    title: "Leveraging Augmented Reality (AR) for Maintenance Training and Troubleshooting",
    company_name: "Micromain",
    icon: logo,
    iconBg: "#161329",
    source: "https://www.micromain.com/leveraging-augmented-reality-ar-for-maintenance-training-and-troubleshooting-2/",
    points: [
      "Présentation de l'utilisation de la RA pour fournir des instructions de réparation étape par étape et un guidage en temps réel.",
      "Amélioration de l'efficacité de la maintenance et réduction des coûts grâce à l'adoption de la RA."
    ]
  },
  {
    title: "Exploring the Frontiers: A Comprehensive Review of Augmented Reality and Virtual Reality in Manufacturing and Industry",
    company_name: "IJCSRR",
    icon: logo,
    iconBg: "#161329",
    source: "https://ijcsrr.org/exploring-the-frontiers-a-comprehensive-review-of-augmented-reality-and-virtual-reality-in-manufacturing-and-industry/",
    points: [
      "Revue complète des applications de la RA et de la RV dans la fabrication, y compris la conception, la formation, la maintenance et le contrôle qualité.",
      "Identification des avantages et des défis associés à l'intégration de la RA et de la RV dans les processus industriels."
    ]
  },
  {
    title: "Augmented Reality Training - Roundtable Learning",
    company_name: "Roundtable Learning",
    icon: logo,
    iconBg: "#161329",
    source: "https://roundtablelearning.com/augmented-reality-training/",
    points: [
      "Exploration de l'apprentissage expérientiel via la RA, permettant une formation sans risque de dommages aux produits ou équipements.",
      "Accroissement de la mobilité des formations grâce à la compatibilité mobile de la technologie RA."
    ]
  },
  {
    title: "AR in Meat Packaging: Reinventing Service & Maintenance",
    company_name: "MeatPoultry",
    icon: logo,
    iconBg: "#161329",
    source: "https://www.meatpoultry.com/articles/30986-augmented-reality-for-maintenance-and-training-how-can-it-help",
    points: [
      "Application de la RA pour une maintenance proactive et une formation collaborative à distance dans l'industrie de l'emballage de viande.",
      "Réduction des temps d'arrêt non planifiés et amélioration de l'efficacité des services grâce à la RA."
    ]
  },
  {
    title: "Revolutionizing Marine Corps Maintenance with AR/VR Technology",
    company_name: "U.S. Marine Corps Logistics Command",
    icon: logo,
    iconBg: "#161329",
    source: "https://www.logcom.marines.mil/News/Article/3863794/revolutionizing-marine-corps-maintenance-with-arvr-technology/",
    points: [
      "Utilisation de la RA et de la RV pour améliorer les diagnostics, la formation et réduire les coûts dans la maintenance du Corps des Marines.",
      "Mise en œuvre de technologies immersives pour optimiser les procédures de maintenance et de formation."
    ]
  },
  {
    title: "Augmented Reality for Industrial Maintenance Using Deep Learning Techniques – A Review",
    company_name: "IEEE",
    icon: logo,
    iconBg: "#161329",
    source: "https://www.researchgate.net/publication/379204752_Augmented_Reality_for_Industrial_Maintenance_Using_Deep_Learning_Techniques-_A_Review",
    points: [
      "Examen des techniques d'apprentissage profond appliquées à la RA pour la maintenance industrielle.",
      "Analyse des avantages et des défis de l'intégration de l'IA dans les systèmes de maintenance basés sur la RA."
    ]
  },
  {
    title: "Packaging's New Reality: Perfecting Service, Maintenance & Training with the Power of AR",
    company_name: "Harpak-ULMA",
    icon: logo,
    iconBg: "#161329",
    source: "https://www.harpak-ulma.com/resources/packagings-new-reality-perfecting-service-maintenance-training-with-the-power-of-ar/",
    points: [
      "Transformation de la maintenance et de la formation dans l'industrie de l'emballage grâce à la RA.",
      "Utilisation de la RA pour des diagnostics en temps réel, une maintenance proactive et une formation améliorée."
    ]
  },
  {
    title: "Impact of Augmented Reality on Assistance and Training in Industry 4.0",
    company_name: "MDPI",
    icon: logo,
    iconBg: "#161329",
    source: "https://www.mdpi.com/2076-3417/14/11/4564",
    points: [
      "Exploration de l'intégration de la RA dans l'industrie 4.0, mettant l'accent sur l'amélioration de l'assistance technique et de la formation.",
      "Analyse des avantages de la RA pour combler les lacunes de compétences techniques dans les environnements industriels."
    ]
  },
  {
    title: "User Experience Evaluation of AR Assisted Industrial Maintenance and Support Applications",
    company_name: "arXiv",
    icon: logo,
    iconBg: "#161329",
    source: "https://arxiv.org/abs/2410.17348",
    points: [
      "Évaluation de l'expérience utilisateur des applications de maintenance industrielle assistées par la RA.",
      "Examen de l'impact de la RA sur la charge cognitive et l'efficacité des techniciens de maintenance."
    ]
  }
];
export const projects = [
  {
    name: "TP Blockchain",
    description:
      "Ce TP, réalisé en cours, explore la technologie blockchain et ses concepts fondamentaux. Il traite de l'utilisation de la blockchain pour la gestion des transactions et des identités, ainsi que de la configuration d'un nœud.",
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
      "Le site sur lequel vous vous trouvez actuellement a été développé avec les frameworks React et Vite. Ce projet illustre mes compétences dans la création d'applications modernes et performantes.",
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
      "Il s'agit de mon tout premier projet réalisé lors d'un atelier professionnel : un site vitrine pour une entreprise fictive proposant des espaces de coworking.",
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
      "EasyBee, entreprise fictive spécialisée dans la vente de matériel apicole, a développé une application Java pour optimiser la gestion de ses stocks. Cette solution permet aux salariés (vendeurs et préparateurs) de passer, suivre et préparer les commandes d'approvisionnement entre le magasin et l'entrepôt.",
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
      "EasyBee, entreprise fictive spécialisée dans la vente de matériel apicole et la formation en apiculture, a développé une application web pour gérer ses formations. Les clients peuvent consulter et s'inscrire aux formations, tandis que les administrateurs gèrent les inscriptions et trient les participants selon différents critères.",
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
      "Un modèle IA (GPT-4) sur lequel nous avons dû apprendre à créer des contrats au format 4nk, un format développé par une entreprise spécialisée dans le web 5 décentralisé.",
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
      "Un modèle IA (GPT-4) sur lequel nous avons dû apprendre à convertir des contrats traditionnels en contrats au format 4NK, un format développé par une entreprise spécialisée dans le Web 5 décentralisé.",
    tags: [
      { name: "OpenIA", color: "blue-text-gradient" },
      { name: "JSON", color: "green-text-gradient" }
    ],
    image: fourNK,
    source_code_link: "https://drive.google.com/file/d/1opFkNDAfyYNfCzSD5t0PptfqnZZY35CT/view?usp=sharing",
  },
  // {
  //   name: "Intégration 4nk",
  //   description:
  //     "Intégration d'une solution logiciel dans un autre logiciel",
  //   tags: [
  //     { name: "Typescript", color: "blue-text-gradient" },
  //     { name: "HTML", color: "green-text-gradient" },
  //     { name: "CSS", color: "orange-text-gradient" }
  //   ],
  //   image: fourNK,
  //   source_code_link: "",
  // },
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
