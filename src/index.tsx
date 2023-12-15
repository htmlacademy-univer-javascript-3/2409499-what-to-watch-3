import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { fetchFilmsAction } from './store/api-actions';
import { store } from './store';
import { Provider } from 'react-redux';
import { Promo } from './types/types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const promoFilm: Promo = {
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  videoLink: '',
  genre: 'Drama',
  released: 2014,
  isFavorite: false
};

store.dispatch(fetchFilmsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoFilm={promoFilm}/>
    </Provider>
  </React.StrictMode>
);
