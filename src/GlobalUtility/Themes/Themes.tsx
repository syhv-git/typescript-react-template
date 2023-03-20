import { createTheme, useMediaQuery } from '@mui/material';
import type { GlobalProps } from '../../types';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const GetTheme = () => {
    return useMediaQuery('(prefers-color-scheme: dark)') ? darkTheme : lightTheme;
};

export const SetTheme = (state: GlobalProps) => {
    return state.theme.palette.mode === 'light' ? darkTheme : lightTheme;
};
