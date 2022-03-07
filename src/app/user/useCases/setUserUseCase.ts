import { UserStore } from '../domain/userStore';

type SetUserStore = Pick<UserStore, "setUser">;

const setUserUseCase = (
  store: SetUserStore,
  email: string,
  token: string,
) => {
  store.setUser(email, token);
};

export { setUserUseCase };



