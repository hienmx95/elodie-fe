import React from 'react';
import App from 'App';
import { i18nextConfig } from 'core/config';
import i18next from 'i18next';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { routes } from 'config/routes';
import * as serviceWorker from './serviceWorker';

Promise.all([i18next.use(initReactI18next).init(i18nextConfig)]).then(() => {
    ReactDOM.render(
      <BrowserRouter>
        <App routes={routes} />
      </BrowserRouter>,
      document.getElementById('stoon'),
    );
  });
  
  serviceWorker.unregister();