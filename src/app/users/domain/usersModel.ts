import type { User, UserResponse, Users, UsersResponse } from "./usersEntity";

const refactorUSer = (user: UserResponse): User => {
  return { 
    lastName: user.last_name,
    firstName: user.first_name,
    avatar: user.avatar,
    email: user.email,
    id: user.id,
  }
}

const refactorUsers = (usersResponse: UsersResponse): Users => {
  const refactoresUsers: User[] = usersResponse.data.map(userResponse => {
    return refactorUSer(userResponse);
  });
  return {
    total: usersResponse.total,
    perPage: usersResponse.per_page,
    totalPage: usersResponse.total_page,
    users: refactoresUsers,
  }
}
export { refactorUsers };




