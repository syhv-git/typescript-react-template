import createTheme from '@mui/material/styles/createTheme';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        text: {
            primary: '#DEDEDEDE',
            secondary: '#3E3E3E',
        },
    },
});

export const GetTheme = (mode: string) => {
    return mode === 'dark' ? darkTheme : lightTheme;
};

export const SetTheme = (state: GlobalProps) => {
    return state.theme.palette.mode === 'light' ? darkTheme : lightTheme;
};
