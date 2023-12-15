import { useState } from "react";
import Background from "../../components/background";
import Header from "../../components/header";
import Nav from "../../components/nav";

import avatarImage from "../../assets/foto-perfil.jpeg";

import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  const [openOrCloseMenu, setOpenOrCloseMenu] = useState(false);
  const [viewDasktop, setViewDascktop] = useState<boolean | null>(null);

  window.addEventListener('resize', handleViewSize);
  window.addEventListener('load', handleViewSize);

  function handleViewSize(){
    let viewDasktop: boolean;

    if(window.innerWidth >= 1024){
      viewDasktop = true
    }else{
      viewDasktop = false
    };

    setViewDascktop(viewDasktop);
  };

  console.log(viewDasktop);

  return (
    <Background>
      <Header openMenu={ () => setOpenOrCloseMenu(!openOrCloseMenu) } />

      <main 
        className="px-[1.2em] py-10 w-full flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:px-36 lg:mx-auto lg:max-w-[1200px]" 
      >
        <div className="col-start-2 col-end-2 row-start-1 row-end-1" >
          <img
            src={ avatarImage }
            alt="Foto Perfil"
            className="object-cover rounded-full w-[300px] h-[300px] object-top border-8 border-secondary lg:ml-auto lg:mt-16 lg:w-[360px] lg:h-[360px]"
          />
        </div>

        <div className="col-start-1 col-end-1 row-start-1 row-end-1" >
          <section className="w-full mt-10" >
            <h1 
              className="text-secondary text-start text-8xl font-semibold" >
                Olá
                <span className="text-effectsColor" >,</span>
            </h1>

            <p className="text-justify text-textColor mt-5" >
              meu nome é Matheus Farias, e minha jornada no mundo da tecnologia e desenvolvimento teve início no começo de 2023. Nasci em 1999 e estou atualmente focado em minha trajetória acadêmica, cursando Análise e Desenvolvimento de Sistemas na faculdade UNG de Guarulhos.
              Atualmente, desempenho a função de funcionário público na área de segurança, porém, estou em processo de transição de carreira, buscando oportunidades no universo do desenvolvimento front-end. Esta transição é motivada por minha paixão crescente por criar experiências digitais envolventes e funcionais.
              Ao longo de minha jornada, adquiri valiosos conhecimentos por meio de cursos especializados e projetos pessoais desenvolvidos durante meus estudos, que continuam a todo vapor.
              Estou confiante de que minha determinação, habilidades técnicas e comprometimento serão ativos valiosos para qualquer equipe de desenvolvimento.
            </p>
          </section>
        
        
          <div className="w-full flex justify-start items-center gap-6 mt-5" >
            <a href="#" title="email" target="_blank" ><MdEmail color="#61F2C2" size={36} /></a>
            <a href="#" title="gitHub" target="_blank" ><FaGithub color="#61F2C2" size={32} /></a>
            <a href="#" title="linkedIn" target="_blank" ><FaLinkedin color="#61F2C2" size={32} /></a>
            <button className="bg-effectsColor px-4 py-2 rounded-xl font-bold text-base text-black" >
              Baixar CV
            </button>
          </div>
        </div>
      </main>

      { openOrCloseMenu && <Nav closeMenu={ () => setOpenOrCloseMenu(!openOrCloseMenu) } /> }
    </Background>
  );
};