// punkBeerStore.ts
import type { User, Users } from "./usersEntity";

interface UsersStore {
  users: User[] | undefined;
  perPage: number,
  total: number,
  totalPage: number,
  getUsers(page: number, rowsPerPage: number): Promise<Users | []>;
}

export type { UsersStore };
