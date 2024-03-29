/// <reference types="react/next" />
/// <reference types="@mui/material/styles" />

type ReducerType = 'SET_THEME';
type ReducerActions = { type: ReducerType };

interface ThemeContextType {
    state: {
        theme: Theme;
    };
    dispatch: Dispatch<ReducerActions>;
}

interface GlobalProps {
    theme: Theme;
    isAuth: boolean;
    id?: string;
}

interface GlobalActions {
    ThemeContext: Context<ThemeContextType>;
}

interface PathTitles {
    title: JSX.Element | string;
    to: string;
}

interface ImagePathTitles extends PathTitles {
    src: string;
}
