import React from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { SessionProps } from '../../../GlobalUtility/Constants';

const ButtonLinker = styled(Link)({
    boxSizing: 'content-box',
    textDecoration: 'none',
});

const NavButtonIcon = styled(Button)({
    margin: '0 5px !important',
    borderRadius: `50% !important`,
    textTransform: 'none',
    ':hover': {
        background: 'rgba(0, 0, 0, 0.2)',
    },
});

const NavButtonText = styled(Button)({
    color: `#FFFFFF`,
    margin: '0 5px !important',
    borderRadius: `42px !important`,
    textTransform: 'none',
    ':hover': {
        background: 'rgba(0, 0, 0, 0.2)',
    },
});

export default function ButtonLink(props: PathTitles) {
    const [state] = React.useState(SessionProps);

    return typeof props.title === 'string' ? (
        <ButtonLinker to={props.to}>
            <NavButtonText theme={state.theme}>
                <Typography>
                    {props.title}
                </Typography>
            </NavButtonText>
        </ButtonLinker>
    ) : (
        <ButtonLinker to={props.to}>
            <NavButtonIcon sx={{ minWidth: '42px' }}>
                {props.title}
            </NavButtonIcon>
        </ButtonLinker>
    );
}
