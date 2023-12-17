interface CardProps {
  name: string,
  image: string,
  description: string,
  technologies: string
};

function ProjectsCard({ name ,image, description, technologies }: CardProps){
  return(
    <div className="px-2" >
      <div className="w-full" >
        <img
          src={ image }
          alt={ name }
          className="object-cover rounded-xl"
        />
      </div>

      <div>
        <h2 className="text-secondary mt-2 text-xl font-bold" >Descrição:</h2>
        <p className="text-textColor text-justify text-base" >
          { description }
        </p>

        <h3 className="text-secondary mt-2 text-lg font-bold" >Tecnologias utilizadas:</h3>
        <p className="text-textColor text-justify text-base" >
          { technologies }
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;