import { createContext, ReactNode, useState } from "react";
import { Publish } from "../models";
const Context = createContext({});

interface Props {
    children: ReactNode
}


export function PubliContextProvider({children}: Props){

    const [PublicationsContext,setPublicationsContext] = useState<Array<Publish>>([]);
    return  <Context.Provider value={{PublicationsContext, setPublicationsContext}}>{children}</Context.Provider>
    
}

export default Context