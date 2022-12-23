import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import { RTL } from './themes/RTL';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './app/redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={<div>loading...</div>} persistor={persistor}>
      <RTL>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </RTL>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
