import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NavLayout from './layout/NavLayout'
import Demo from './pages/Demo'
import './util.scss'
import { Business, Learn } from './pages/AllPages'
import Signin from './pages/Signin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout  />,
    children: [
      {
        path: '/',
        element: <Home  />
      },
      {
        path: '/business',
        element: <Business  />
      },
      {
        path: '/learn',
        element: <Learn  />
      },
      {
        path: '/sign-in',
        element: <Signin />
      },
      {
        path: '/demo',
        element: <Demo  />
      },
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router}  />
  )
}

export default App
