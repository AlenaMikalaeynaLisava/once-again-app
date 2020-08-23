import {GET_SHOW} from '../constants/shows'

export const getShow = (id) => ({
    type: GET_SHOW,
    payload: id,
})