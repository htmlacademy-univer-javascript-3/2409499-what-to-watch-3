import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchFilmByID, fetchComments, fetchSimilarFilms } from '../api-actions';
import { FilmProcess } from '../../types/state';

const initialState: FilmProcess = {
  film: null,
  similarFilms: [],
  comments: [],
  isLoading: false,
  error: null,
};

export const filmProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchFilmByID.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchFilmByID.fulfilled, (state, action) => {
      state.film = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchFilmByID.rejected, (state, action) => {
      state.isLoading = false;
      state.film = null;
      state.error = action.error;
    })
    .addCase(fetchComments.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    })
    .addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false;
      state.comments = [];
      state.error = action.error;
    })
    .addCase(fetchSimilarFilms.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.similarFilms = action.payload;
    })
    .addCase(fetchSimilarFilms.rejected, (state, action) => {
      state.isLoading = false;
      state.similarFilms = [];
      state.error = action.error;
    });
  }
})