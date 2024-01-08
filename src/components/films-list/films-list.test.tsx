import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { films } from '../../store/data-process/data-process.test';
import FilmsList from './films-list';
import { MemoryRouter } from 'react-router-dom';

describe('Component: Films list', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <FilmsList films={films}/>
      </MemoryRouter>
    );

    expect(screen.getByText(films[0].name)).toBeInTheDocument();
  });
});
