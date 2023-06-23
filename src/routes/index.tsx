import {createBrowserRouter} from 'react-router-dom'

import App from 'App'
import Houses from 'components/Houses'
import House from 'components/House'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/houses',
    element: <Houses />,
  },
  {
    path: '/houses/:houseId',
    element: <House />,
  },
])
