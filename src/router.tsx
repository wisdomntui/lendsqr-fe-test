import {createBrowserRouter} from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout/AuthLayout';
import Login from './pages/auth/Login/Login';
import Layout from './pages/dashboard/Layout/Layout';
import Home from './pages/dashboard/pages/Home/Home';
import UserDetails from './pages/dashboard/pages/UserDetails/UserDetails';

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
      {
        path: '/user/:id',
        element: <UserDetails />,
      },
    ],
  },
]);
