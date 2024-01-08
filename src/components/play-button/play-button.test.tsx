import { render, screen } from '@testing-library/react';
import PlayButton from './play-button';
import {MemoryRouter} from 'react-router-dom';
import { film } from '../../store/film-process/film-process.test';

describe('Component with routing: Play button', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <PlayButton filmId={film.id}/>
      </MemoryRouter>);
    expect(screen.getByText('Play')).toBeInTheDocument();
  });
});
