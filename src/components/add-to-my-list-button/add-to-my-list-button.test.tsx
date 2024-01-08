import { MemoryHistory, createMemoryHistory } from 'history';
import { describe } from 'vitest';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import AddToMyListButton from './add-to-my-list-button';

describe('Component: My list button', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<AddToMyListButton filmId="0" isFavorite={false}/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeMockStore());

    render(withStoreComponent);

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByTestId('add')).toBeInTheDocument();
  });

  it('should render correctly isFavorite', () => {
    const withHistoryComponent = withHistory(<AddToMyListButton filmId="0" isFavorite/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeMockStore());

    render(withStoreComponent);

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByTestId('in-list')).toBeInTheDocument();
  });
});
