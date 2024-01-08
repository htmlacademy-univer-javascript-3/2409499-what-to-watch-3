import { describe } from 'vitest';
import { film } from '../../store/film-process/film-process.test';
import {render, screen} from '@testing-library/react';
import { Overview } from './overview';

describe('Simple component: Film overview tab', () => {
  it('should render correct', () => {
    const fields = [/ratings/, /Director/, /Starring/];

    render(
      <Overview
        film={film}
      />
    );

    for (const field of fields) {
      expect(screen.getByText(field)).toBeInTheDocument();
    }
  });
});
