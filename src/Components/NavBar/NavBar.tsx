import React from "react";
import { Outlet } from "react-router-dom";
import {
  AppBar,
  Button,
  IconButton,
  styled as muistyle,
  Toolbar,
  Typography
} from "@mui/material";
import styled from "styled-components";

const pages = ["Home", "Products", "FAQs"];
const settings = ["Mode"];

const ToolbarStyle = muistyle(Toolbar)({
  justifyContent: "center",
  alignItems: "center",
});

const Logo = muistyle(IconButton)({

})

const NavBlock = styled.span`
  display: flex;
  justify-items: space-between;
`;

const NavButton = muistyle(Button)({
  color: "white",
  margin: "0 5px",
  borderRadius: "42px",
  textTransform: "none",
  '&:hover': {
    background: "rgba(0, 0, 0, 0.2)"
  }
})

const NavBar = () => {

  return (
    <>
      <AppBar position="sticky">
        <ToolbarStyle>
          <NavBlock>
            <NavButton>
              <Typography variant="body1">
                Products
              </Typography>
            </NavButton>
            <NavButton>
              <Typography variant="body1">
                FAQs
              </Typography>
            </NavButton>
            <NavButton>
              <Typography variant="body1">
                Contact Us
              </Typography>
            </NavButton>
          </NavBlock>
        </ToolbarStyle>
      </AppBar>
      <Outlet/>
    </>
  );
}

export { NavBar }
