import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  CLEAR_AUTH_STATE,
} from "./actionTypes";
import { APIUrls } from "../helpers/urls";
import { getFormBody } from "../helpers/utils";

// Login
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.login();
    fetch(url, {
      method: "POST", // Default it's GET request
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // To tell the server that it's form data and not json(Which is by default)
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          dispatch(loginFailed(data.message || data.body[0].message));
          return;
        }
        // else dispatch action to save user
        dispatch(loginSuccess(data.body));
        // Save the token in local storage
        localStorage.setItem("authToken", data.body.token);
      });
  };
}

// Sign up
export function signup(formDataObj) {
  return (dispatch) => {
    dispatch(startSingup());
    const url = APIUrls.signup();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        first_name: formDataObj.firstName,
        last_name: formDataObj.lastName,
        email: formDataObj.email,
        password: formDataObj.password,
        confirm_password: formDataObj.confirmPassword,
        timezone: formDataObj.timezone,
        gender: formDataObj.gender,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          dispatch(signupFailed(data.message || data.body[0].message));
          return;
        }
        dispatch(signupSuccessful(data.body));
        // Save the token in local storage
        localStorage.setItem("authToken", data.body.token);
      });
  };
}

export function startSingup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}
