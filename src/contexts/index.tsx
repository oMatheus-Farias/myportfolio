import { createContext, ReactNode, useState, useEffect } from "react";

interface ContextData {
  viewDasktop: boolean,
  openOrCloseMenu: boolean,
  setOpenOrCloseMenu: (openOrCloseMenu: boolean) => void;
};

export const Context = createContext({} as ContextData);

export default function Provider({ children }: { children: ReactNode }){
  const [viewDasktop, setViewDascktop] = useState<any>(null);
  const [openOrCloseMenu, setOpenOrCloseMenu] = useState(false);

  useEffect(() => {
    handleViewSize();
  }, [])

  window.addEventListener('resize', handleViewSize);

  function handleViewSize(){
    let viewDasktop: boolean;
    window.innerWidth >= 768 ? viewDasktop = true : viewDasktop = false;

    setViewDascktop(viewDasktop);
  };

  return(
    <Context.Provider value={{ viewDasktop, openOrCloseMenu, setOpenOrCloseMenu }} >
      { children }
    </Context.Provider>
  );
};