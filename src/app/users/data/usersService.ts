import axios, { AxiosResponse } from 'axios';
import { refactorUsers } from '../domain/usersModel';
let count = 0;
const url = 'https://reqres.in/api/'

const getUsers = async(page: number, rowsPerPage: number): Promise<AxiosResponse['data']> => {
  try{
    const response = await axios.get(`${url}users?page=${page}&per_page=${rowsPerPage}`);
    return refactorUsers(response.data);
  } catch(err) {
   throw Error('invalid login');
  }
}

export { getUsers };
