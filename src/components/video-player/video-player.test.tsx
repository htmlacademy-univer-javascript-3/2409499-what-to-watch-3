import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {internet} from 'faker';
import { VideoPlayer } from './video-player';

describe('Component: Video player', () => {
  it('should render correctly', () => {

    render(<VideoPlayer src={internet.url()} muted autoPlay poster='img/the-grand-budapest-hotel-poster.jpg' width={200} height={200}/>);

    expect(screen.getByTestId('video-player')).toBeInTheDocument();
  });
});
