import React from "react";

import { UserStore } from '../domain/userStore';
import { login as loginService } from '../data/userService';
import { setUserUseCase } from '../useCases/setUserUseCase';
import { removeUserUseCase } from '../useCases/removeUserUseCase';
import { setInvalidLoginUseCase } from '../useCases/setUserInvalidLoginUseCase';

function useUserViewModel(store: UserStore) {

  const login = (email: string, password: string): void => {
    loginService(email, password)
      .then(response => {
        sessionStorage.setItem('userToken', response.token)
        sessionStorage.setItem('userEmail', email)
        setUserUseCase(store, email, response.token);
        setInvalidLoginUseCase(store, false);
      })
      .catch(err => {
        console.log('err', err);
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('userEmail');
        removeUserUseCase(store);
        setInvalidLoginUseCase(store, true);
      })
  }

  const logout = (): void => {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userEmail');
    removeUserUseCase(store);
  }

  const setUser = (email: string, token: string): void => {
    setUserUseCase(store, email, token);
  }

  return {
    email: store.email,
    token: store.token,
    invalidLogin: store.invalidLogin,
    login,
    logout,
    setUser,
  };
}

export { useUserViewModel };
