import logo from '../../assets/resources/logo.svg';
import styled from '@mui/material/styles/styled';
import { GlobalStateActions } from "../../GlobalUtility/Constants/Constants";
import {
    useContext,
    useMemo
} from "react";

const HomeStyle = styled('div')(({ theme }) => ({
    width: '100%',
    maxHeight: 'fit-content',
    display: 'flex',
    flexFlow: 'column nowrap',
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.mode === 'light' ? "#00000000" : "#FFFFFFFF",
}));

export default function Landing() {
    return (
        <HomeStyle>
            <img src={logo} alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
        </HomeStyle>
    );
}
