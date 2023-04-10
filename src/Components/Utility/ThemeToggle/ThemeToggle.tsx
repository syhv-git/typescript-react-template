import React, { useMemo } from 'react';
import DarkMode from '@mui/icons-material/DarkMode';
import LightModeTwoTone from '@mui/icons-material/LightModeTwoTone';
import { IconButton } from '@mui/material';
import { GlobalActions } from '../../../GlobalUtility/Constants';

export default function ThemeToggle() {
    const { state, dispatch } = React.useContext<ThemeContextType>(GlobalActions.ThemeContext);

    const themeIcon = useMemo(() => { return state.theme === 'light' ? <DarkMode /> : <LightModeTwoTone /> }, [state.theme])

    const toggleTheme = () => {
        dispatch({ type: 'SET_THEME' });
    };

    return (
        <IconButton onClick={toggleTheme} size="large">
            {themeIcon}
        </IconButton>
    );
}
