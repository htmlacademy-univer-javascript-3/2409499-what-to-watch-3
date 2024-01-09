import { describe } from 'vitest';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import AddReview from './add-review';
import { render, screen } from '@testing-library/react';
import { AuthorizationStatus, NameSpace } from '../../const';
import { comments, film, similarFilms } from '../../store/film-process/film-process.test';

describe('Component: Add review page', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<AddReview/>), makeMockStore());

    render(withStoreComponent);

    expect(screen.queryByText(/not found/i)).toBeInTheDocument();
  });

  it('should render login correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<AddReview/>), makeMockStore({
      [NameSpace.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        isLoading: false,
        error: null
      }}));

    render(withStoreComponent);

    expect(screen.queryByText(/sign in/i)).toBeInTheDocument();
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<AddReview/>), makeMockStore({
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

    render(withStoreComponent);

    expect(screen.getByText('Add review')).toBeInTheDocument();
  });
});
