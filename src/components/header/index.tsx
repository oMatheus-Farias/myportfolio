import logo from "../../assets/logo.svg";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <div className="w-full h-[4.7em] px-[1.2em] py-4 bg-primary flex items-center justify-between" >
      <img
        src={ logo }
        alt="Matheus Farias - Desenvolvedor Web"
      />

      <FiMenu color="#FFFBFF" size={36} />
    </div>
  );
};