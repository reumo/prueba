export type Users = {
  users: User[];
  perPage: number,
  total: number,
  totalPage: number,
}

export type User = {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  avatar: string,
}

export type UsersResponse = {
  page: number;
  per_page: number;
  total: number;
  total_page: number;
  data: UserResponse[];
}

export type UserResponse = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
}
