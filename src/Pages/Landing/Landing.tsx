import React from 'react';
import logo from '../../assets/resources/logo.svg';
import { styled } from '@mui/material/styles';

const HomeStyle = styled('div')({
    width: '100%',
    maxHeight: 'fit-content',
    display: 'flex',
    flexFlow: 'column nowrap',
});

const Landing = () => {
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
};

export { Landing };
