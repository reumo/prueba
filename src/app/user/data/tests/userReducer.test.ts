import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import { userReducer } from '../userReducer';
import * as userActionTypes from '../userActionTypes';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore();

const mockUseStore = {
  token: undefined,
  email: undefined,
}

describe('userReducer', () => {

  it('should handle SET_USER', () => {
    const action = {
      type: userActionTypes.SET_USER,
      email: 'email',
      token: 'token',
      invalidLogin: 'false',
    };
    const initialState = undefined;
    const nextState = userReducer(initialState,action);

    expect(nextState).toEqual(
      {
        email: 'email',
        token: 'token',
        invalidLogin: false,
      }
    );
  });

  it('should handle GET_POST_START', () => {
    const action = {
      type: userActionTypes.REMOVE_USER,
    };
    const initialState = {
      email: 'email',
      token: 'token',
      invalidLogin: false,
    };
    const nextState = userReducer(initialState,action);

    expect(nextState).toEqual(
      {
        email: undefined,
        token: undefined,
        invalidLogin: false,
      }
    );
  });

  it('should handle SET_INVALID_LOGIN true', () => {
    const action = {
      type: userActionTypes.SET_INVALID_LOGIN,
      invalidLogin: true,
    };
    const initialState = {
      email: undefined,
      token: undefined,
      invalidLogin: false,
    };
    const nextState = userReducer(initialState,action);

    expect(nextState).toEqual(
      {
        email: undefined,
        token: undefined,
        invalidLogin: true,
      }
    );
  });

  it('should handle SET_INVALID_LOGIN false', () => {
    const action = {
      type: userActionTypes.SET_INVALID_LOGIN,
      invalidLogin: false,
    };
    const initialState = {
      email: undefined,
      token: undefined,
      invalidLogin: true,
    };
    const nextState = userReducer(initialState,action);

    expect(nextState).toEqual(
      {
        email: undefined,
        token: undefined,
        invalidLogin: false,
      }
    );
  });
});