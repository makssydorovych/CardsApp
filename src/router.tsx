import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

// import { Header } from '@/components/ui/header'
import { Decks } from '@/pages/decks/decks.tsx'
import { Login } from '@/pages/login/login.tsx'
import { useGetDecksQuery } from '@/services/decks'
import {Header} from "@/components/ui/header";

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Decks />,
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
      {
        path: '*',
        element: <h1>Not Found</h1>,
      },
    ],
  },
])

export const Router = () => {
  const { isLoading, isError } = useGetDecksQuery()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

function Layout() {
  return (
    <div>
      <Header variant={'with avatar'} />
      <Outlet />
    </div>
  )
}
