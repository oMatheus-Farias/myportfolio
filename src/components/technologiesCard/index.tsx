interface CardProps {
  image: string,
  name: string
};

function TechnologiesCard({ image, name }: CardProps){
  return(
    <section className="bg-cardsColor rounded-xl flex flex-col items-center pt-8 max-w-md mx-auto min-w-[15em]" >
      <img
        src={ image }
        alt={ name }
      />

      <div className="bg-primary w-full py-2 text-center rounded-b-xl mt-8" >
        <p className="text-secondary uppercase" >{ name }</p>
      </div>
    </section>
  );
};

export default TechnologiesCard;