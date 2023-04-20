import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@mui/material/styles/styled';
import ButtonLink from '../Utility/ButtonLink/ButtonLink';
import ThemeToggle from '../Utility/ThemeToggle/ThemeToggle';
import logo from '../../assets/resources/logoC.png';

const LogoStyle = styled('img')({
    width: 42,
    height: 42,
});

const NavLeft = styled('span')({
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 18,
});

const NavBlock = styled('span')({
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 18,
});

const NavRight = styled('span')(({ theme }) => ({
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 18,
    [theme.breakpoints.down('sm')]: {
        display: 'hidden !important',
    }
}));

export default function NavBar() {
    const Logo: PathTitles = {
        title: <LogoStyle src={logo} alt="logo" />,
        to: '/',
    };

    const navList: Array<PathTitles> = [
        { title: 'Products', to: '/products' },
        { title: 'Account', to: '/dashboard' },
    ];

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <NavLeft>
                        <ButtonLink title={Logo.title} to={Logo.to} />
                    </NavLeft>
                    <NavBlock>
                        { navList.map((obj, i) => <ButtonLink key={i} title={obj.title} to={obj.to} />) }
                    </NavBlock>
                    <NavRight>
                        <ThemeToggle />
                    </NavRight>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
}
