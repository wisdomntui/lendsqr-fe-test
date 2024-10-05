import {createBrowserRouter} from 'react-router-dom';
import Home from './pages/dashboard/Layout/pages/Home';
import AuthLayout from './pages/auth/AuthLayout/AuthLayout';
import Login from './pages/auth/Login/Login';

export const router = createBrowserRouter([
  // Auth pages
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },

  // Dashboard pages
  {
    path: '/',
    element: <Home />,
  },
]);
