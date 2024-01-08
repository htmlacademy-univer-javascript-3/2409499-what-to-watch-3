import { describe } from 'vitest';
import ShowMoreButton from './show-more-button';
import {render, screen} from '@testing-library/react';

describe('Simple component: Show more button', () => {
  it('should render correctly', () => {
    render(
      <ShowMoreButton
        setFilmsCount={vi.fn}
      />
    );

    expect(screen.getByText('Show more')).toBeInTheDocument();
  });
});
