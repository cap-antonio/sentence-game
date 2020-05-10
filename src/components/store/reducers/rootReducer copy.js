import { combineReducers } from "redux";
import mainReducer from "./mainReducer";

const rootReducer = combineReducers({
    sentencePage: mainReducer
})

export default rootReducer