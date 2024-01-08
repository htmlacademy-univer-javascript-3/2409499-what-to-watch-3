import { render, screen } from '@testing-library/react';
import { NameSpace } from '../../const';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import MyList from './my-list';
import { describe } from 'vitest';
import { films } from '../../store/data-process/data-process.test';

describe('Component: MyList page', () => {
  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<MyList/>), makeMockStore({
      [NameSpace.Data]: {
        films: films,
        promo: null,
        genre: 'All genres',
        error: null,
        favoriteFilms: films,
        favoriteFilmsCount: films.length,
        isLoading: false,
      }
    }));

    render(withStoreComponent);

    expect(screen.getByText(films[1].name)).toBeInTheDocument();
    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });
});
