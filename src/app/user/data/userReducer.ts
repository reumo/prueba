import type { AnyAction } from "redux";
import type { UserStore } from "../domain/userStore";
import * as actionTypes from "./userActionTypes";

type UserStoreState = Omit<UserStore, "login" | "setUser" | "removeUser" | "setInvalidLogin">;

const INITIAL_STATE: UserStoreState = {
  email: undefined,
  token: undefined,
  invalidLogin: false,
};

const userReducer = (state: UserStoreState = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          token: action?.token?.token,
        }
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        email: action.email,
        token: action.token,
      }
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        email: undefined,
        token: undefined,
      }
    case actionTypes.SET_INVALID_LOGIN:
      return {
        ...state,
        invalidLogin: action.invalidLogin,
      }
    default:
      return state;
  }
};

export { userReducer };
export type { UserStoreState };
