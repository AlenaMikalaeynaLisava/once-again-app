import {call} from "redux-saga/effects"
import {getShow as getShowAPI} from '../../api/show'


export function* getShow(action){
    if(action.payload){
    const show = yield call(getShowAPI, action.payload);
    console.log(show);
    }
}