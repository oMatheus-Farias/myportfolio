import { useContext, useEffect } from "react";
import { Context } from "../../contexts";

import Background from "../../components/background";
import Header from "../../components/header";
import Nav from "../../components/nav";
import ProjectsCard from "../../components/projectsCard";

import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function Projects() {
  const { viewDasktop, openOrCloseMenu, setOpenOrCloseMenu, setCurrentPage, projects } = useContext(Context);

  useEffect(() => {
    setOpenOrCloseMenu(false);
    setCurrentPage('/projects');

    return () => {
      setCurrentPage('');
    };
  }, []);

  return (
    <Background>
      <Header openMenu={ () => setOpenOrCloseMenu(!openOrCloseMenu) } viewSize={ viewDasktop } />

      <h1 
        className="text-textColor text-center text-2xl font-bold mt-4" 
      >
        Principais projetos
        <span className="text-effectsColor" >:</span>
      </h1>

      <main className="px-6 py-9 gap-5 grid grid-cols-1 max-w-[104.3em] md:grid-cols-2 lg:grid-cols-3 md:px-4 md:gap-4 lg:gap-5 lg:mx-auto" >
        {projects.map((item, index) => {
          return(
            <section 
              className="bg-cardsColor pt-2 rounded-xl max-w-[28.7em] mx-auto flex flex-col justify-between lg:max-h-[35em]" 
              key={ index }
            >
              <ProjectsCard 
                name={ item.name } image={ item.image } description={ item.description } technologies={ item.technologies }
              />

              <div className="w-full bg-primary flex justify-around py-2 mt-7 rounded-b-xl" >
                <a href="#" target="_blank" ><FaGithub color="#61F2C2" size={36} /></a>
                <a href="#" target="_blank" ><FiLink color="#61F2C2" size={36} /></a>
              </div>
            </section>
          )
        })}
      </main>

      { openOrCloseMenu && <Nav closeMenu={ () => setOpenOrCloseMenu(!openOrCloseMenu) } /> }
    </Background>
  );
};