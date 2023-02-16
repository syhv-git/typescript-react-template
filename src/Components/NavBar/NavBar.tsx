import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  AppBar,
  Button
} from "@mui/material";
import styled from "styled-components";

const pages = ["Home", "Products", "FAQs"];
const settings = ["Mode"];

const NavStyle = styled.div`
  width: 100vw;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavItem = styled.div`
`;

const NavBar = () => {

  return (
    <>
      <NavStyle>
        <AppBar>
        </AppBar>
      </NavStyle>
      <Outlet />
    </>
  );
}

export { NavBar }
