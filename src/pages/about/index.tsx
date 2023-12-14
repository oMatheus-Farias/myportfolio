import Background from "../../components/background";
import Header from "../../components/header";

import avatarImage from "../../assets/foto-perfil.jpeg";

export default function About() {
  return (
    <Background>
      <Header/>

      <div className="px-[1.2em] py-10 w-full flex flex-col items-center" >
        <div>
          <img
            src={ avatarImage }
            alt="Foto Perfil"
            className="object-cover rounded-full w-[350px] h-[350px] object-top border-8 border-secondary "
          />
        </div>

        <section className="w-full mt-10" >
          <h1 className="text-secondary text-start text-8xl font-semibold" >Olá<span className="text-effectsColor" >,</span></h1>
        </section>
      </div>
    </Background>
  );
};