import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';
import { loginGet, loginPost, logout } from '../api-actions';

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
      .addCase(loginGet.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginGet.rejected, (state, action) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.error = action.payload ?? null;
      })
      .addCase(loginPost.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginPost.rejected, (state, action) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.error = action.payload ?? null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  }
})