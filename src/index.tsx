import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import App from './app';

import ErrorBoundaryWrapper from './components/error-boundary-wrapper';

import './index.css';
import './react-datepicker.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundaryWrapper>
          <App />
        </ErrorBoundaryWrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
