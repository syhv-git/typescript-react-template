import React from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Landing from './Pages/Landing/Landing';
import Products from './Pages/Products/Products';
import FAQ from './Pages/FAQ/FAQ';
import SignIn from './Pages/SignIn/SignIn';
import { Register } from './Pages/Register/Register';
import Dashboard from "./Pages/Dashboard/Dashboard";
import useMediaQuery from '@mui/material/useMediaQuery';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import GlobalReducer from './GlobalUtility/Reducer';
import { GlobalStateActions, SessionProps } from './GlobalUtility/Constants';
import { GetTheme } from "./GlobalUtility/Themes";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <NavBar />,
        children: [
            {
                path: '/',
                element: [
                    <Landing />,
                    <Footer />,
                ]
            },
            {
                path: 'products',
                element: [
                    <Products />,
                    <Footer />,
                ]
            },
            {
                path: 'FAQs',
                element: [
                    <FAQ />,
                    <Footer />,
                ]
            },
            {
                path: 'dashboard',
                element: [
                    <Dashboard />,
                    <Footer />,
                ]
            },
        ]
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/register',
        element: <Register />,
    },
];

const router = createBrowserRouter(routes);

export default function App() {
    const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
    SessionProps.theme = GetTheme(mode)

    const [state, dispatch] = React.useReducer(GlobalReducer, SessionProps);

    return (
        <GlobalStateActions.ThemeContext.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={state.theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </GlobalStateActions.ThemeContext.Provider>
    );
}
