import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  REGISTER_USER,
  REGISTER_SUCCESSFUL,
} from "./types";


const initialUserRegistration = () => {
    return {
      type: REGISTER_USER,
    };
}
const registrationSuccessful = () => {
    return {
      type: REGISTER_SUCCESSFUL,
    };
}

// Register User
export const registerUser = (userData, history) => (dispatch) => {
    try {
           dispatch(initialUserRegistration());
           axios
             .post(
               "https://fmc-library.softcoder404.vercel.app/api/auth/register",
               userData
             )
               .then((res) =>{
                   dispatch(registrationSuccessful())
                   console.log(res)
                   
               }
               
               )
               .catch(err => {
                   console.log(err)
                   dispatch({
                     type: GET_ERRORS,
                     payload: err.response.data.msg,
                   });
               })
            
    }catch(err){
         console.log(err);
        dispatch({
            type: GET_ERRORS,
            payload : err.response.data.msg
        })
    }
 
};

// Login - Get User Token
export const loginUser = (userData) => (dispatch) => {
    try {
         axios
           .post(
             "https://fmc-library.softcoder404.vercel.app/api/auth/login",
             userData
           )
           .then((res) => {
             // Save to localStorage
             const { token } = res.data.data;

             // Set token to ls
             localStorage.setItem("jwtToken", token);
             // Set token to Auth header
             setAuthToken(token);
             // Decode token to get user data
             const decoded = jwt_decode(token);
             // Set current user
             dispatch(setCurrentUser(decoded));
           })
           .catch((err) =>
             dispatch({
               type: GET_ERRORS,
               payload: err.response.data.message
             })
           );
    } catch (err) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        });
    }
 
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
