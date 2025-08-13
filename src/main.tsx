import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { IndexRoutes } from './routes/index.tsx';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={IndexRoutes} />
    </ThemeProvider>
  </React.StrictMode>
);
