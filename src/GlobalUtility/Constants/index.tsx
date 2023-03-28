import { createContext } from 'react';
import { GetTheme } from '../Themes';

export const SessionProps: GlobalProps = {
    theme: GetTheme(),
};

export const GlobalActions: GlobalStateActions = {
    ThemeContext: createContext<ThemeContextType>({
        state: {
            theme: SessionProps.theme.palette.mode,
        },
        dispatch: () => {
            /* placeholder */
        },
    }),
};
