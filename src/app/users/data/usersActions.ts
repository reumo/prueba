import { getUsers } from "./usersService";
import * as actionTypes from "./usersActionTypes";
import { Users } from '../domain/usersEntity';

const getUsersAction = (page: number, rowsPerPage: number) => (dispatch: any) => {
  dispatch({ type: actionTypes.GET_USERS });
  return getUsers(page, rowsPerPage).then((users: Users) => {
    dispatch({ type: actionTypes.GET_USERS_SUCCESS, users });
    return users;
  })
}

export { getUsersAction };
