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
                    <Landing key={"landing"} />,
                    <Footer key={"footer"} />,
                ]
            }, {
                path: 'products',
                element: [
                    <Products key={"products"} />,
                    <Footer key={"footer"} />,
                ]
            }, {
                path: 'dashboard',
                element: [
                    <Dashboard key={"dashboard"} />,
                    <Footer key={"footer"} />,
                ]
            }, {
                path: 'FAQs',
                element: [
                    <FAQ key={"faq"} />,
                    <Footer key={"footer"} />,
                ]
            },
        ]
    }, {
        path: '/sign-in',
        element: <SignIn key={"login"} />,
    }, {
        path: '/register',
        element: <Register key={"register"} />,
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
