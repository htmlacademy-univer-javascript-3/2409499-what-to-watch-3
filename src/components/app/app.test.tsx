import { MemoryHistory, createMemoryHistory } from 'history';
import { describe } from 'vitest';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import App from './app';
import { render, screen } from '@testing-library/react';
import { AuthorizationStatus, NameSpace } from '../../const';
import { user } from '../../store/user-process/user-process.test';
import { comments, film, similarFilms } from '../../store/film-process/film-process.test';

describe('Application', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeMockStore());
    mockHistory.push('/');

    render(withStoreComponent);

    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it('should render "SignIn" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeMockStore());
    mockHistory.push('/login');

    render(withStoreComponent);

    expect(screen.getAllByText('Sign in').length).toBe(2);
    expect(screen.getByText('Email address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('should render "MyList" when user navigate to "/mylist"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeMockStore({
      [NameSpace.User]: {
        authStatus: AuthorizationStatus.Auth,
        user: user,
        error: null,
      }
    }));
    mockHistory.push('/mylist');

    render(withStoreComponent);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it('should render "MoviePage" when user navigate to "/films/{id}"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeMockStore({
      [NameSpace.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        isLoading: false,
        error: null,
      }
    }));
    mockHistory.push(`/films/${film.id}`);

    render(withStoreComponent);

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText(film.released)).toBeInTheDocument();
  });

  it('should render "AddReviewPage" when user navigate to "/films/{id}/review"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeMockStore({
      [NameSpace.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        isLoading: false,
        error: null,
      },
      [NameSpace.User]: {
        user: null,
        authStatus: AuthorizationStatus.Auth,
        error: null,
      }
    }));
    mockHistory.push(`/films/${film.id}/review`);

    render(withStoreComponent);

    expect(screen.getByText('Add review')).toBeInTheDocument();
  });

  it('should render "Player" when user navigate to "/player/{id}"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeMockStore({
      [NameSpace.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        isLoading: false,
        error: null,
      }
    }));
    mockHistory.push(`/player/${film.id}`);

    render(withStoreComponent);

    expect(screen.getByTestId('player')).toBeInTheDocument();
  });

  it('should render "PageNotFound" when user navigate to unknown route', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeMockStore());
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
