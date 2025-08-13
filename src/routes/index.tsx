import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HookState from '../pages/HookState';
import HookEffect from '../pages/HookEffect';
import HookMemo from '../pages/HookMemo';

export const IndexRoutes= createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'state', element: <HookState /> },
      { path: 'effect', element: <HookEffect /> },
      { path: 'memo', element: <HookMemo /> },
    ],
  },
]);