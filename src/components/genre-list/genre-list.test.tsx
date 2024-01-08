import { MemoryHistory, createMemoryHistory } from 'history';
import { describe } from 'vitest';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import GenreList from './genre-list';
import { render, screen } from '@testing-library/react';
import { film } from '../../store/film-process/film-process.test';
import { films } from '../../store/data-process/data-process.test';
import { NameSpace } from '../../const';

describe('Component: Genre list', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<GenreList />, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeMockStore({
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

    expect(screen.getByText('All genres')).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
  });
});
