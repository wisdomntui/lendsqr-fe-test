import {createBrowserRouter} from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout/AuthLayout';
import Login from './pages/auth/Login/Login';
import Home from './pages/dashboard/pages/Home';
import Layout from './pages/dashboard/Layout/Layout';

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
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
