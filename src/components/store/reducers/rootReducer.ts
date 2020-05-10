import { combineReducers } from "redux";
import mainReducer from "./mainReducer";

const rootReducer = combineReducers({
    sentencePage: mainReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer