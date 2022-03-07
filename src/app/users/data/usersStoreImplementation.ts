import React from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../main/data/appStoreImplementation";
import { User, Users } from '../domain/usersEntity';
import { UsersStore } from '../domain/usersStore';

import {
  //getPunkBeerAction,
  getUsersAction,
  /*setPunkBeerAction,
  updatePunkBeerAction*/
} from "./usersActions";
import { UserStoreState } from './usersReducer';

const userSelector = (state: AppRootState) => state.users;

const useUsersStoreImplementation = (): UsersStore => {
  const { users, total, totalPage, perPage } = useSelector<
    AppRootState,
    UserStoreState
  >(userSelector);
  const dispatch = useDispatch();

  const getUsers = React.useCallback(
    ( page: number, rowsPerPage: number):Promise<Users | []>  => getUsersAction(page, rowsPerPage)(dispatch),
    [dispatch]
  )

  return {
    users,
    total,
    totalPage,
    perPage,
    getUsers,
  };
};

export { useUsersStoreImplementation };