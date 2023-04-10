import React, { useMemo } from 'react';
import { IconButton } from '@mui/material';
import { GlobalActions } from '../../../GlobalUtility/Constants';
import LightModeTwoTone from "@mui/icons-material/LightModeTwoTone";
import DarkMode from "@mui/icons-material/DarkMode";

export default function ThemeToggle() {
    const { state, dispatch } = React.useContext<ThemeContextType>(GlobalActions.ThemeContext);

    const icon = useMemo(() => {
        return state.theme.palette.mode === 'light' ? <DarkMode /> : <LightModeTwoTone />
    }, [state.theme.palette.mode])

    const toggleTheme = () => {
        dispatch({ type: 'SET_THEME' });
    };

    return (
        <IconButton onClick={toggleTheme} size="large">
            { icon }
        </IconButton>
    );
}
