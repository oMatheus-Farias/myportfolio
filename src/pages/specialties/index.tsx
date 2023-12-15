import { useContext, useEffect } from "react";
import { Context } from "../../contexts";

import Background from "../../components/background";
import Header from "../../components/header";
import Nav from "../../components/nav";

import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";

export default function Specialties() {
  const { viewDasktop, openOrCloseMenu, setOpenOrCloseMenu, setCurrentPage } = useContext(Context);

  useEffect(() => {
    setOpenOrCloseMenu(false);
    setCurrentPage('/specialties');

    return () => {
      setCurrentPage('');
    };
  }, []);

  return (
    <Background>
      <Header openMenu={ () => setOpenOrCloseMenu(!openOrCloseMenu) } viewSize={ viewDasktop } />

      <main className="px-10 py-9 mt-6 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-36 lg:gap-24" >
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8 max-w-md mx-auto min-w-[15em]" >
          <FaHtml5 color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Html</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8 max-w-md mx-auto min-w-[15em]" >
          <FaCss3Alt color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Css</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8 max-w-md mx-auto min-w-[15em]" >
          <RiJavascriptFill  color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Javascript</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8 max-w-md mx-auto min-w-[15em]" >
          <BiLogoTypescript color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Typescript</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8 max-w-md mx-auto min-w-[15em]" >
          <FaReact color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >React</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8 max-w-md mx-auto min-w-[15em]" >
          <BiLogoTailwindCss color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Tailwindcss</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8 max-w-md mx-auto min-w-[15em]" >
          <FaGitAlt color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Git</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8 max-w-md mx-auto min-w-[15em]" >
          <FaGithub color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Github</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8 max-w-md mx-auto min-w-[15em]" >
          <FaFigma color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Figma</p>
          </div>
        </section>
      </main>

      { openOrCloseMenu && <Nav closeMenu={ () => setOpenOrCloseMenu(!openOrCloseMenu) } /> }
    </Background>
  );
};