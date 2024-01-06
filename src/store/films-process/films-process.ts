import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchFilmByID, fetchFilmsAction } from '../api-actions';
import { FilmProcess } from '../../types/state';

const initialState: FilmProcess = {
  films: [],
  activeFilm: null,
  promoFilm: null,
  similarFilms: [],
  isLoading: false,
  hasError: false,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchFilmsAction.fulfilled, (state, action) => {
      state.films = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchFilmsAction.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    })
    .addCase(fetchFilmsAction.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    })
    .addCase(fetchFilmByID.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    })
    .addCase(fetchFilmByID.fulfilled, (state, action) => {
      state.activeFilm = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchFilmByID.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    })
  }
})