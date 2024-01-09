import { createMemoryHistory } from 'history';
import { describe } from 'vitest';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import SignIn from './sign-in';
import { AuthorizationStatus, NameSpace } from '../../const';
import { user } from '../../store/user-process/user-process.test';
import { render, screen } from '@testing-library/react';

describe('Component: Sign in page', () => {
  it('should redirect correctly', () => {
    const mockHistory = createMemoryHistory();
    const {withStoreComponent} = withStore(withHistory(<SignIn/>, mockHistory), makeMockStore({
      [NameSpace.User]: {
        authStatus: AuthorizationStatus.Auth,
        user: user,
        error: null,
      }
    }));

    render(withStoreComponent);

    expect(mockHistory.location.pathname).toBe('/');
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<SignIn/>), makeMockStore());

    render(withStoreComponent);

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
