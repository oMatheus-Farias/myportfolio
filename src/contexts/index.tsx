import { createContext, ReactNode, useState, useEffect } from "react";

import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import javascriptImage from "../assets/javascript.png";
import typescriptImage from "../assets/typescript.png";
import reactImage from "../assets/react.png";
import nextjsImage from "../assets/nextjs.png";
import nodejsImage from "../assets/nodejs.png";
import tailwindcssImage from "../assets/tailwindcss.png";
import postgresqlImage from "../assets/postgreSQL.png";
import prismaImage from "../assets/prisma.png";
import gitImage from "../assets/git.png";
import githubImage from "../assets/github.png";
import figmaImage from "../assets/figma.png";

import projectImage01 from "../assets/project1.png";
import projectImage02 from "../assets/project2.png";
import projectImage03 from "../assets/project3.png";
import shortlyImage from "../assets/shortly.png";

interface ContextData {
  viewDasktop: boolean,
  openOrCloseMenu: boolean,
  setOpenOrCloseMenu: (openOrCloseMenu: boolean) => void;
  currentPage: string,
  setCurrentPage: any,
  technologies: TechnologiesData[],
  projects: ProjectsData[]
};

type ProjectsData = {
  name: string,
  image: string,
  description: string,
  technologies: string,
  repository: string,
  linkProject: string
};

type TechnologiesData = {
  image: string,
  name: string
};

export const Context = createContext({} as ContextData);

export default function Provider({ children }: { children: ReactNode }){
  const [viewDasktop, setViewDascktop] = useState<any>(null);
  const [openOrCloseMenu, setOpenOrCloseMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  const projects = [
    {
      name: "Call Flow Manager",
      image: projectImage01,
      description: "Call Flow Manager (Sistema de Gestão de Chamados) é uma aplicação desenvolvida para otimizar a organização e administração eficiente de chamados em uma empresa para registrar, monitorar e atualizar informações relacionadas a chamados.",
      technologies: "Typescript, ReactJS, Tailwindcss, Firebase, React Router dom, React Hook Form e Vite.",
      repository: "https://github.com/oMatheus-Farias/call_flow_manager",
      linkProject: "https://call-flow-manager.vercel.app/"
    },
    {
      name: "Web Cars",
      image: projectImage02,
      description: "WebCars é um projeto inspirado na plataforma WebMotors, este projeto destaca habilidades em desenvolvimento web, apresentando recursos como autenticação segura, cadastro de usuários, listagem e gerenciamento de carros.",
      technologies: "Typescript, ReactJS, Tailwindcss, Firebase, React Router dom, React Hook Form e Vite.",
      repository: "https://github.com/oMatheus-Farias/web-cars",
      linkProject: "https://web-cars-iota.vercel.app/"
    },
    {
      name: "BarberPRO",
      image: projectImage03,
      description: "BarberPRO é uma aplicação web full stack desenvolvida para atender às necessidades específicas de barbearias, proporcionando uma gestão eficiente dos serviços, cortes e informações dos clientes. O sistema foi construído utilizando tecnologias modernas e com requisições http através da api desenvolvida com nodeJS, postgreSQL e Prisma.",
      technologies: "Typescript, NextJS, Tailwindcss, Context API, NodeJS, PostgreSQL, Prisma e Git.",
      repository: "https://github.com/oMatheus-Farias/webbarberpro",
      linkProject: "https://www.youtube.com/watch?v=EvWv6ba7UTw"
    },
    {
      name: "Em breve",
      image: shortlyImage,
      description: "Projeto em desenvolvimento...",
      technologies: "Projeto em desenvolvimento...",
      repository: "#",
      linkProject: "#"
    }
  ];

  const technologies = [
    {
      image: htmlImage,
      name: 'Html'
    },
    {
      image: cssImage,
      name: 'Css'
    },
    {
      image: javascriptImage,
      name: 'Javascript'
    },
    {
      image: typescriptImage,
      name: 'Typescript'
    },
    {
      image: reactImage,
      name: 'React'
    },
    {
      image: nextjsImage,
      name: 'NextJS'
    },
    {
      image: nodejsImage,
      name: 'NodeJS'
    },
    {
      image: tailwindcssImage,
      name: 'Tailwindcss'
    },
    {
      image: postgresqlImage,
      name: 'PostgreSQL'
    },
    {
      image: prismaImage,
      name: 'Prisma'
    },
    {
      image: gitImage,
      name: 'Git'
    },
    {
      image: githubImage,
      name: 'Github'
    },
    {
      image: figmaImage,
      name: 'Figma'
    },
  ];

  useEffect(() => {
    handleViewSize();
  }, []);

  window.addEventListener('resize', handleViewSize);

  function handleViewSize(){
    let viewDasktop: boolean;
    window.innerWidth >= 768 ? viewDasktop = true : viewDasktop = false;

    setViewDascktop(viewDasktop);
  };

  return(
    <Context.Provider value={{ 
        viewDasktop, 
        openOrCloseMenu, 
        setOpenOrCloseMenu, 
        currentPage, 
        setCurrentPage, 
        technologies, 
        projects 
      }} 
    >
      { children }
    </Context.Provider>
  );
};