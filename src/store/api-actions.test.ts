import { describe } from 'vitest';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { State } from '../types/state';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { checkAuth, commentPost, fetchComments, fetchFavoriteFilms, fetchFilmByID, fetchFilms, fetchPromo, fetchSimilarFilms, login, logout, setFavorite } from './api-actions';
import { films } from './data-process/data-process.test';
import { comments, film, similarFilms } from './film-process/film-process.test';

type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
const extractActionsTypes = (actions: Action<string>[]) => actions.map(({type}) => type);


describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({});
  });

  describe('fetchFilms', () => {
    it('should dispatch pending and fulfilled when server response 200', async () => {
      mockAxiosAdapter.onGet('/films').reply(200, films);

      await store.dispatch(fetchFilms());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFilms.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFilms.pending.type,
        fetchFilms.fulfilled.type,
      ]);

      expect(fetchFilmsActionFulfilled.payload)
        .toEqual(films);
    });

    it('should dispatch pending and rejected when server response 400', async () => {
      mockAxiosAdapter.onGet('/films').reply(401, []);

      await store.dispatch(fetchFilms());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilms.pending.type,
        fetchFilms.rejected.type,
      ]);
    });
  });

  describe('fetchFilmByID', () => {
    const id = '0';
    it('should dispatch "fetchFilm.pending", "fetchFilm.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet(`/films/${id}`).reply(200, film);

      await store.dispatch(fetchFilmByID(id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFilmByID.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFilmByID.pending.type,
        fetchFilmByID.fulfilled.type,
      ]);

      expect(fetchFilmActionFulfilled.payload)
        .toEqual(film);
    });

    it('should dispatch "fetchFilm.pending", "fetchFilm.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`/films/${id}`).reply(400, null);

      await store.dispatch(fetchFilmByID(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilmByID.pending.type,
        fetchFilmByID.rejected.type,
      ]);
    });
  });

  describe('checkAuth', () => {
    it('should dispatch pending and fullfilled with checkAuth', async () => {
      mockAxiosAdapter.onGet('/login').reply(200);

      await store.dispatch(checkAuth());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuth.pending.type,
        checkAuth.fulfilled.type,
      ]);
    });

    it('should dispatch pending and rejected when server response 400', async () => {
      mockAxiosAdapter.onGet('/login').reply(401);

      await store.dispatch(checkAuth());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuth.pending.type,
        checkAuth.rejected.type,
      ]);
    });
  });

  describe('login', () => {
    it('should dispatch login when POST /login', async () => {
      mockAxiosAdapter.onPost('/login').reply(200, { token: 'token' });

      await store.dispatch(login({ email: '123@gmail.com', password: '123ad' }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        login.pending.type,
        login.fulfilled.type
      ]);
    });
  });

  describe('logout', () => {
    it('should dispatch "logout.pending", "logout.fullfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete('/logout').reply(204);

      await store.dispatch(logout());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logout.pending.type,
        logout.fulfilled.type
      ]);
    });
  });

  describe('fetchPromo', () => {
    it('should dispatch "fetchPromo.pending", "fetchPromo.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet('/promo').reply(200, film);

      await store.dispatch(fetchPromo());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchPromoActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchPromo.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchPromo.pending.type,
        fetchPromo.fulfilled.type,
      ]);

      expect(fetchPromoActionFulfilled.payload)
        .toEqual(film);
    });

    it('should dispatch "fetchPromo.pending", "fetchPromo.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet('/promo').reply(500, null);

      await store.dispatch(fetchPromo());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchPromo.pending.type,
        fetchPromo.rejected.type,
      ]);
    });
  });

  describe('fetchComments', () => {
    const id = '0';
    it('should dispatch "fetchComments.pending", "fetchComments.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet(`/comments/${id}`).reply(200, comments);

      await store.dispatch(fetchComments(id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCommentsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchComments.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchComments.pending.type,
        fetchComments.fulfilled.type,
      ]);

      expect(fetchCommentsActionFulfilled.payload)
        .toEqual(comments);
    });

    it('should dispatch "fetchComments.pending", "fetchComments.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`/comments/${id}`).reply(400, null);

      await store.dispatch(fetchComments(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchComments.pending.type,
        fetchComments.rejected.type,
      ]);
    });
  });

  describe('fetchSimilarFilms', () => {
    const id = '0';
    it('should dispatch "fetchSimilar.pending", "fetchSimilar.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet(`/films/${id}/similar`).reply(200, similarFilms);

      await store.dispatch(fetchSimilarFilms(id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchSimilarActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchSimilarFilms.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchSimilarFilms.pending.type,
        fetchSimilarFilms.fulfilled.type,
      ]);

      expect(fetchSimilarActionFulfilled.payload)
        .toEqual(similarFilms);
    });

    it('should dispatch "fetchSimilar.pending", "fetchSimilar.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`/films/${id}/similar`).reply(400, null);

      await store.dispatch(fetchSimilarFilms(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSimilarFilms.pending.type,
        fetchSimilarFilms.rejected.type,
      ]);
    });
  });

  describe('commentPost', () => {
    it('should dispatch "commentPost.pending", "commentPost.fullfilled" when server response 200', async () => {
      const postData = {
        filmId: '1',
        commentRequest: {
          comment: 'comment',
          rating: 8,
        }
      };

      mockAxiosAdapter
        .onPost(`/comments/${postData.filmId}`, {
          comment: postData.commentRequest.comment,
          rating: postData.commentRequest.rating
        })
        .reply(200);


      await store.dispatch(commentPost(postData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        commentPost.pending.type,
        commentPost.fulfilled.type
      ]);
    });
  });

  describe('fetchFavoriteFilms', () => {
    it('should dispatch "fetchFavorite.pending", "fetchFavorite.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet('/favorite').reply(200, films);

      await store.dispatch(fetchFavoriteFilms());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoriteActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoriteFilms.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteFilms.pending.type,
        fetchFavoriteFilms.fulfilled.type,
      ]);

      expect(fetchFavoriteActionFulfilled.payload)
        .toEqual(films);
    });

    it('should dispatch "fetchFavorite.pending", "fetchFavorite.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet('/favorite').reply(400, null);

      await store.dispatch(fetchFavoriteFilms());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteFilms.pending.type,
        fetchFavoriteFilms.rejected.type,
      ]);
    });
  });

  describe('setFavorite', () => {
    it('should dispatch "setFavorite.pending", "setFavorite.fulfilled" when server response 200', async () => {
      const postData = {
        filmId: '1',
        status: true
      };

      mockAxiosAdapter.onPost('/favorite/1/1').reply(200);

      await store.dispatch(setFavorite(postData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        setFavorite.pending.type,
        setFavorite.fulfilled.type
      ]);
    });
  });
});
