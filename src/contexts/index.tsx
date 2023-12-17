import { createContext, ReactNode, useState, useEffect } from "react";

import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import javascriptImage from "../assets/javascript.png";
import typescriptImage from "../assets/typescript.png";
import reactImage from "../assets/react.png";
import tailwindcssImage from "../assets/tailwindcss.png";
import gitImage from "../assets/git.png";
import githubImage from "../assets/github.png";
import figmaImage from "../assets/figma.png";

import projectImage01 from "../assets/project1.png";
import projectImage02 from "../assets/project2.png";

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
  technologies: string
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
      technologies: "Typescript, ReactJS, Tailwindcss, Firebase, Vite"
    },
    {
      name: "Web Cars",
      image: projectImage02,
      description: "WebCars é um projeto inspirado na plataforma WebMotors, este projeto destaca habilidades em desenvolvimento web, apresentando recursos como autenticação segura, cadastro de usuários, listagem e gerenciamento de carros..",
      technologies: "Typescript, ReactJS, Tailwindcss, Firebase, Vite"
    },
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
      image: tailwindcssImage,
      name: 'Tailwindcss'
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