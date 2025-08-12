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
import Layout from './components/layout/layout'
import PageNotFound from './pages/PageNotFound'
import { AuthProvider } from './context/authContext'
import PublicOnlyRoute from './components/authentications/PublicOnlyRoute'
import ProtectedRoute from './components/authentications/Protectedroute'
import LogoutPage from './pages/LogoutPage'
import LocationsPage from './pages/LocationsPage'
import SearchFavoriteLocation from './pages/SearchFavoriteLocation'
import ChangeBootLocation from './components/ChangeBootLocation'
import ForecastPage from './pages/ForecastPage'


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

      { path: '/user/password/change', element: (
        <ProtectedRoute>
          <PasswordChange />
        </ProtectedRoute>
      )},
      { path: '/user/logout', element: (
        <ProtectedRoute>
          <LogoutPage />
        </ProtectedRoute>
      )},

      { path: '/user/favorite', element: (
       <ProtectedRoute>
        <LocationsPage />
      </ProtectedRoute>
      )},
      { path: 'user/favorite/add', element: (
        <ProtectedRoute>
          <SearchFavoriteLocation />
        </ProtectedRoute>
      )},
      { path: '/test', element: <ForecastPage />}
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
 