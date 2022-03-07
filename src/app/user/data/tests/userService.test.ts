import axios from 'axios';
import { mocked } from 'jest-mock';
import { login } from '../userService';

jest.mock('../userService');
const mockedLogin = mocked(login, true);

export const mockedLoginResponse = { token: 'token'};

describe('userService', () => {
  beforeEach(() => {
    mockedLogin.mockResolvedValue(mockedLoginResponse as any);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('fetches successfully data from an API', async () => {
    const loginReponse = await login('email', 'password');
    expect(mockedLogin).toHaveBeenCalledWith('email', 'password');
    expect(loginReponse).toEqual(mockedLoginResponse);
  });
});
