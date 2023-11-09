import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      mainProps={{
        film: films[0],
        details: films[0].details
      }}
      films={films}
    />
  </React.StrictMode>
);
