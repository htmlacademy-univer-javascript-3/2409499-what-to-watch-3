import { render, screen } from '@testing-library/react';
import Footer from './footer';
import {MemoryRouter} from 'react-router-dom';

describe('Component with routing: Footer', () => {
  it('should render correctly', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
  });
});
