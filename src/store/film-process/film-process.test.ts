import { describe } from 'vitest';
import { filmProcess } from './film-process';
import { fetchComments, fetchFilmByID, fetchSimilarFilms } from '../api-actions';
import { Comment, Film } from '../../types/types';

const film: Film = {
  id: '0',
  name: 'The Grand Budapest Hotel',
  previewImage: 'img/bg-the-grand-budapest-hotel.jpg',
  previewVideoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#000',
  videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
    'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\nGustave prides ' +
    'himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of ' +
    'the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds ' +
    'himself the recipient of a priceless painting and the chief suspect in her murder.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
  runTime: 99,
  genre: 'Drama',
  released: 2014,
  isFavorite: false,
};

const similarFilms: Film[] = [
  {
    id: '1',
    name: 'Film 1',
    previewImage: 'img/bg-the-grand-budapest-hotel.jpg',
    previewVideoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
    runTime: 99,
    genre: 'Drama',
    released: 2014,
    isFavorite: false,
  }, {
    id: '2',
    name: 'Film 2',
    previewImage: 'img/bg-the-grand-budapest-hotel.jpg',
    previewVideoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
    runTime: 99,
    genre: 'Drama',
    released: 2014,
    isFavorite: false,
  }
];

const comments: Comment[] = [{
  id: '0',
  comment: 'comment 1',
  user: 'user 1',
  rating: 1,
  date: '2010-12-11'
}, {
  id: '1',
  comment: 'comment 2',
  user: 'user 2',
  rating: 2,
  date: '2011-12-11'
}];

describe('Film process', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      film: null,
      similarFilms: [],
      comments: [],
      isLoading: false,
      error: null
    };

    const result = filmProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      film: null,
      similarFilms: [],
      comments: [],
      isLoading: false,
      error: null
    };

    const result = filmProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  describe('fetchFilmByID', () => {
    it('should return correct state with pending', () => {
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        isLoading: true,
        error: null
      };

      const result = filmProcess.reducer(undefined, fetchFilmByID.pending);

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with fulfilled', () => {
      const expectedState = {
        film: film,
        similarFilms: [],
        comments: [],
        isLoading: false,
        error: null
      };

      const result = filmProcess.reducer(undefined, fetchFilmByID.fulfilled(film, '', ''));

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with rejected', () => {
      const error = {
        name: 'errorName',
        message: 'error'
      };
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        isLoading: false,
        error: error
      };

      const result = filmProcess.reducer(undefined, fetchFilmByID.rejected(error, '', '0'));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchSimilarFilms', () => {
    it('should return correct state with pending', () => {
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        isLoading: true,
        error: null
      };

      const result = filmProcess.reducer(undefined, fetchSimilarFilms.pending);

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with fulfilled', () => {
      const expectedState = {
        film: null,
        similarFilms: similarFilms,
        comments: [],
        isLoading: false,
        error: null
      };

      const result = filmProcess.reducer(undefined, fetchSimilarFilms.fulfilled(similarFilms, '', '0'));

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with rejected', () => {
      const error = {
        name: 'errorName',
        message: 'error'
      };
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        isLoading: false,
        error: error
      };

      const result = filmProcess.reducer(undefined, fetchSimilarFilms.rejected(error, '', '0'));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchComments', () => {
    it('should return correct state with pending', () => {
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        isLoading: true,
        error: null
      };

      const result = filmProcess.reducer(undefined, fetchComments.pending);

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with fulfilled', () => {
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: comments,
        isLoading: false,
        error: null
      };

      const result = filmProcess.reducer(undefined, fetchComments.fulfilled(comments, '', '0'));

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with rejected', () => {
      const error = {
        name: 'errorName',
        message: 'error'
      };
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        isLoading: false,
        error: error
      };

      const result = filmProcess.reducer(undefined, fetchComments.rejected(error, '', '0'));

      expect(result).toEqual(expectedState);
    });
  });
});
