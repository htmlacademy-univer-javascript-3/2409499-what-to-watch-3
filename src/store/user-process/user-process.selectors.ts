import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectUser = (state: State) => state[NameSpace.User].user;
export const selectAuthStatus = (state: State) => state[NameSpace.User].authStatus;
export const selectAuthError = (state: State) => state[NameSpace.User].error;
