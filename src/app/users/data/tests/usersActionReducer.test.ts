import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import { usersReducer } from '../usersReducer';
import * as usersActionTypes from '../usersActionTypes';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore();

const mockUseStore = {
  users: undefined,
  total: 0,
  perPage: 0,
  totalPage: 0,
}

describe('usersReducer', () => {

  it('should handle GET_USER', () => {
    const action = {
      type: usersActionTypes.GET_USERS,
    };
    const initialState = undefined;
    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual(
      {
        perPage: 0,
        total: 0,
        totalPage: 0,
        users: undefined,
      }
    );
  });
});