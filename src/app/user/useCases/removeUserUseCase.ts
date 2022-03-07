import { UserStore } from '../domain/userStore';

type RemoveUserStore = Pick<UserStore, "removeUser">;

const removeUserUseCase = (
  store: RemoveUserStore,
) => {
  store.removeUser();
};

export { removeUserUseCase };



