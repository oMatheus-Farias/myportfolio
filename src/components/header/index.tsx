import logo from "../../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import NavDasktop from "../navDasktop";

interface HeaderProps {
  openMenu: () => void;
  viewSize: boolean
};

export default function Header({ openMenu, viewSize }: HeaderProps) {
  return (
    <div className="w-full h-[4.7em] px-[1.2em] py-4 bg-primary flex items-center justify-between" >
      <Link to="/" >
        <img
          src={ logo }
          alt="Matheus Farias - Desenvolvedor Web"
        />
      </Link>

      { viewSize !== null ? viewSize ? (
        <NavDasktop/>
      ) : (
        <button onClick={ openMenu } >
          <FiMenu 
            color="#FFFBFF" size={36} 
          />
        </button>
      ) : '' }
    </div>
  );
};