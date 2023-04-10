/// <reference types="@mui/material" />

type ReducerType = 'SET_THEME';
type ReducerActions = { type: ReducerType };

interface ThemeContextType {
    state: {
        theme: Theme
    };
    dispatch: React.Dispatch<ReducerActions>;
}

interface GlobalProps {
    theme: Theme;
    isAuth: boolean;
    id?: string;
}

interface GlobalActions {
    ThemeContext: React.Context<ThemeContextType>;
}

interface PathTitles {
    title: JSX.Element | string;
    to: string;
}
