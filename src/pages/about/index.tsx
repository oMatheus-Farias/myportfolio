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
          <h1 
            className="text-secondary text-start text-8xl font-semibold" >
              Olá
              <span className="text-effectsColor" >,</span>
          </h1>

          <p className="text-start text-textColor mt-5" >
            meu nome é Matheus Farias, e minha jornada no mundo da tecnologia e desenvolvimento teve início no começo de 2023. Nasci em 1999 e estou atualmente focado em minha trajetória acadêmica, cursando Análise e Desenvolvimento de Sistemas na faculdade UNG de Guarulhos.
            Atualmente, desempenho a função de funcionário público na área de segurança, porém, estou em processo de transição de carreira, buscando oportunidades no universo do desenvolvimento front-end. Esta transição é motivada por minha paixão crescente por criar experiências digitais envolventes e funcionais.
            Ao longo de minha jornada, adquiri valiosos conhecimentos por meio de cursos especializados e projetos pessoais desenvolvidos durante meus estudos, que continuam a todo vapor.
            Estou confiante de que minha determinação, habilidades técnicas e comprometimento serão ativos valiosos para qualquer equipe de desenvolvimento.
          </p>
        </section>
      </div>
    </Background>
  );
};