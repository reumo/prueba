import { UserStore } from '../domain/userStore';

type SetUserStore = Pick<UserStore, "setInvalidLogin">;

const setInvalidLoginUseCase = (
  store: SetUserStore,
  invalidLogin: boolean,
) => {
  store.setInvalidLogin(invalidLogin);
};

export { setInvalidLoginUseCase };