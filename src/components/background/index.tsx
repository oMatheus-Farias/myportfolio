import { ReactNode } from "react";

function Background({ children }: { children: ReactNode }){
  return(
    <div className="w-full min-h-screen bg-backgroundImage bg-cover bg-center" >
      <div className="w-full min-h-screen bg-backgroundFilter backdrop-blur-sm" >
        { children }
      </div>
    </div>
  );
};

export default Background;