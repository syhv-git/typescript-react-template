import React from 'react';
import {
    createBrowserRouter,
    RouteObject,
    RouterProvider
} from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { Landing } from './Pages/Landing/Landing';
import { Products } from './Pages/Products/Products';
import { FAQ } from './Pages/FAQ/FAQ';
import { Loading } from './Pages/Loading/Loading';
import { Footer } from './Components/Footer/Footer';
import { NotFound } from './Pages/Error/NotFound';
import { Dashboard } from "@mui/icons-material";
import { SignIn } from "./Pages/SignIn/SignIn";
import { Register } from "./Pages/Register/Register";
import { ThemeProvider } from '@mui/material';
import { GlobalReducer } from './GlobalUtility/Reducer';
import { GlobalStateActions, SessionProps } from './GlobalUtility/Constants';

const routes: RouteObject[] = [
    {
        element: <NavBar />,
        children: [
            {
                path: '/',
                element: <Landing />,
            },
            {
                path: 'FAQs',
                element: <FAQ />,
            },
            {
                path: 'products',
                element: <Products />,
            },
            {
                path: 'my-account',
                element: <Dashboard />,
            },
            {
                path: 'register',
                element: <Register />
            },
        ],
    }
];

const router = createBrowserRouter(routes);

export function App() {
    const [state, dispatch] = React.useReducer(GlobalReducer, SessionProps);

    return (
        <GlobalStateActions.ThemeContext.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={state.theme}>
                <RouterProvider router={router} fallbackElement={<Loading />} />
            </ThemeProvider>
        </GlobalStateActions.ThemeContext.Provider>
    );
}
