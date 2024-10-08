import {createBrowserRouter} from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout/AuthLayout';
import Login from './pages/auth/Login/Login';
import Layout from './pages/dashboard/Layout/Layout';
import {Home} from './components/Icon/icons';

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
