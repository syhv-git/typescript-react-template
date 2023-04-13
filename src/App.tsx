import { useReducer } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import GlobalReducer from './GlobalUtility/Reducer';
import {
    GlobalStateActions,
    routes,
    SessionProps
} from './GlobalUtility/Constants';
import { GetTheme } from "./GlobalUtility/Themes";

const router = createBrowserRouter(routes);

export default function App() {
    const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
    SessionProps.theme = GetTheme(mode)

    const [state, dispatch] = useReducer(GlobalReducer, SessionProps);

    return (
        <GlobalStateActions.ThemeContext.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={state.theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </GlobalStateActions.ThemeContext.Provider>
    );
}
