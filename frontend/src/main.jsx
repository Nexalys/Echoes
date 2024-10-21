// Functional imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Provider Imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';

// Page imports
import Home from './pages/Home.jsx';
import Root from './pages/Root.jsx';
import Error from "./pages/Error.jsx";
import Editor from "./pages/Editor.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from './pages/Profile.jsx';
import SignIn from './pages/SignIn.jsx';
import Blog from './pages/Blog.jsx';

// CSS/Style Imports
import './index.css';

const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children : [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/Blog',
                element: <Blog/>
            },
        ]
    },
    {
        path: '/edit',
        element: <Editor/>,
        errorElement: <Error/>
    },
    {
        path: '/sign-up',
        element: <SignUp/>,
        errorElement: <Error/>
    },
    {
        path: '/sign-in',
        element: <SignIn/>,
        errorElement: <Error/>
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider
            attribute="data-theme"
            defaultTheme="dark"
        >
            <RouterProvider router={mainRouter}/>
        </ThemeProvider>
    </StrictMode>
);