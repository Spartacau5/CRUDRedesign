import {FETCH_POST, NEW_POST} from './Types'

export const fetchPosts = () => dispatch => {
    return dispatch({
        type: FETCH_POST,
        payload: "",
    })
}

export const createPost = (data) => dispatch =>{
    return dispatch({
        type: NEW_POST,
        payload: data
    })
}