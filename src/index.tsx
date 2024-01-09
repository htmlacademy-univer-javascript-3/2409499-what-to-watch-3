import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { fetchFilms, fetchPromo, checkAuth } from './store/api-actions';
import { store } from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import HistoryRouter from './components/history-router/history-router';
import { createBrowserHistory } from 'history';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchFilms());
store.dispatch(checkAuth());
store.dispatch(fetchPromo());

export const browserHistory = createBrowserHistory();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
        <ToastContainer />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
