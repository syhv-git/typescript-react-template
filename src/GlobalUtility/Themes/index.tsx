import createTheme from '@mui/material/styles/createTheme';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        text: {
            primary: '#000000',
            secondary: '#FFFFFF',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        text: {
            primary: '#3E3E3E',
            secondary: '#DEDEDE',
        },
    },
});

export const GetTheme = (mode: string) => {
    return mode === 'dark' ? darkTheme : lightTheme;
};

export const SetTheme = (state: GlobalProps) => {
    return state.theme.palette.mode === 'light' ? darkTheme : lightTheme;
};
