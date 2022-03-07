import { fireEvent, render, waitFor } from '@testing-library/react';
import { mocked } from 'jest-mock';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { appStoreImplementation } from '../../../../main/data/appStoreImplementation';
import Header from '../Header';
import { HeaderIds } from '../HeaderIds';


const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));

export const mockedLoginResponse = { token: 'token' };
describe('UserView', () => {
  const renderComponent = () =>
    render(
      <Provider store={appStoreImplementation}>
        <MemoryRouter initialEntries={[`/`]}>
          <Routes>
            <Route path="/" element={<Header />}>
            </Route>
          </Routes >
        </MemoryRouter>
      </Provider>
    );
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('unlogged user', () => {
    it('render email field', async () => {
      const { getByTestId } = renderComponent();
      await waitFor(() => {
        const logoutButton = getByTestId(HeaderIds.LOGOUT_BUTTON)
        expect(logoutButton).toBeTruthy();
        fireEvent.click(logoutButton)
        expect(mockedNavigate).toHaveBeenCalledTimes(1);

      }
      );
  })
});

})