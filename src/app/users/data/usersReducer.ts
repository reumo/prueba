import type { AnyAction } from "redux";
import type { UsersStore } from "../domain/usersStore";
import * as actionTypes from "./usersActionTypes";

type UserStoreState = Omit<UsersStore, "getUsers" | "loadInitialUsers">;

const INITIAL_STATE: UserStoreState = {
  users: undefined,
  total: 0,
  perPage: 0,
  totalPage: 0,
};

const usersReducer = (state: UserStoreState = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return { ...state };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
}

export { usersReducer };
export type { UserStoreState };
