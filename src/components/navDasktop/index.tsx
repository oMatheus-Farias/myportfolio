import { Link } from "react-router-dom";

export default function NavDasktop(){
  return(
    <nav className="flex items-center gap-8 lg:gap-16" >
      <Link 
          className="text-textColor font-bold"
          to='/' 
        >
          sobre
        </Link>
        <Link 
          className="text-textColor font-bold"
          to='/specialties' 
        >
          especialidades
        </Link>
        <Link 
          className="text-textColor font-bold"
          to='/projects' 
        >
          projetos
        </Link>
        <div className="bg-secondary rounded-xl py-1 px-2" >
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