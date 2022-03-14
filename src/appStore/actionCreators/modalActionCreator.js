import { SET_IS_OPEN, SET_MODAL_PARAMS } from "../actions/modalActions";

export const setIsOpenModal = (value) => ({ type: SET_IS_OPEN, payload: value });
export const setModalParams = (value) => ({ type: SET_MODAL_PARAMS, payload: value });