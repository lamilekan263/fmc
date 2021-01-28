import isEmpty from "../../validation/isEmpty";

import {
  SET_CURRENT_USER,
  REGISTER_USER,
  GET_ERRORS,
  REGISTER_SUCCESSFUL,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: "",
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };
      case REGISTER_SUCCESSFUL: 
          return {
            ...state,
            error: '',
            loading: false,
          };
      
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        loading: false,
        user: action.payload,
        error : ""
      };
    case GET_ERRORS:
          return {
              ...state,
              loading: false,
              error : action.payload
      }
    default:
      return state;
  }
}


export default authReducer