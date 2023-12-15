import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

import { Context } from "../../contexts";

interface NavProps {
  closeMenu: () => void
};

export default function Nav({ closeMenu }: NavProps){
  const { currentPage } = useContext(Context);

  return(
    <div className="w-full h-full bg-backgroundFilter backdrop-blur-md  px-[1.2em] py-4 absolute top-0" >
      <div className="w-full flex justify-end" >
        <button onClick={ closeMenu } >
          <IoClose color="#FFFBFF" size={40} />
        </button>
      </div>

      <nav className="w-full flex flex-col my-20 gap-20" >
        <Link 
          className="font-bold text-2xl block text-center"
          style={{ color: currentPage === '/' ? '#F24C00' : '#FFFBFF' }}
          to='/' 
        >
          sobre
        </Link>
        <Link 
          className="font-bold text-2xl block text-center"
          style={{ color: currentPage === '/specialties' ? '#F24C00' : '#FFFBFF' }}
          to='/specialties' 
        >
          especialidades
        </Link>
        <Link 
          className="font-bold text-2xl block text-center"
          style={{ color: currentPage === '/projects' ? '#F24C00' : '#FFFBFF' }}
          to='/projects' 
        >
          projetos
        </Link>
        <div 
          className="rounded-xl py-2" 
          style={{ backgroundColor: currentPage === '/contacts' ? '#F24C00' : '#61F2C2'}}
        >
          <Link 
            className="text-primary font-bold text-2xl block text-center"
            to='/contacts' 
          >
            contatos
          </Link>
        </div>
      </nav>
    </div>
  );
};