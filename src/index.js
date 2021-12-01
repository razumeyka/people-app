import './wdyr';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { store } from './app/store';
import App from './App';
import './index.css';

import * as serviceWorker from './serviceWorker';

const theme = createTheme({
  palette: {
    primary: {
      main: '#39a6f3'
    },
    secondary: {
      main: '#a4a3a3',
    },
    deleteButton: {
      main: 'red',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
