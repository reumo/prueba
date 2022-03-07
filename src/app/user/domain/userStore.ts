// punkBeerStore.ts
import type { User } from "./userEntity";

interface UserStore {
  // State
  email: string | undefined;
  token: string | undefined;
  invalidLogin: boolean | undefined;
  login(user: User, email: string, password: string): Promise<string>;
  setUser(email: string, token: string): string;
  removeUser(): void;
  setInvalidLogin(invalidLogin: boolean): void;
}

export type { UserStore };
