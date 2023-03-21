import React from 'react';
import DarkModeTwoTone from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoTone from '@mui/icons-material/LightModeTwoTone';
import { IconButton } from '@mui/material';
import { GlobalContext, SessionProps } from '../../../GlobalUtility/Constants';

export default function ThemeToggle() {
    const [state] = React.useState<GlobalProps>(SessionProps);
    const handleChange = React.useContext(GlobalContext);

    return (
        <IconButton onClick={handleChange.ChangeTheme} size="large">
            {state.theme.palette.mode === 'light' ? <DarkModeTwoTone /> : <LightModeTwoTone />}
        </IconButton>
    );
}
