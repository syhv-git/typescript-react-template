import { createTheme } from '@mui/material';

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

export const GetTheme = (mode: string) => {
    return mode === 'dark' ? darkTheme : lightTheme;
};

export const SetTheme = (state: GlobalProps) => {
    return state.theme.palette.mode === 'light' ? darkTheme : lightTheme;
};
