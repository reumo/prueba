import { fireEvent, render, waitFor } from '@testing-library/react';
import { mocked } from 'jest-mock';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { appStoreImplementation } from '../../../main/data/appStoreImplementation';
import { login } from '../../data/userService';
import { UserViewIds } from '../UserTestIds';
import UserView from '../UserView';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));

jest.mock('../../data/userService');
const mockedLogin = mocked(login, true);

export const mockedLoginResponse = { token: 'token' };
describe('UserView', () => {
  const renderComponent = () =>
    render(
      <Provider store={appStoreImplementation}>
        <MemoryRouter initialEntries={[`/`]}>
          <Routes>
            <Route path="/" element={<UserView />}>
            </Route>
          </Routes >
        </MemoryRouter>
      </Provider>
    );

  beforeEach(() => {
    mockedLogin.mockResolvedValue(mockedLoginResponse as any);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('unlogged user', () => {
    it('render email field', async () => {
      const { getByTestId } = renderComponent();
      await waitFor(() =>
        expect(getByTestId(UserViewIds.EMAIL_FIELD)).toBeTruthy()
      );
  })
  it('render email field', async () => {
    const { getByTestId } = renderComponent();
    await waitFor(() =>
      expect(getByTestId(UserViewIds.PASSWORD_FIELD)).toBeTruthy()
    );
  })

  it('click button', async () => {
    const { getByTestId } = renderComponent();
    await waitFor(() => {
      getByTestId('submit')
      expect(getByTestId('submit')).toBeTruthy();
      const emailField = getByTestId(UserViewIds.EMAIL_FIELD);
      const passwordField = getByTestId(UserViewIds.PASSWORD_FIELD);
      fireEvent.change(emailField, { target: { value: 'aa@aa.com' } })
      fireEvent.change(passwordField, { target: { value: 'bbbbb' } })
      const button = getByTestId('submit');
      fireEvent.click(button)
      expect(mockedNavigate).toHaveBeenCalledTimes(1);
    });
  })
});

})