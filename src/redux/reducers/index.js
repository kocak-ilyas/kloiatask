import { combineReducers } from "redux";
import coffeesReducer from "./coffeesReducer";

const rootReducers = combineReducers({ coffeesReducer });

export default rootReducers;
