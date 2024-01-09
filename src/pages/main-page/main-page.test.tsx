import { describe } from 'vitest';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import MainPage from './main-page';
import { NameSpace } from '../../const';
import { films } from '../../store/data-process/data-process.test';
import { film } from '../../store/film-process/film-process.test';
import { render, screen } from '@testing-library/react';


describe('Component: Main page', () => {
  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<MainPage/>), makeMockStore({
      [NameSpace.Data]: {
        films: films,
        genre: 'All genres',
        promo: film,
        isLoading: false,
        error: null,
        favoriteFilms: [],
        favoriteFilmsCount: 0,
      }
    }));

    render(withStoreComponent);

    expect(screen.getAllByText(film.name)[0]).toBeInTheDocument();
    expect(screen.getAllByText(film.genre)[0]).toBeInTheDocument();
    expect(screen.getByText(film.released)).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });
});
