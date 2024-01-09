import { describe } from 'vitest';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import MoviePage from './movie-page';
import { render, screen } from '@testing-library/react';
import { NameSpace } from '../../const';
import { comments, film, similarFilms } from '../../store/film-process/film-process.test';

describe('Component: Movie page', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<MoviePage/>), makeMockStore());

    render(withStoreComponent);

    expect(screen.queryByText(/not found/i)).toBeInTheDocument();
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<MoviePage/>), makeMockStore({
      [NameSpace.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        isLoading: false,
        error: null,
      }
    }));

    render(withStoreComponent);

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText(film.released)).toBeInTheDocument();
  });
});
