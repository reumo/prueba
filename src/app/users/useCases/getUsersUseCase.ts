import { UsersStore } from '../domain/usersStore';

type GetUsersStore = Pick<UsersStore, "getUsers">;

const getUsersUsersCase = (store: GetUsersStore, page: number, rowsPerPage: number) => {
  store.getUsers(page, rowsPerPage);
}

export { getUsersUsersCase };



