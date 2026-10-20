import { createContext, useReducer, type Dispatch, type ReactNode,  } from "react";
import { initialState, personReducer, type PersonActions, type PersonState } from "../reducer/personReducer";



type PersonProviderProps = {
    children: ReactNode

}


type PersonContextProps = {
    state: PersonState    
    dispatch: Dispatch<PersonActions    >
}

export const PersonContex = createContext<PersonContextProps>(null!)

export const PersonProvider = ({ children }: PersonProviderProps) => {

    const [state, dispatch] = useReducer(personReducer, initialState)

    return (
       <PersonContex.Provider
            value={{
                state,
                dispatch
            }}
       >

            {children}
       </PersonContex.Provider>
    )
}