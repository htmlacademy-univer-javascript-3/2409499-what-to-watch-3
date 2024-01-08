import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

describe('Simple component: Spinner', () => {
  it('should render correctly', () => {
    render(<Spinner />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
