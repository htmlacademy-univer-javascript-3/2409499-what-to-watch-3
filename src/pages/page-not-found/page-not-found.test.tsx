import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import PageNotFound from './page-not-found';
import { withHistory } from '../../utils/mock-component';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('Component: Page not found', () => {
  it('should render correct', () => {
    render(withHistory(
      <PageNotFound/>
    ));

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect correct', async () => {
    const mockHistory = createMemoryHistory();
    render(withHistory(<PageNotFound/>, mockHistory));

    await userEvent.click(screen.getByRole('link'));
    expect(mockHistory.location.pathname).toBe('/');
  });
});
