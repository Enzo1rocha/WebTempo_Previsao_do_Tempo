import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/icons/icons'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import PasswordChange from './pages/PasswordChange'
import Layout from './components/layout/layout'
import PageNotFound from './pages/PageNotFound'
import { AuthProvider } from './context/authContext'
import PublicOnlyRoute from './components/authentications/PublicOnlyRoute'
import ProtectedRoute from './components/authentications/Protectedroute'
import LogoutPage from './pages/LogoutPage'
import SearchFavoriteLocation from './pages/SearchFavoriteLocation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProfilePage from './pages/ProfilePage'
import ForecastPage from './pages/ForecastPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import PasswordResetConfirmPage from './pages/PasswordResetConfirm'


const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <WelcomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage />},
      { path: '/register', element:(
        <PublicOnlyRoute>
          <RegisterPage />
        </PublicOnlyRoute>
      )},
      { path: '/login', element: (
        <PublicOnlyRoute>
          <LoginPage/>
        </PublicOnlyRoute>
      )},
      { path: '/forgot', element: (
        <PublicOnlyRoute>
          <ForgotPasswordPage />
        </PublicOnlyRoute>
      )},
      { path: '/forgot/password/reset/confirm/:token/:uid', element: (
        <PublicOnlyRoute>
          <PasswordResetConfirmPage />
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

      { path: '/user/profile', element: (
       <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
      )},
      { path: 'user/favorite/add', element: (
        <ProtectedRoute>
          <SearchFavoriteLocation />
        </ProtectedRoute>
      )},
      { path: '/forecast/:name/:country/:state/:lon/:lat', element: 
      <ProtectedRoute>
        <ForecastPage />
      </ProtectedRoute>}
    ]
  },
  { path: '*', element: <PageNotFound />}
])

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
)
 