import { describe } from 'vitest';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import UserBlock from './user-block';
import { render, screen } from '@testing-library/react';
import { AuthorizationStatus, NameSpace } from '../../const';
import { user } from '../../store/user-process/user-process.test';
import userEvent from '@testing-library/user-event';
import { extractActionsTypes } from '../../store/api-actions.test';
import { logout } from '../../store/api-actions';

describe('Component: User block', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<UserBlock/>), makeMockStore());

    render(withStoreComponent);

    expect(screen.queryByText(/sign in/i)).toBeInTheDocument();
  });

  it('should render user correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<UserBlock/>), makeMockStore({
      [NameSpace.User]: {
        user: user,
        authStatus: AuthorizationStatus.Auth,
        error: null,
      }
    }));

    render(withStoreComponent);

    expect(screen.queryByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should handle logout correctly', async () => {
    const {withStoreComponent, mockStore} = withStore(withHistory(<UserBlock/>), makeMockStore({
      [NameSpace.User]: {
        user: user,
        authStatus: AuthorizationStatus.Auth,
        error: null,
      }
    }));

    render(withStoreComponent);

    await userEvent.click(screen.getByText(/sign out/i));

    expect(extractActionsTypes(mockStore.getActions())).toEqual([
      logout.pending.type,
      logout.rejected.type
    ]);
  });
});
