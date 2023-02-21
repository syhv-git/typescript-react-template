import React from "react";
import {
  Outlet
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
} from "@mui/material";
import styled from "styled-components";
import ButtonLink from "../Utility/ButtonLink/ButtonLink";
import { PathTitles } from "../../Global/Types";
import ThemeToggle from "../Utility/ThemeToggle/ThemeToggle";
import logo from "../../Assets/resources/logoC.png";

const LogoStyle = styled.img`
  width: 42px;
  height: 42px;
`;

const NavLeft = styled.span`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin-left: 18px;
`;

const NavBlock = styled.span`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const NavRight = styled.span`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 18px;
`;

export const NavBar = () => {

  const Logo: PathTitles = {
    title: <LogoStyle src={logo} alt="logo"/>,
    to: "/"
  }

  const navList: Array<PathTitles> = [
    {title: "Products", to: "/products"},
    {title: "FAQs", to: "/FAQs"},
    {title: "Contact Us", to: "/"},
  ];

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <NavLeft>
            <ButtonLink title={Logo.title} to={Logo.to} />
          </NavLeft>
          <NavBlock>
            { navList.map((obj, i) => <ButtonLink key={i} title={obj.title} to={obj.to}/>) }
          </NavBlock>
          <NavRight>
            <ThemeToggle/>
          </NavRight>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </>
  );
}
