import { MemoryHistory, createMemoryHistory } from 'history';
import { describe } from 'vitest';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import { AddReviewForm } from './add-review-form';
import { NameSpace } from '../../const';
import { comments, film, similarFilms } from '../../store/film-process/film-process.test';
import { render, screen } from '@testing-library/react';

describe('Component: Add review form', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<AddReviewForm filmId="0"/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeMockStore({
      [NameSpace.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        isLoading: false,
        error: null,
      }
    }));

    render(withStoreComponent);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toBe(10);
  });
});
