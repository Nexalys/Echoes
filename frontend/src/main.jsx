import React from 'react'
import ReactDOM from 'react-dom/client'
import { Homepage } from './pages/echoes/page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  }, 
  {
    path: '/sign-up',
    element: <Homepage />, 
  }
]);
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
