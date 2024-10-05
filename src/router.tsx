import {createBrowserRouter} from 'react-router-dom';
import Home from './pages/dashboard/Layout/pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
