import axios from 'axios';
import { mocked } from 'jest-mock';
import { UsersResponse } from '../../domain/usersEntity';
import { getUsers } from '../usersService';

jest.mock('../usersService');
const mockedgetUsers = mocked(getUsers, true);

export const mocketGetUsersResponse: UsersResponse = {
  page: 1,
  per_page: 5,
  total: 2,
  total_page: 1,
  data: [
    {
      id: 1,
      email: 'a@a.com',
      first_name: 'a',
      last_name: 'b',
      avatar: 'avatar',
    },
    {
      id: 2,
      email: 'b@b.com',
      first_name: 'c',
      last_name: 'd',
      avatar: 'avatar2',
    },
  ]
}

describe('usersService', () => {
  beforeEach(() => {
    mockedgetUsers.mockResolvedValue(mocketGetUsersResponse);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('fetches successfully data from an API', async () => {
    const getUsersReponse = await getUsers(1, 5);
    expect(mockedgetUsers).toHaveBeenCalledWith(1, 5);
    expect(getUsersReponse).toEqual(mocketGetUsersResponse);
  });
});