import React from "react";

import { UsersStore } from '../domain/usersStore';
import { getUsersUsersCase } from '../useCases/getUsersUseCase';

function useUsersViewModel(store: UsersStore) {

  const getUsers = React.useCallback (
    (page: number, rowsPerPage: number) => {
      getUsersUsersCase(store, page, rowsPerPage);
    }, [store.getUsers]
  )

  return {
    users: store.users,
    total: store.total,
    totalPage: store.totalPage,
    perPage: store.perPage,
    getUsers,
  };
}

export { useUsersViewModel };
