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
  const { viewDasktop, openOrCloseMenu, setOpenOrCloseMenu } = useContext(Context);

  useEffect(() => {
    setOpenOrCloseMenu(false);
  }, []);

  return (
    <Background>
      <Header openMenu={ () => setOpenOrCloseMenu(!openOrCloseMenu) } viewSize={ viewDasktop } />

      <main className="px-[4em] py-9 mt-9 grid grid-cols-1 gap-5" >
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8" >
          <FaHtml5 color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Html</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8" >
          <FaCss3Alt color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Css</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8" >
          <RiJavascriptFill  color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Javascript</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8" >
          <BiLogoTypescript color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Typescript</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8" >
          <FaReact color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >React</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8" >
          <BiLogoTailwindCss color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Tailwindcss</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8" >
          <FaGitAlt color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Git</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8" >
          <FaGithub color="#FFFBFF" size={142} />

          <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
            <p className="text-secondary uppercase" >Github</p>
          </div>
        </section>
        <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8" >
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