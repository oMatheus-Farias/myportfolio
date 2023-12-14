import logo from "../../assets/logo.svg";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full h-[4.7em] px-[1.2em] py-4 bg-primary flex items-center justify-between" >
      <Link to="/" >
        <img
          src={ logo }
          alt="Matheus Farias - Desenvolvedor Web"
        />
      </Link>

      <button>
        <FiMenu 
          color="#FFFBFF" size={36} 
        />
      </button>
    </div>
  );
};