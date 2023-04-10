import { createContext } from 'react';
import { GetTheme } from '../Themes';

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
