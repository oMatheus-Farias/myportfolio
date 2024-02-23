import { createContext, ReactNode, useState, useEffect } from "react";

import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import sassImage from "../assets/sass.png";
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
import projectImage04 from "../assets/project4.png";
import projectImage05 from "../assets/project5.png";
import projectImage06 from "../assets/project6.png";
import projectImage07 from "../assets/project7.png";
import shortlyImage from "../assets/shortly.png";

interface ContextData {
  viewDasktop: boolean;
  openOrCloseMenu: boolean;
  setOpenOrCloseMenu: (openOrCloseMenu: boolean) => void;
  currentPage: string;
  setCurrentPage: any;
  technologies: TechnologiesData[];
  projects: ProjectsData[];
}

type ProjectsData = {
  name: string;
  image: string;
  description: string;
  technologies: string;
  repository: string;
  linkProject: string;
};

type TechnologiesData = {
  image: string;
  name: string;
};

export const Context = createContext({} as ContextData);

export default function Provider({ children }: { children: ReactNode }) {
  const [viewDasktop, setViewDascktop] = useState<any>(null);
  const [openOrCloseMenu, setOpenOrCloseMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const projects = [
    {
      name: "Call Flow Manager",
      image: projectImage01,
      description:
        "Call Flow Manager (Sistema de Gestão de Chamados) é uma aplicação desenvolvida para otimizar a organização e administração eficiente de chamados em uma empresa para registrar, monitorar e atualizar informações relacionadas a chamados.",
      technologies:
        "Typescript, React.js, Tailwindcss, Firebase, React Router dom, React Hook Form e Vite.",
      repository: "https://github.com/oMatheus-Farias/call_flow_manager",
      linkProject: "https://call-flow-manager.vercel.app/",
    },
    {
      name: "Web Cars",
      image: projectImage02,
      description:
        "WebCars é um projeto inspirado na plataforma WebMotors, este projeto destaca habilidades em desenvolvimento web, apresentando recursos como autenticação segura, cadastro de usuários, listagem e gerenciamento de carros.",
      technologies:
        "Typescript, React.js, Tailwindcss, Firebase, React Router dom, React Hook Form e Vite.",
      repository: "https://github.com/oMatheus-Farias/web-cars",
      linkProject: "https://web-cars-iota.vercel.app/",
    },
    {
      name: "BarberPRO",
      image: projectImage03,
      description:
        "BarberPRO é uma aplicação web full stack desenvolvida para atender às necessidades específicas de barbearias, proporcionando uma gestão eficiente dos serviços, cortes e informações dos clientes. O sistema foi construído utilizando tecnologias modernas e com requisições http através da api desenvolvida com nodeJS, postgreSQL e Prisma.",
      technologies:
        "Typescript, Next.js, Tailwindcss, Context API, Node.js, PostgreSQL, Prisma e Git.",
      repository: "https://github.com/oMatheus-Farias/webbarberpro",
      linkProject: "https://www.youtube.com/watch?v=EvWv6ba7UTw",
    },
    {
      name: "DentalSupport",
      image: projectImage04,
      description:
        "DentalSupport, uma aplicação full stack dedicada aos serviços odontológicos, proporcionando uma abordagem abrangente tanto para profissionais de saúde bucal quanto para pacientes. Com uma interface intuitiva, totalmente responsiva e com funcionalidades específicas para ambos os públicos, a plataforma visa simplificar o agendamento de consultas, melhorar a gestão de clínicas odontológicas e oferecer uma experiência aprimorada aos usuários.",
      technologies:
        "Typescript, Next.js, React.js, React Hook Form, Context API, Tailwindcss, Node.js, PostgreSQL, Prisma e Git.",
      repository: "https://github.com/oMatheus-Farias/appdentalsupport",
      linkProject: "https://www.youtube.com/watch?v=rVWkyv_xSLA",
    },
    {
      name: "CoffeeShop",
      image: projectImage05,
      description:
        "Projeto de uma Landing Page, denominado CoffeeShop, uma aplicação web que visa a apresentação virtual de uma cafeteria fictícia. Desenvolvido com HTML para uma estruturação sólida e semântica, Sass (CSS) para organização eficiente da estilização e JavaScript. O projeto oferece uma experiência elegante e responsiva aos usuários.",
      technologies: "HTML, CSS, SASS, JavaScript, Git e Vercel.",
      repository: "https://github.com/oMatheus-Farias/appcoffeeshop",
      linkProject: "https://appcoffeeshop.vercel.app/",
    },
    {
      name: "SuperCars",
      image: projectImage06,
      description:
        "Projeto de Landing Page dedicado aos entusiastas de supercarros. Desenvolvida como parte de um teste para uma vaga de desenvolvedor front-end, esta página proporciona uma experiência envolvente e totalmente responsiva. O design elegante inclui um slider dinâmico, alimentado pela biblioteca Nivo Slider jQuery, que exibe imagens de supercarros, oferecendo uma transição suave entre elas.",
      technologies:
        "HTML, CSS, JavaScript, Git, GitHub, AOS animate on scroll library, Nivo Slider jQuery e Vercel.",
      repository: "https://github.com/oMatheus-Farias/test-groupidealtrends",
      linkProject: "https://test-groupidealtrends.vercel.app/",
    },
    {
      name: "VestirVibes",
      image: projectImage07,
      description:
        "O Vestir Vibes é um e-commerce de roupas desenvolvido como uma aplicação web robusta e eficiente. Utilizando tecnologias modernas como Vite, React.js, TypeScript, React Router Dom, Context API, React Hook Form, Tailwind CSS e Firebase, o projeto oferece uma experiência de compra online fluida e segura. A integração com bibliotecas como Stripe para processamento de pagamentos adiciona uma camada adicional de confiabilidade ao sistema.",
      technologies:
        "Typescript, React.js, Tailwindcss, Firebase, React Router dom, React Hook Form, Context API, Stripe, Git, GitHub, Vite e Vercel.",
      repository: "https://github.com/oMatheus-Farias/vestirvibes-ecommerce",
      linkProject: "https://vestirvibes-ecommerce.vercel.app/",
    },
    {
      name: "Em breve",
      image: shortlyImage,
      description: "Projeto em desenvolvimento...",
      technologies: "Projeto em desenvolvimento...",
      repository: "#",
      linkProject: "#",
    },
  ];

  const technologies = [
    {
      image: htmlImage,
      name: "Html",
    },
    {
      image: cssImage,
      name: "Css",
    },
    {
      image: javascriptImage,
      name: "Javascript",
    },
    {
      image: typescriptImage,
      name: "Typescript",
    },
    {
      image: reactImage,
      name: "React",
    },
    {
      image: nextjsImage,
      name: "Next.js",
    },
    {
      image: nodejsImage,
      name: "Node.js",
    },
    {
      image: sassImage,
      name: "Sass",
    },
    {
      image: tailwindcssImage,
      name: "Tailwindcss",
    },
    {
      image: postgresqlImage,
      name: "PostgreSQL",
    },
    {
      image: prismaImage,
      name: "Prisma",
    },
    {
      image: gitImage,
      name: "Git",
    },
    {
      image: githubImage,
      name: "Github",
    },
    {
      image: figmaImage,
      name: "Figma",
    },
  ];

  useEffect(() => {
    handleViewSize();
  }, []);

  window.addEventListener("resize", handleViewSize);

  function handleViewSize() {
    let viewDasktop: boolean;
    window.innerWidth >= 768 ? (viewDasktop = true) : (viewDasktop = false);

    setViewDascktop(viewDasktop);
  }

  return (
    <Context.Provider
      value={{
        viewDasktop,
        openOrCloseMenu,
        setOpenOrCloseMenu,
        currentPage,
        setCurrentPage,
        technologies,
        projects,
      }}
    >
      {children}
    </Context.Provider>
  );
}
