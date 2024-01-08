import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectUser = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].user;
export const selectAuthStatus = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].authStatus;
export const selectAuthError = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].error;
