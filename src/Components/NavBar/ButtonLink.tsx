import {
  Button,
  Typography
} from "@mui/material";
import React from "react";
import { styled as muistyle } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  PathTitles,
} from "../../Types/Types";

const ButtonLinker = muistyle(Link)({
  textDecoration: "none",
});

const ButtonLink: React.FC<PathTitles> = props => {

  const NavButton = muistyle(Button)({
    color: "white",
    margin: "0 5px",
    borderRadius: "42px",
    textTransform: "none",
    '&:hover': {
      background: "rgba(0, 0, 0, 0.2)"
    }
  });

  return (
    <ButtonLinker to={ props.to }>
      <NavButton>
        <Typography variant="body1">
          {props.title}
        </Typography>
      </NavButton>
    </ButtonLinker>
  );
}

export {ButtonLink}
