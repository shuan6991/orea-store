import type { Person } from "../types"


export type PersonActions = 
{type:'add-person', payload:{person: Person}}



export type PersonState = {
    person: Person[]
}


export const initialState: PersonState = {
    person: []
}


export const personReducer = (
    state: PersonState = initialState,
    action: PersonActions
)=>{

    if(action.type === 'add-person'){
        
        return{
            ...state,
            person: [action.payload.person]

        }
    }

    return state
}






