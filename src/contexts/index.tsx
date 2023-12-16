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

interface ContextData {
  viewDasktop: boolean,
  openOrCloseMenu: boolean,
  setOpenOrCloseMenu: (openOrCloseMenu: boolean) => void;
  currentPage: string,
  setCurrentPage: any,
  technologies: technologiesData[]
};

type technologiesData = {
  image: string,
  name: string
};

export const Context = createContext({} as ContextData);

export default function Provider({ children }: { children: ReactNode }){
  const [viewDasktop, setViewDascktop] = useState<any>(null);
  const [openOrCloseMenu, setOpenOrCloseMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

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
  }, [])

  window.addEventListener('resize', handleViewSize);

  function handleViewSize(){
    let viewDasktop: boolean;
    window.innerWidth >= 768 ? viewDasktop = true : viewDasktop = false;

    setViewDascktop(viewDasktop);
  };

  return(
    <Context.Provider value={{ viewDasktop, openOrCloseMenu, setOpenOrCloseMenu, currentPage, setCurrentPage, technologies }} >
      { children }
    </Context.Provider>
  );
};