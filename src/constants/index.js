import { SiExpress, SiFastify, SiFirebase, SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiTypescript } from "react-icons/si";
import { projectFive, projectFour, projectOne, projectThree, projectTwo } from "../assets/index";
import { FaGit, FaJava, FaNodeJs, FaReact } from "react-icons/fa";

export const navLinksdata = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1004,
    title: "Resume",
    link: "resume",
  },
  {
    _id: 1006,
    title: "Contact",
    link: "contact",
  }
];

export const projectData = [
  {
    id: 1,
    title: "PassMate",
    des: "A secure password manager built with React.js for frontend and Firebase for backend authentication and storage.",
    src: projectOne,
    githubLink: 'https://github.com/iamsuru/Portfolio/',
    deploymentLink: 'https://web-passmate.netlify.app/'
  },
  {
    id: 2,
    title: "ChatterBox",
    des: "A real-time chat app built using React, Node.js, Express, Socket.IO, and MongoDB, with Firebase integration.",
    src: projectTwo,
    githubLink: 'https://github.com/iamsuru/ChatterBox/',
    deploymentLink: 'https://web-chatterbox.netlify.app/'
  },
  {
    id: 3,
    title: "SmartScan 2.0",
    des: "An upgraded document scanner built with HTML, CSS, JavaScript, Node.js, Express, and MongoDB; focused on improved UI and performance.",
    src: projectThree,
    githubLink: 'https://github.com/iamsuru/SmartScan/',
    deploymentLink: 'https://smartscan-web.netlify.app/'
  },
  {
    id: 4,
    title: "NavEq",
    des: "Led UI development using SVG Maps and React.js for a navigation platform; built with HTML, CSS, and JavaScript.",
    src: projectFour,
    githubLink: 'https://github.com/iamsuru/NavEq1.0',
    deploymentLink: 'https://naveq.netlify.app/'
  },
  {
    id: 5,
    title: "FilmPholio",
    des: "A movie listing app using TMDB API, React, Chakra UI, Node.js, and Firebase to create and manage movie lists.",
    src: projectFive,
    githubLink: 'https://github.com/iamsuru/FilmFolio',
    deploymentLink: 'https://filmpholio.netlify.app/'
  }
];


export const skillsData = [
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <FaJava />, label: "Java" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiFastify />, label: "Fastify" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <FaReact />, label: "React" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <FaGit />, label: "Git" },
]