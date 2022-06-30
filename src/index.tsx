import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';
import App from './App';
import { store } from './redux';
import theme from './theme';
import './auth/firebase-config';

const isTouchDevice = () => {
  if ('ontouchstart' in window) {
    return true;
  }
  return false;
};

const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DndProvider backend={isMobile ? TouchBackend : backendForDND}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </Provider>
      </DndProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
