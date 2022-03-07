import { mocketGetUsersResponse } from '../../data/tests/usersService.test'
import { Users } from '../usersEntity'
import { refactorUsers } from '../usersModel'

export const mockedUsers: Users = {
  perPage: 5,
  total: 2,
  totalPage: 1,
  users: [
    {
      id: 1,
      email: 'a@a.com',
      firstName: 'a',
      lastName: 'b',
      avatar: 'avatar',
    },
    {
      id: 2,
      email: 'b@b.com',
      firstName: 'c',
      lastName: 'd',
      avatar: 'avatar2',
    },
  ]
}

describe('usersModel', () => {
  it('refactorUSer', () => {
    const users = refactorUsers(mocketGetUsersResponse);
    expect(users).toEqual(mockedUsers);
  })
})