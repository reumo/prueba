import { render, waitFor } from '@testing-library/react';
import { mocked } from 'jest-mock';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { appStoreImplementation } from '../../../main/data/appStoreImplementation';
import UsersView from '../UsersView';
import { UsersViewIds } from '../UsersViewIds';
import { getUsers } from '../../data/usersService';

jest.mock('../../data/usersService');
const mockedGetUsers = mocked(getUsers, true);

describe('UserView', () => {
  const renderComponent = () =>
    render(
      <Provider store={appStoreImplementation}>
        <MemoryRouter initialEntries={[`/users`]}>
          <Routes>
            <Route path="/users" element={<UsersView />}>
            </Route>
          </Routes >
        </MemoryRouter>
      </Provider>
    );beforeEach(() => {
      mockedGetUsers.mockResolvedValue(mocketGetUsersResponse as any);
    });



  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('unlogged user', () => {
    it('render email field', async () => {
      const { getAllByTestId } = renderComponent();
      await waitFor(() => {
        const tableRow = getAllByTestId(UsersViewIds.TABLE_ROW);
        expect(tableRow).toBeTruthy();
        expect(tableRow).toHaveLength(5);
      });
  })
});

})