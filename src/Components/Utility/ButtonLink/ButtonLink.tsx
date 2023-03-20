import React from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import type { PathTitles } from '../../../types';

const ButtonLinker = styled(Link)({
    boxSizing: 'content-box',
    textDecoration: 'none',
});

export default function ButtonLink(props: PathTitles) {
    const [state] = React.useState(SessionProps);

    let radius = '50%';
    if (typeof props.title === 'string') {
        radius = '42px';
    }

    const NavButton = styled(Button)(({ theme }) => ({
        color: theme.palette.text.primary,
        margin: '0 5px !important',
        borderRadius: `${radius} !important`,
        textTransform: 'none',
        ':hover': {
            background: 'rgba(0, 0, 0, 0.2)',
        },
    }));

    return typeof props.title === 'string' ? (
        <ButtonLinker to={props.to}>
            <NavButton theme={state.theme}>
                <Typography variant="body1" align="center">
                    {props.title}
                </Typography>
            </NavButton>
        </ButtonLinker>
    ) : (
        <ButtonLinker to={props.to}>
            <NavButton sx={{ minWidth: '42px' }}>{props.title}</NavButton>
        </ButtonLinker>
    );
}
