import { Bookreducer } from "./reducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    reducer:Bookreducer
})
export default rootReducer;