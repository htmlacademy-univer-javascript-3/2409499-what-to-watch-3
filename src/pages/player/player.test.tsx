import { describe } from 'vitest';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import Player from './player';
import { render, screen } from '@testing-library/react';
import { NameSpace } from '../../const';
import { comments, film, similarFilms } from '../../store/film-process/film-process.test';
import userEvent from '@testing-library/user-event';

describe('Component: Player page', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<Player/>), makeMockStore({}));

    render(withStoreComponent);

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<Player/>), makeMockStore({
      [NameSpace.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        isLoading: false,
        error: null,
      }
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('player')).toBeInTheDocument();
    expect(screen.getByText('Exit')).toBeInTheDocument();
  });

  it('should pause correctly', async () => {
    const {withStoreComponent} = withStore(withHistory(<Player/>), makeMockStore({
      [NameSpace.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        isLoading: false,
        error: null,
      }
    }));

    HTMLMediaElement.prototype.play = vi.fn();

    render(withStoreComponent);

    await userEvent.click(screen.getByText('Pause'));

    expect(screen.getByTestId('player')).toBeInTheDocument();
    expect(screen.getByText('Pause')).toBeInTheDocument();
  });
});
