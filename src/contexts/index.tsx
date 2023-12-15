import { createContext, ReactNode, useState, useEffect } from "react";

interface ContextData {
  viewDasktop: boolean
};

export const Context = createContext({} as ContextData);

export default function Provider({ children }: { children: ReactNode }){
  const [viewDasktop, setViewDascktop] = useState<any>(null);

  useEffect(() => {
    handleViewSize()
  }, [])

  window.addEventListener('resize', handleViewSize);

  function handleViewSize(){
    let viewDasktop: boolean;
    window.innerWidth >= 1024 ? viewDasktop = true : viewDasktop = false;

    setViewDascktop(viewDasktop);
  };

  return(
    <Context.Provider value={{ viewDasktop }} >
      { children }
    </Context.Provider>
  );
};