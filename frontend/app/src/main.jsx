import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import ForgotPassword from './pages/ForgotPassword'
import UpdatePassword from './pages/updatePassword'
import WelcomePage from './pages/WelcomePage'
import NavBar from './components/NavBar'
import Layout from './components/layout/layout'
import PageNotFound from './pages/PageNotFound'
import { AuthProvider } from './context/authContext'
import PublicOnlyRoute from './components/authentications/PublicOnlyRoute'
import ProtectedRoute from './components/authentications/Protectedroute'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <WelcomePage /> },
      { path: '/register', element:(
        <PublicOnlyRoute>
          <Register />
        </PublicOnlyRoute>
      )},
      { path: '/navbar', element: <NavBar /> },
      { path: '/login', element: (
        <PublicOnlyRoute>
          <Login />
        </PublicOnlyRoute>
      )},
      { path: '/forgot', element: (
        <ProtectedRoute>
          <ForgotPassword />
        </ProtectedRoute>
      )},
      { path: '/forgot/updatePassword', element: <UpdatePassword /> },
    ]
  },
  { path: '*', element: <PageNotFound />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
 