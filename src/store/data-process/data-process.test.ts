import { describe } from 'vitest';
import { changeGenre, dataProcess } from './data-process';
import { fetchFavoriteFilms, fetchFilms, fetchPromo, setFavorite } from '../api-actions';
import { Film } from '../../types/types';

export const films: Film[] = [
  {
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
  }, {
    id: '1',
    name: 'The Film',
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
    isFavorite: true,
  }
];

const film = films[0];

describe('General data process', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      films: [],
      promo: null,
      genre: 'All genres',
      isLoading: false,
      error: null,
      favoriteFilms: [],
      favoriteFilmsCount: 0,
    };

    const result = dataProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      films: [],
      promo: null,
      genre: 'All genres',
      isLoading: false,
      error: null,
      favoriteFilms: [],
      favoriteFilmsCount: 0,
    };

    const result = dataProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  describe('fetchFilms', () => {
    it('should return correct state with pending', () => {
      const expectedState = {
        films: [],
        promo: null,
        genre: 'All genres',
        isLoading: true,
        error: null,
        favoriteFilms: [],
        favoriteFilmsCount: 0,
      };

      const result = dataProcess.reducer(undefined, fetchFilms.pending);

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with fulfilled', () => {
      const expectedState = {
        films: films,
        promo: null,
        genre: 'All genres',
        isLoading: false,
        error: null,
        favoriteFilms: [],
        favoriteFilmsCount: 0,
      };

      const result = dataProcess.reducer(undefined, fetchFilms.fulfilled(films, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchPromo', () => {
    it('should return correct state with pending', () => {
      const expectedState = {
        films: [],
        promo: null,
        genre: 'All genres',
        isLoading: true,
        error: null,
        favoriteFilms: [],
        favoriteFilmsCount: 0,
      };

      const result = dataProcess.reducer(undefined, fetchPromo.pending);

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with fulfilled', () => {
      const expectedState = {
        films: [],
        promo: film,
        genre: 'All genres',
        isLoading: false,
        error: null,
        favoriteFilms: [],
        favoriteFilmsCount: 0,
      };

      const result = dataProcess.reducer(undefined, fetchPromo.fulfilled(film, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchFavoriteFilms', () => {
    it('should return correct state with fulfilled', () => {
      const expectedState = {
        films: [],
        promo: null,
        genre: 'All genres',
        isLoading: false,
        error: null,
        favoriteFilms: films,
        favoriteFilmsCount: films.length,
      };

      const result = dataProcess.reducer(undefined, fetchFavoriteFilms.fulfilled(films, '', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with rejected', () => {
      const error = {
        name: 'errorName',
        message: 'error'
      };
      const expectedState = {
        films: [],
        promo: null,
        genre: 'All genres',
        isLoading: false,
        error: error,
        favoriteFilms: [],
        favoriteFilmsCount: 0,
      };

      const result = dataProcess.reducer(undefined, fetchFavoriteFilms.rejected(error, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('setFavorite', () => {
    it('should add to favorite', () => {
      const expectedState = {
        films: [],
        promo: null,
        genre: 'All genres',
        isLoading: false,
        error: null,
        favoriteFilmsCount: 1,
        favoriteFilms: [],
      };

      const result = dataProcess.reducer(undefined, setFavorite.fulfilled(films[1], '', {
        filmId: '',
        status: false
      }));

      expect(result).toEqual(expectedState);
    });

    it('remove from favorite', () => {
      const initialState = {
        films: [],
        promo: null,
        genre: 'All genres',
        isLoading: false,
        error: null,
        favoriteFilmsCount: 1,
        favoriteFilms: [],
      };
      const expectedState = {
        films: [],
        promo: null,
        genre: 'All genres',
        isLoading: false,
        error: null,
        favoriteFilmsCount: 0,
        favoriteFilms: [],
      };

      const result = dataProcess.reducer(initialState, setFavorite.fulfilled(films.filter((f) => !f.isFavorite)[0], '', {
        filmId: '',
        status: true
      }));

      expect(result).toEqual(expectedState);
    });
  });

  it('should change genre with changeGenre', () => {
    const genre = 'Drama';
    const expectedState = {
      films: [],
      promo: null,
      genre: genre,
      isLoading: false,
      error: null,
      favoriteFilms: [],
      favoriteFilmsCount: 0,
    };

    const result = dataProcess.reducer(undefined, changeGenre(genre));

    expect(result).toEqual(expectedState);
  });
});
