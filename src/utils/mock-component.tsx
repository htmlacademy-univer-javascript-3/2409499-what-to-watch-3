import { MemoryHistory, createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../components/history-router/history-router';
import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { State } from '../types/state';
import { createAPI } from '../services/api';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch } from '../store/api-actions.test';
import { AuthorizationStatus, NameSpace } from '../const';
import { film } from '../store/film-process/film-process.test';

export function withHistory(component: JSX.Element, history?: MemoryHistory) {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
}

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export function withStore(
  component: JSX.Element,
  initialState: Partial<State> = {},
): ComponentWithMockStore {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });
}

export const makeMockStore = (initialState?: Partial<State>): State => ({
  [NameSpace.User]: {
    authStatus: AuthorizationStatus.Unknown,
    user: null,
    error: null,
  },
  [NameSpace.Film]: {
    film: null,
    similarFilms: [],
    comments: [],
    isLoading: false,
    error: null,
  },
  [NameSpace.Data]: {
    films: [],
    promo: film,
    genre: 'All genres',
    isLoading: false,
    error: null,
    favoriteFilms: [],
    favoriteFilmsCount: 0,
  },
  ...initialState ?? {},
});

