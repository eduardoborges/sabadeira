import { UserState } from 'store/users/types';

export interface DomainState<D> {
  data: D;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  messages: string[];
}

export interface AppState {
  USERS: UserState;
}
