import { combineReducers } from "redux";
import reducerFirst from './reducerFirst';
import show from './showsReducer'

const rootReducer = combineReducers({
    output: reducerFirst,
    show,
})
export default rootReducer;