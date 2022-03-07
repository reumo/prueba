import axios, { AxiosResponse } from 'axios';
let count = 0;
const url = 'https://reqres.in/api/'

const login = async(email: string, password: string): Promise<AxiosResponse['data']> => {
  try{
    const response = await axios.post(`${url}login`, {email, password});
    return response.data;
  } catch(err) {
   throw Error('invalid login');
  }
}

export { login };
