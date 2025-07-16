import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/icons/icons'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import ForgotPassword from './pages/ForgotPassword'
import UpdatePassword from './pages/updatePassword'
import WelcomePage from './pages/WelcomePage'
import PasswordChange from './pages/PasswordChange'
import NavBar from './components/NavBar'
import Layout from './components/layout/layout'
import PageNotFound from './pages/PageNotFound'
import { AuthProvider } from './context/authContext'
import PublicOnlyRoute from './components/authentications/PublicOnlyRoute'
import ProtectedRoute from './components/authentications/Protectedroute'
import LogoutPage from './pages/LogoutPage'
import LocationsPage from './pages/LocationsPage'
import TestPage from './pages/testpage'


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
        <PublicOnlyRoute>
          <ForgotPassword />
        </PublicOnlyRoute>
      )},
      { path: '/forgot/updatePassword', element: (
        <PublicOnlyRoute>
          <UpdatePassword />
        </PublicOnlyRoute>
      )},
      { path: '/user/password/change', element: <PasswordChange />},
      { path: '/user/logout', element: <LogoutPage />},
      { path: '/locations', element: <LocationsPage /> },
      { path: '/test', element: <TestPage /> },
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
 