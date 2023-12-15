import { useContext, useEffect } from "react";
import { Context } from "../../contexts";

import Background from "../../components/background";
import Header from "../../components/header";
import Nav from "../../components/nav";

import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function Projects() {
  const { viewDasktop, openOrCloseMenu, setOpenOrCloseMenu } = useContext(Context);

  useEffect(() => {
    setOpenOrCloseMenu(false);
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

      <main className="px-6 py-9 gap-5 grid grid-cols-1 md:grid-cols-2 md:px-4 md:gap-4 lg:px-44 lg:gap-5 lg:mx-auto" >
        <section className="bg-cardsColor pt-2 rounded-xl max-w-[28.7em] mx-auto" >
          <div className="px-2" >
            <div className="w-full h-80 bg-textColor rounded-xl" >

            </div>

            <div>
              <h2 className="text-secondary mt-2 text-xl font-bold" >Descrição:</h2>
              <p className="text-textColor text-justify text-base" >
                Lorem ipsum dolor sit amet consectetur. Id morbi enim at pellentesque adipiscing quis massa at nibh. Massa aenean lacinia lacus venenatis suspendisse. Tristique nibh amet rhoncus urna consectetur. Dictum fringilla massa dictumst mi bibendum fringilla commodo. Sit posuere ultrices a ut dui hendrerit scelerisque ultricies. Faucibus nec diam sed non.
              </p>

              <h3 className="text-secondary mt-2 text-lg font-bold" >Tecnologias utilizadas:</h3>
              <p className="text-textColor text-justify text-base" >
                Typescript, ReactJS, Tailwindcss, Firebase
              </p>
            </div>
          </div>

          <div className="w-full bg-primary flex justify-around py-2 mt-7 rounded-b-xl lg:mt-10" >
            <a href="#" target="_blank" ><FaGithub color="#61F2C2" size={36} /></a>
            <a href="#" target="_blank" ><FiLink color="#61F2C2" size={36} /></a>
          </div>
        </section>
        <section className="bg-cardsColor pt-2 rounded-xl max-w-[28.7em] mx-auto" >
          <div className="px-2" >
            <div className="w-full h-80 bg-textColor rounded-xl" >

            </div>

            <div>
              <h2 className="text-secondary mt-2 text-xl font-bold" >Descrição:</h2>
              <p className="text-textColor text-justify text-base" >
                Lorem ipsum dolor sit amet consectetur. Id morbi enim at pellentesque adipiscing quis massa at nibh. Massa aenean lacinia lacus venenatis suspendisse. Tristique nibh amet rhoncus urna consectetur. Dictum fringilla massa dictumst mi bibendum fringilla commodo. Sit posuere ultrices a ut dui hendrerit scelerisque ultricies. Faucibus nec diam sed non.
              </p>

              <h3 className="text-secondary mt-2 text-lg font-bold" >Tecnologias utilizadas:</h3>
              <p className="text-textColor text-justify text-base" >
                Typescript, ReactJS, Tailwindcss, Firebase
              </p>
            </div>
          </div>

          <div className="w-full bg-primary flex justify-around py-2 mt-7 rounded-b-xl lg:mt-10" >
            <a href="#" target="_blank" ><FaGithub color="#61F2C2" size={36} /></a>
            <a href="#" target="_blank" ><FiLink color="#61F2C2" size={36} /></a>
          </div>
        </section>
      </main>

      { openOrCloseMenu && <Nav closeMenu={ () => setOpenOrCloseMenu(!openOrCloseMenu) } /> }
    </Background>
  );
};