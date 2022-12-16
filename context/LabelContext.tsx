import { createContext, ReactNode, useState } from "react";
import { Publish } from "./types";
const Context = createContext({});

interface Props {
    children: ReactNode
}


export function PubliContextProvider({children}: Props){

    const [LabelContext,setLabelContext] = useState([]);
    return  <Context.Provider value={{LabelContext, setLabelContext}}>{children}</Context.Provider>
    
}

export default Context