import { combineReducers } from "redux";
import phrasesReducer from "./phraseList/reducer";

export default combineReducers({ phrases: phrasesReducer });
