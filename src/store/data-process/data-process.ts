import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataProcess } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchFilmsAction, fetchPromo } from '../api-actions';

const initialState: DataProcess = {
  films: [],
  promo: null,
  genre: 'All genres',
  isLoading: false,
  error: null
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPromo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isLoading = false;
      });
  },
});

export const { changeGenre } = dataProcess.actions;
