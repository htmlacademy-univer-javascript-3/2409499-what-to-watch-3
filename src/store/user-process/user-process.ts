import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';
import { checkAuth, login, logout } from '../api-actions';

const initialState: UserProcess = {
  authStatus: AuthorizationStatus.Unknown,
  user: null,
  error: null
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.error = action.payload ?? null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.error = action.payload ?? null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.error = null;
      });
  }
});
