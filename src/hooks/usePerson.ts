import { useContext } from "react";
import { PersonContex } from "../context/PersonContext";

export const usePerson = ()=>{

    const context = useContext(PersonContex)

    if(!context)
        throw new Error('falta el context')


    return context


}