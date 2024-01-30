import { useContext } from "react";
import { Context } from "../../contexts";

import { Link } from "react-router-dom";

export default function NavDasktop(){
  const { currentPage } = useContext(Context);

  return(
    <nav className="flex items-center gap-8 lg:gap-16" >
      <Link 
          className="text-textColor font-bold border-b-2 hover:text-effectsColor transition-all"
          style={{ borderBottomColor: currentPage === '/' ? '#F24C00' : 'transparent' }}
          to='/' 
        >
          sobre
        </Link>
        <Link 
          className="text-textColor font-bold border-b-2 hover:text-effectsColor transition-all"
          style={{ borderBottomColor: currentPage === '/specialties' ? '#F24C00' : 'transparent' }}
          to='/specialties' 
        >
          especialidades
        </Link>
        <Link 
          className="text-textColor font-bold border-b-2 hover:text-effectsColor transition-all"
          style={{ borderBottomColor: currentPage === '/projects' ? '#F24C00' : 'transparent' }}
          to='/projects' 
        >
          projetos
        </Link>
        <div 
          className="rounded-xl py-1 px-2" 
          style={{ backgroundColor: currentPage === '/contacts' ? '#F24C00' : '#61F2C2' }}
        >
          <Link 
            className="text-primary font-bold"
            to='/contacts' 
          >
            contatos
          </Link>
        </div>
    </nav>
  );
};