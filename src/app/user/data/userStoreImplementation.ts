import React from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../main/data/appStoreImplementation";
import { User } from '../domain/userEntity';
import { UserStore } from '../domain/userStore';

import {
  loginUserAction,
  removeUserAction,
  setUserAction,
  setInvalidLoginAction,
} from "./userActions";
import { UserStoreState } from './userReducer';

const userSelector = (state: AppRootState) => state.user;

const useUserStoreImplementation = (): UserStore => {
  const { email, token, invalidLogin } = useSelector<
    AppRootState,
    UserStoreState
  >(userSelector);
  const dispatch = useDispatch();

  const login = React.useCallback(
    (user: User, emailUser: string, passwordUser: string): Promise<string> => loginUserAction(emailUser, passwordUser)(dispatch),
    [dispatch]
  );

  const setUser = React.useCallback(
    (emailUser: string, tokenUser: string): string => setUserAction(emailUser, tokenUser)(dispatch),
    [dispatch]
  );

  const removeUser = React.useCallback(
    (): void => removeUserAction()(dispatch),
    [dispatch]
  );

  const setInvalidLogin = React.useCallback(
    (invalidLoginUser: boolean): void => setInvalidLoginAction(invalidLoginUser)(dispatch),
    [dispatch]
  );
  
  return {
    invalidLogin,
    email,
    token,
    login,
    setUser,
    removeUser,
    setInvalidLogin,
  };
};

export { useUserStoreImplementation, useSelector };
