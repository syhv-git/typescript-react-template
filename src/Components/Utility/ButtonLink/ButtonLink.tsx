import React from "react";
import {
  Button,
  Typography
} from "@mui/material";
import { styled as muistyle } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { PathTitles } from "../../../Global/Types";

const ButtonLinker = muistyle(Link)({
  boxSizing: "content-box",
  textDecoration: "none",
});

export default function ButtonLink(props: PathTitles) {
  let radius = "50%"
  if (typeof props.title === "string") {
    radius = "42px"
  }

  const NavButton = muistyle(Button)({
    color: "white",
    margin: "0 5px !important",
    borderRadius: `${radius} !important`,
    textTransform: "none",
    ':hover': {
      background: "rgba(0, 0, 0, 0.2)"
    }
  });

  return typeof props.title === "string" ? (
    <ButtonLinker to={ props.to }>
      <Typography component={NavButton} variant="body1" align="center">
        {props.title}
      </Typography>
    </ButtonLinker>
  ) : (
    <ButtonLinker to={props.to}>
      <NavButton sx={{minWidth: "42px"}}>
        {props.title}
      </NavButton>
    </ButtonLinker>
  );
}
