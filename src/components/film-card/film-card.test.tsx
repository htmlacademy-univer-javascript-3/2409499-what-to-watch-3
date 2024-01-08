import { MemoryHistory, createMemoryHistory } from 'history';
import { describe } from 'vitest';
import { withHistory } from '../../utils/mock-component';
import FilmCard from './film-card';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { film } from '../../store/film-process/film-process.test';

describe('Component: Film card', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<FilmCard film={film} isHovered={false} onMouseEnter={() => 0} onMouseLeave={() => 0}/>, mockHistory);

    render(withHistoryComponent);

    expect(screen.getByText(film.name)).toBeInTheDocument();
  });

  it('should handle click correctly', async () => {
    const withHistoryComponent = withHistory(<FilmCard film={film} isHovered={false} onMouseEnter={() => 0} onMouseLeave={() => 0}/>, mockHistory);

    render(withHistoryComponent);

    await userEvent.click(
      screen.getByRole('link')
    );
    expect(mockHistory.location.pathname).toBe('/films/0');
  });
});
