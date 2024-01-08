import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { fetchFilms, fetchPromo, checkAuth } from './store/api-actions';
import { store } from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchFilms());
store.dispatch(checkAuth());
store.dispatch(fetchPromo());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
