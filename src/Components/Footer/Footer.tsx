import { Link } from "react-router-dom";
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';
import instagram from '../../assets/resources/instagram.png';
import twitter from '../../assets/resources/twitter.png'

const EmptyBlock = styled('div')({
    display: 'flex',
    flex: 'auto',
})

const FooterContainer = styled('div')({
    display: 'flex',
    minHeight: 256,
    maxHeight: 256,
    backgroundColor: '#000370',
});

const FooterLeft = styled('div')({
    display: 'flex',
    flex: 0.75,
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'flex-end',
});

const IconBlock = styled('div')({
    display: 'flex',
    flex: 'auto',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    height: 'fit-content',
    borderRight: '2px solid #D4AF37',
    paddingRight: 15,
});

const FooterBlock = styled('div')({
    display: 'flex',
    flex: 1,
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '42px 0',
});

const FooterRight = styled('div')({
    display: 'flex',
    flex: 1,
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
});

const IconImg = styled('img')({
    height: '2rem',
    padding: 5,
    margin: '10 5 5',
    alignSelf: 'flex-end',
});

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    marginLeft: 25,
    padding: '5px 0px',
}));

export default function Footer() {
    const icons = [
        {
            name: 'instagram',
            src: instagram,
            to: 'https://instagram.com',
        },
        {
            name: 'twitter',
            src: twitter,
            to: 'https://twitter.com',
        },
    ];

    const listPT: PathTitles[] = [{
      title: 'Home',
      to: '/',
    }, {
      title: 'Products',
      to: '/products',
    }, {
      title: 'Dashboard',
      to: '/dashboard',
    }, {
      title: 'FAQs',
      to: '/FAQs',
    }];

    return (
        <FooterContainer>
            <FooterLeft>
                <EmptyBlock/>
                    <IconBlock>
                        { icons.map((ico) => {
                            return (
                                <a href={ico.to} rel={"noopener noreferrer"} key={ico.name}>
                                    <IconImg key={ico.name} src={ico.src} alt={ico.name}/>
                                </a>
                            );
                        }) }
                    </IconBlock>
                <EmptyBlock/>
            </FooterLeft>
            <br />
            <FooterBlock>
                { listPT.map((e, i) => (
                    <StyledLink to={e.to} key={e.to}>
                        <Typography>
                            {e.title}
                        </Typography>
                    </StyledLink>
                )) }
            </FooterBlock>
            <FooterRight>
                <Typography>Contact Us</Typography>
            </FooterRight>
        </FooterContainer>
    );
};
