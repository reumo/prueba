import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
// Actions to be tested
import * as usersActions from '../usersActions';
import * as usersActionTypes from '../usersActionTypes';
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('select_actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('usersActions', () => {
    it('getUsersAction', () => {
      const expectedActions = [
        {
          type: usersActionTypes.GET_USERS,
        },
      ];

      store.dispatch(usersActions.getUsersAction(1, 2));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});