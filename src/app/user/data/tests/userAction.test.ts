import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
// Actions to be tested
import * as userActions from '../userActions';
import * as userActionTypes from '../userActionTypes';
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('select_actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('userActions', () => {
    it('setUserAction', () => {
      const expectedActions = [
        {
          email: 'email',
          token: 'token',
          type: userActionTypes.SET_USER,
        },
      ];

      store.dispatch(userActions.setUserAction('email', 'token'));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('removeUserAction', () => {
      const expectedActions = [
        {
          type: userActionTypes.REMOVE_USER,
        },
      ];

      store.dispatch(userActions.removeUserAction());
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('removeUserAction true', () => {
      const expectedActions = [
        {
          type: userActionTypes.SET_INVALID_LOGIN,
          invalidLogin: true,
        },
      ];

      store.dispatch(userActions.setInvalidLoginAction(true));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('removeUserAction false', () => {
      const expectedActions = [
        {
          type: userActionTypes.SET_INVALID_LOGIN,
          invalidLogin: false,
        },
      ];

      store.dispatch(userActions.setInvalidLoginAction(false));
      expect(store.getActions()).toEqual(expectedActions);
    });
    
  });

});