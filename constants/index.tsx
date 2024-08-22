import {
  frontend,
  backend,
  ux,
  prototype,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  graphql,
  git,
  figma,
  docker,
  pokeworld,
  sortingsim,
  dreamscape,
} from "../public";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototype,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "graphql",
    icon: graphql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    id: "project-1",
    name: "Sorting Simulator",
    description: "A Sorting Simulator app built entirely on native JavaScript",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: sortingsim,
    repo: "https://github.com/Araujo93/Sorting-Simulator",
    demo: "https://sorting-simulator.vercel.app/",
  },
  {
    id: "project-2",
    name: "Dreamscape AI",
    description:
      "A web app to create imaginative and visually stunning images through DALL-E AI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: dreamscape,
    repo: "https://github.com/Araujo93/DreamScapeAI",
    demo: "https://dream-scape-ai.vercel.app/",
  },
  {
    id: "project-3",
    name: "Poke World",
    description:
      "A Pokemon web app to display all your favourite pokemon and stats.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: pokeworld,
    repo: "https://github.com/Araujo93/Pokemon",
    demo: "https://pokemon-pearl-two.vercel.app/",
  },
];

export { navLinks, services, technologies, projects };
