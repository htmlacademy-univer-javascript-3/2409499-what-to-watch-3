import { describe } from 'vitest';
import { Details } from './details';
import { film } from '../../store/film-process/film-process.test';
import {render, screen} from '@testing-library/react';


describe('Simple component: Film details tab', () => {
  it('should render correctly', () => {
    const fields = ['Director', 'Starring', 'Run Time', 'Genre', 'Released'];

    render(
      <Details
        film={film}
      />
    );

    for (const field of fields) {
      expect(screen.getByText(field)).toBeInTheDocument();
    }
  });
});
