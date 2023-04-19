import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { makeServer } from './server';
import { store, persistor } from './store/store';
import { ThemeContextProvider } from './context/ThemeContext/ThemeContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Call make Server
makeServer();
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
