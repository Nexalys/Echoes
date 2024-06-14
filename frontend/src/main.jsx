import React from 'react'
import ReactDOM from 'react-dom/client'
import { Homepage } from './pages/echoes/page'
import {Home} from "./pages/home/Home"
import { ProfilePage } from './pages/profilepage/ProfilePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MarkdownEditor } from './pages/markdown-page/markdown-page';
import { ProfilePage } from './pages/profilepage/ProfilePage';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProfilePage />
  }, 
  {
    path: '/sign-up',
    element: <Homepage />, 
  }, 
  {
    path: '/markdown',
    element: <MarkdownEditor />
  }, 
  {
    path: '/profile',
    element: <ProfilePage />
  }
]);
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
