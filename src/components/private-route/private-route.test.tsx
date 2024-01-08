import { MemoryHistory, createMemoryHistory } from 'history';
import { describe } from 'vitest';
import { withHistory } from '../../utils/mock-component';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './private-route';
import { AuthorizationStatus } from '../../const';
import { render, screen } from '@testing-library/react';

describe('Component: Private route', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push('/mylist');
  });

  it('should render component for public route when user not authorized', () => {
    const publicText = 'public route';
    const privateText = 'private route';
    const component = withHistory(
      <Routes>
        <Route path={'/login'} element={<span>{publicText}</span>} />
        <Route path={'/mylist'} element={
          <PrivateRoute authStatus={AuthorizationStatus.NoAuth}>
            <span>{privateText}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      mockHistory
    );

    render(component);

    expect(screen.getByText(publicText)).toBeInTheDocument();
    expect(screen.queryByText(privateText)).not.toBeInTheDocument();
  });

  it('should render component for private route when user authorized', () => {
    const publicText = 'public route';
    const privateText = 'private route';
    const component = withHistory(
      <Routes>
        <Route path={'/login'} element={<span>{publicText}</span>} />
        <Route path={'/mylist'} element={
          <PrivateRoute authStatus={AuthorizationStatus.Auth}>
            <span>{privateText}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      mockHistory
    );

    render(component);

    expect(screen.getByText(privateText)).toBeInTheDocument();
    expect(screen.queryByText(publicText)).not.toBeInTheDocument();
  });
});
