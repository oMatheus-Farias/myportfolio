interface CardProps {
  image: string,
  name: string,
};

function TechnologiesCard({ image, name }: CardProps){
  return(
    <>
      <img
        src={ image }
        alt={ name }
      />

      <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
        <p className="text-secondary uppercase" >{ name }</p>
      </div>
    </>
  );
};

export default TechnologiesCard;