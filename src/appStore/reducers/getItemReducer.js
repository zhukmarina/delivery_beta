import { GET_DATA, IS_FAVORITE } from "../actions/actions";
import { saveToLS } from "../../utils/localStorage"

const initialState ={
    
    items: [],
    
};

export const getItemReducer = (state=initialState, action) =>{
    switch (action.type){
        case GET_DATA: 
        saveToLS('cards', action.payload);
        return {...state, items:action.payload}

        case IS_FAVORITE: {
            const newCartItems = [...state.items];
            const index = newCartItems.findIndex(elem => elem.name === action.payload.name);
            newCartItems[index].isFavorite = !newCartItems[index].isFavorite;
            saveToLS('cards', newCartItems);
            return { ...state, items: newCartItems };
        }
        default:{
            return state
        }
    }
}