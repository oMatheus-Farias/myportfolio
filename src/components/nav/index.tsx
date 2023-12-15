import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

interface NavProps {
  closeMenu: () => void
};

export default function Nav({ closeMenu }: NavProps){
  return(
    <div className="w-full h-full bg-backgroundFilter backdrop-blur-md  px-[1.2em] py-4 absolute top-0" >
      <div className="w-full flex justify-end" >
        <button onClick={ closeMenu } >
          <IoClose color="#FFFBFF" size={40} />
        </button>
      </div>

      <nav className="w-full flex flex-col my-20 gap-20" >
        <Link 
          className="text-textColor font-bold text-2xl block text-center"
          to='/' 
        >
          sobre
        </Link>
        <Link 
          className="text-textColor font-bold text-2xl block text-center"
          to='/specialties' 
        >
          especialidades
        </Link>
        <Link 
          className="text-textColor font-bold text-2xl block text-center"
          to='/projects' 
        >
          projetos
        </Link>
        <div className="bg-secondary rounded-xl py-2" >
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