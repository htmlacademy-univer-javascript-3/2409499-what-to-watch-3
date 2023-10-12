import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  FilmName: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  FilmYear: 2014
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      filmName={Setting.FilmName}
      genre={Setting.Genre}
      filmYear={Setting.FilmYear}
    />
  </React.StrictMode>
);
