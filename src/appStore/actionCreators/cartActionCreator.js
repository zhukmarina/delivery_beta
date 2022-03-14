import { ADD_ITEM, REMOVE_ITEM } from "../actions/cartActions"

export const addCartItemAC = (cartItem) => ({
    type: ADD_ITEM,
    payload: cartItem,
})

export const removeCartItemAC = (id) => ({
    type: REMOVE_ITEM,
    payload: id,
})