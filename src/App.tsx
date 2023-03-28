import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { Landing } from './Pages/Landing/Landing';
import { Products } from './Pages/Products/Products';
import { FAQ } from './Pages/FAQ/FAQ';
import { Loading } from './Pages/Loading/Loading';
import { Footer } from './Components/Footer/Footer';
import { NotFound } from './Pages/Error/NotFound';
import { ThemeProvider } from '@mui/material';
import { GlobalReducer } from './GlobalUtility/Reducer';
import { GlobalActions, SessionProps } from './GlobalUtility/Constants';

const router = createBrowserRouter([
    {
        element: <NavBar />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Landing />,
            },
            {
                path: 'products',
                element: <Products />,
                errorElement: <NotFound />,
            },
            {
                path: 'FAQs',
                element: <FAQ />,
            },
        ],
    },
    {
        element: <Footer />,
        children: [
            {
                path: 'FAQs',
                element: <FAQ />,
            },
        ],
    },
]);

export function App() {
    const [state, dispatch] = React.useReducer(GlobalReducer, SessionProps);

    return (
        <GlobalActions.ThemeContext.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={state.theme}>
                <RouterProvider router={router} fallbackElement={<Loading />} />
            </ThemeProvider>
        </GlobalActions.ThemeContext.Provider>
    );
}
