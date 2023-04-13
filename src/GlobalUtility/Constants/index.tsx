import { createContext } from 'react';
import { GetTheme } from '../Themes';
import {
    createBrowserRouter,
    RouteObject
} from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import Landing from '../../Pages/Landing/Landing';
import Products from '../../Pages/Products/Products';
import FAQ from '../../Pages/FAQ/FAQ';
import SignIn from '../../Pages/SignIn/SignIn';
import Register from '../../Pages/Register/Register';
import Dashboard from '../../Pages/Dashboard/Dashboard';

const routes: RouteObject[] = [
    {
        element: <NavBar />,
        children: [
            {
                path: '/',
                element: [
                    <Landing />,
                    <Footer />,
                ]
            }, {
                path: 'products',
                element: [
                    <Products />,
                    <Footer />,
                ]
            }, {
                path: 'FAQs',
                element: [
                    <FAQ />,
                    <Footer />,
                ]
            }, {
                path: 'dashboard',
                element: [
                    <Dashboard />,
                    <Footer />,
                ]
            },
        ]
    }, {
        path: '/sign-in',
        element: <SignIn />,
    }, {
        path: '/register',
        element: <Register />,
    },
];

export const router = createBrowserRouter(routes);

export const SessionProps: GlobalProps = {
    theme: GetTheme('dark'),
    isAuth: false,
};

export const GlobalStateActions: GlobalActions = {
    ThemeContext: createContext<ThemeContextType>({
        state: {
            theme: SessionProps.theme,
        },
        dispatch: () => {
            /* placeholder */
        },
    }),
};
