import { createBrowserRouter } from 'react-router-dom'
import { App } from './app'
import { Home } from './pages/home'
import { Cart } from './pages/cart'
import { Success } from './pages/success'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/:orderId/success',
        element: <Success />,
      },
    ],
  },
])
