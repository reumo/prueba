import { login } from "./userService";
import * as actionTypes from "./userActionTypes";

const loginUserAction = (email: string, password: string) => (dispatch: any) => {
  dispatch({ type: actionTypes.LOGIN });

  return login(email, password).then((token) => {
    dispatch({ type: actionTypes.LOGIN_SUCCESS, token });

    return token;
  });
}

const setUserAction = (email: string, token: string) => (dispatch: any) => {
  dispatch({ type: actionTypes.SET_USER, email, token });
  return email;
}

const removeUserAction = () => (dispatch: any) => {
  dispatch({ type: actionTypes.REMOVE_USER });
}

const setInvalidLoginAction = (invalidLogin: boolean) => (dispatch: any) => {
  dispatch({ type: actionTypes.SET_INVALID_LOGIN, invalidLogin });
}


export { loginUserAction, setUserAction, removeUserAction, setInvalidLoginAction };
