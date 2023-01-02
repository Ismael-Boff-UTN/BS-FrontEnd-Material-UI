import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {articleReducer} from './articleReducer';
import {cartReducer} from './cartReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  articles : articleReducer,
  cart : cartReducer,
});
