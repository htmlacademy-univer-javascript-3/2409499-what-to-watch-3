import { describe } from 'vitest';
import { makeMockStore, withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import { Reviews } from './reviews';
import { comments } from '../../store/film-process/film-process.test';

describe('Component: Film reviews tab', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<Reviews reviews={comments}/>), makeMockStore());

    render(withStoreComponent);

    expect(screen.getByText(comments[0].user)).toBeInTheDocument();
  });
});
