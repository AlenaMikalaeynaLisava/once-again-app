import {ADD, MINUS, MULTIPLY, DIVISION} from "../constants/counts";

const initialState = 0;
const reducer = (state = initialState, action)=>{ 
    switch(action.type){
        case ADD:
            return state + action.payload;
        case MINUS:
            return state - action.payload;
        case MULTIPLY:
            return state * action.payload;
        case DIVISION:
            return state / action.payload;
        default:
            return state;
    }

}

export default reducer;