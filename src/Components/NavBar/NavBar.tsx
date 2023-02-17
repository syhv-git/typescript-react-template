import React from "react";
import {
  Outlet
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
} from "@mui/material";
import styled from "styled-components";
import { ButtonLink } from "./ButtonLink";
import { PathTitles } from "../../Types/Types";
import { ThemeToggle } from "./ThemeToggle";

const NavLeft = styled.span`
  display: flex;
  flex: 1;
  justify-content: flex-start;
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
`;

const NavBar = () => {

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

          </NavLeft>
          <NavBlock>
            { navList.map((obj) => <ButtonLink title={obj.title} to={obj.to}/>) }
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

export { NavBar }
