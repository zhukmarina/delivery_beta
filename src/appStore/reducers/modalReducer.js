import { SET_IS_OPEN, SET_MODAL_PARAMS } from "../actions/modalActions"


const initialValues = {
   isOpen: false,
   id: '',
   title: '',
}

export const modalReducer = (state = initialValues, action) => {
    switch (action.type){
        case SET_IS_OPEN: {
            return {...state, isOpen: action.payload}
        }
        case SET_MODAL_PARAMS: {
            return {...state, title: action.payload?.title, id: action.payload?.id}
        }
       
        default:
            return state
    }

}

export default modalReducer;