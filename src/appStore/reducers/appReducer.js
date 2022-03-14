import { combineReducers } from "redux";
import { getItemReducer } from "./getItemReducer";
import { modalReducer } from "./modalReducer";
import {cartReducer} from "./cartReducer";


export const  appReducer = combineReducers(
    {
        items : getItemReducer,
        modal : modalReducer,
        cartItems: cartReducer,
        
    }
)

export default appReducer;