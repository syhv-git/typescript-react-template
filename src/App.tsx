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
        path: '/',
        element: (
            <>
                <NavBar />
                <Landing />
                <Footer />
            </>
        ),
        children: [
            {
                path: 'FAQs',
                element: (
                  <>
                      <NavBar />
                      <FAQ />
                      <Footer />
                  </>
                ),
            },
            {
                path: 'products',
                element: (
                  <>
                      <NavBar />
                      <Products />
                      <Footer />
                  </>
                ),
            },
            {
                path: 'dashboard',
                element: (
                  <>
                      <NavBar />
                      <Dashboard />
                      <Footer />
                  </>
                ),
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
