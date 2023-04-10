import React from 'react';
import { styled } from "@mui/material/styles";

const FooterContainer = styled('div')({
    display: 'flex',
    minHeight: 69,
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


    return (
      <FooterContainer>
          <FooterLeft>

          </FooterLeft>
          <FooterBlock>

          </FooterBlock>
          <FooterRight>

          </FooterRight>
      </FooterContainer>
    )
}
