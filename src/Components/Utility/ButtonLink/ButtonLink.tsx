import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';

const ButtonLinker = styled(Link)({
    boxSizing: 'content-box',
    textDecoration: 'none',
});

const NavButtonIcon = styled(Button)({
    minWidth: '42px',
    margin: '0 5px !important',
    borderRadius: `50% !important`,
    textTransform: 'none',
    ':hover': {
        background: 'rgba(0, 0, 0, 0.2)',
    },
});

const NavButtonText = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    margin: '0 5px !important',
    borderRadius: `42px !important`,
    textTransform: 'none',
    ':hover': {
        background: 'rgba(0, 0, 0, 0.2)',
    },
}));

export default function ButtonLink(props: PathTitles) {
    return typeof props.title === 'string' ? (
        <ButtonLinker to={props.to}>
            <NavButtonText>
                <Typography>{props.title}</Typography>
            </NavButtonText>
        </ButtonLinker>
    ) : (
        <ButtonLinker to={props.to}>
            <NavButtonIcon>{props.title}</NavButtonIcon>
        </ButtonLinker>
    );
}
