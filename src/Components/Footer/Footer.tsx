import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import instagram from '../../assets/resources/instagram.png';
import twitter from '../../assets/resources/twitter.png'
import { Link } from "react-router-dom";

const EmptyBlock = styled('div')({
    display: 'flex',
    flex: 'auto',
})

const FooterContainer = styled('div')({
    display: 'flex',
    minHeight: 256,
    backgroundColor: '#000370',
});

const FooterLeft = styled('div')({
    display: 'flex',
    flex: 1,
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

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'white',
    marginLeft: 25,
    padding: '5px 0px',
});

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

    const listIcon = icons.map((ico) => {
        return (
            <a href={ico.to} rel={"noopener noreferrer"} key={ico.name}>
                <IconImg key={ico.name} src={ico.src} alt={ico.name}/>
            </a>
        );
    })

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

    const listLinks = listPT.map((e) => (
      <StyledLink to={e.to} key={e.title}>
        <Typography>
          {e.title}
        </Typography>
      </StyledLink>
    ));

    return (
        <FooterContainer>
            <FooterLeft>
                <EmptyBlock/>
                    <IconBlock>
                        { listIcon }
                    </IconBlock>
                <EmptyBlock/>
            </FooterLeft>
            <br />
            <FooterBlock>
                { listLinks }
            </FooterBlock>
            <FooterRight>
                <Typography>Contact Us</Typography>
            </FooterRight>
        </FooterContainer>
    );
};
