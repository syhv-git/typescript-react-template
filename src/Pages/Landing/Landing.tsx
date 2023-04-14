import logo from '../../assets/resources/logo.svg';
import styled from '@mui/material/styles/styled';
import {
    GlobalStateActions,
    SessionProps
} from "../../GlobalUtility/Constants/Constants";
import {
    useContext,
    useMemo
} from "react";

const HomeStyle = styled('div')({
    width: '100%',
    maxHeight: 'fit-content',
    display: 'flex',
    flexFlow: 'column nowrap',
});

export default function Landing() {
    const { state } = useContext<ThemeContextType>(GlobalStateActions.ThemeContext);

    const themeColors = useMemo(() => {
        return {
            backgroundColor: state.theme.palette.text.secondary,
            color: state.theme.palette.text.primary,
        };
    }, [state.theme.palette.mode]);

    return (
        <div style={themeColors}>
            <HomeStyle>
                <img src={logo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </HomeStyle>
        </div>
    );
}
