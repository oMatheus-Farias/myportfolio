import { useContext, useEffect } from "react";
import { Context } from "../../contexts";

import Background from "../../components/background";
import Header from "../../components/header";
import Nav from "../../components/nav";
import TechnologiesCard from "../../components/technologiesCard";
import Footer from "../../components/footer";

export default function Specialties() {
  const { viewDasktop, openOrCloseMenu, setOpenOrCloseMenu, setCurrentPage, technologies } = useContext(Context);

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

      <main className="px-10 py-9 mt-6 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-36 lg:gap-10" >
        {technologies.map((item, index) => {
          return(
            <section key={ index } className="bg-cardsColor rounded-xl flex flex-col items-center pt-8 max-w-md mx-auto min-w-[15em] justify-between mb-28" >
              <TechnologiesCard  key={ index } image={ item.image } name={ item.name } />
            </section>
          )
        })}
      </main>

      { openOrCloseMenu && <Nav closeMenu={ () => setOpenOrCloseMenu(!openOrCloseMenu) } /> }
      <Footer/>
    </Background>
  );
};