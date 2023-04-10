import React from 'react';
import { styled } from '@mui/material/styles';
import { SessionProps } from '../../GlobalUtility/Constants';

const FooterContainer = styled('div')({
    display: 'flex',
    minHeight: 256,
    backgroundColor: '#000370',
});

const FooterLeft = styled('div')({
    display: 'flex',
});

const FooterBlock = styled('div')({
    display: 'flex',
});

const FooterRight = styled('div')({
    display: 'flex',
});

export const Footer = () => {
    console.log(SessionProps.theme);

    return (
        <FooterContainer>
            <FooterLeft></FooterLeft>
            <FooterBlock></FooterBlock>
            <FooterRight></FooterRight>
        </FooterContainer>
    );
};
