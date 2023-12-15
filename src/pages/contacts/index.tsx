import { useContext, useEffect } from "react";
import { Context } from "../../contexts";

import Background from "../../components/background";
import Header from "../../components/header";
import Nav from "../../components/nav";

import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Contacts() {
  const { viewDasktop, openOrCloseMenu, setOpenOrCloseMenu } = useContext(Context);

  useEffect(() => {
    setOpenOrCloseMenu(false);
  }, []);

  return (
    <Background>
      <Header openMenu={ () => setOpenOrCloseMenu(!openOrCloseMenu) } viewSize={ viewDasktop } />

      <main className="px-6 my-auto h-heightFull flex flex-col justify-center md:px-20" >
        <div className="bg-cardsColor rounded-xl max-w-[68.7em] mx-auto" >
          <div className="p-3 md:p-10" >
            <section>
              <a 
                href="#" title="Email" target="_blank" 
                className="flex items-center gap-2"
              >
                <MdEmail color="#61F2C2" size={36} />
                <p className="text-textColor" >matheusfariasdasneves@gmail.com</p>
              </a>
            </section>
            <section className="mt-5" >
              <a 
                href="#" title="LinkedIn" target="_blank" 
                className="flex items-center gap-2"
              >
                <FaLinkedin color="#61F2C2" size={34} 
                
                />
                <p className="text-textColor" >https://linkedin/matheusfarias.com</p>
              </a>
            </section>
          </div>

          <div className="w-full h-[2px] bg-primary my-5" ></div>

          <div className="p-3 md:p-10" >
            <section className="max-w-[600px]" >
              <h1 
                className="text-2xl font-bold text-secondary" >
                Obrigado
                <span className="text-effectsColor" >!</span>
              </h1>

              <p className="mt-2 text-textColor text-justify" >
                <span className="text-effectsColor" >"</span>Foi um prazer ter você por aqui! Espero que tenha se familiarizado com minha paixão pelo desenvolvimento web e meu comprometimento em aprender e evoluir constantemente. Estou entusiasmado com as oportunidades que o futuro reserva e adoraria continuar essa conversa. Seja para discutir oportunidades profissionais, projetos interessantes ou apenas para trocar ideias sobre o fascinante mundo do desenvolvimento, estou sempre aberto a novas conexões.
                Fique à vontade para entrar em contato. Obrigado por explorar meu portfólio.<span className="text-effectsColor" >"</span>
              </p>
            </section>
          </div>
        </div>
      </main>

      { openOrCloseMenu && <Nav closeMenu={ () => setOpenOrCloseMenu(!openOrCloseMenu) } /> }
    </Background>
  );
};