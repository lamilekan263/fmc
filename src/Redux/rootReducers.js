import { combineReducers } from "redux";

import AuthReducer from "./auth/authReducer";


export default combineReducers({
  auth: AuthReducer,
  
});
