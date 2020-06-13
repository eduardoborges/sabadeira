import { createAction } from 'typesafe-actions';

export const createUser = createAction('CREATE_USER')<{
  name: string;
  email: string;
}>();
