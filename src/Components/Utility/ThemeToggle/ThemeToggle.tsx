import React from 'react';
import DarkModeTwoTone from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoTone from '@mui/icons-material/LightModeTwoTone';
import { IconButton } from '@mui/material';
import { GlobalActions } from '../../../GlobalUtility/Constants';

export default function ThemeToggle() {
    const { state, dispatch } = React.useContext<ThemeContextType>(GlobalActions.ThemeContext);

    const toggleTheme = () => {
        dispatch({ type: 'SET_THEME' });
    };

    return (
        <IconButton onClick={toggleTheme} size="large">
            {state.theme === 'light' ? <DarkModeTwoTone /> : <LightModeTwoTone />}
        </IconButton>
    );
}
