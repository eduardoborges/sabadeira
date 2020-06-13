import { DomainState } from 'store/types';

export interface User {
  uid: string;
  name: string;
  email: string;
}

export type UserState = DomainState<User[]>;
