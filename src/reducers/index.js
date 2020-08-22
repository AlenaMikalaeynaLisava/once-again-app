import { combineReducers } from "redux";
import reducerFirst from './reducerFirst';

const rootReducer = combineReducers({
    output: reducerFirst,
})
export default rootReducer;