import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NavLayout from './layout/NavLayout'
import Demo from './pages/Demo'
import './util.scss'
import { Business, Learn } from './pages/AllPages'

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
