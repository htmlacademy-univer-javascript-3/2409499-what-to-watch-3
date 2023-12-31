import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { fetchFilmsAction, fetchPromo, loginGet } from './store/api-actions';
import { store } from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchFilmsAction());
store.dispatch(loginGet());
store.dispatch(fetchPromo());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
