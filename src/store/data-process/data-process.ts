import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataProcess } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchFavoriteFilms, fetchFilmsAction, fetchPromo, setFavorite } from '../api-actions';

const initialState: DataProcess = {
  films: [],
  promo: null,
  genre: 'All genres',
  isLoading: false,
  error: null,
  favoriteFilms: [],
  favoriteFilmsCount: 0,
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
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteFilmsCount = action.payload.length;
      })
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.favoriteFilms = [];
        state.favoriteFilmsCount = 0;
      })
      .addCase(setFavorite.fulfilled, (state, action) => {
        if (state.promo && action.payload.id === state.promo.id) {
          state.promo = action.payload;
        }
        state.favoriteFilmsCount += action.payload.isFavorite ? 1 : -1;
      });
  },
});

export const { changeGenre } = dataProcess.actions;
