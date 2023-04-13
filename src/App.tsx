import { useReducer } from 'react';
import { RouterProvider } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import GlobalReducer from './GlobalUtility/Reducer';
import {
    GlobalStateActions,
    router,
    SessionProps
} from './GlobalUtility/Constants/Constants';
import { GetTheme } from "./GlobalUtility/Themes";

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
