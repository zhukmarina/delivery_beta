import { GET_DATA, IS_FAVORITE  } from "../actions/actions";


export const getData = () => async (dispatch) => {
    const {data} = await fetch('./products.json')
    .then(res => res.json() )
    // console.log(data)

    dispatch({type: GET_DATA, payload: data})
}

export const setIsFavoriteCreator = (name) => ({
    type: IS_FAVORITE,
    payload: name,
 })
 







