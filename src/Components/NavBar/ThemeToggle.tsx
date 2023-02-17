import React from "react";
import { Mode } from "../../Types/Types";
import DarkModeTwoTone from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoTone from "@mui/icons-material/LightModeTwoTone";
import { IconButton } from "@mui/material";

const initialState: Mode = "light"

function reducer(state: Mode): Mode {
  if (state === "light") {
    return "dark"
  }
  return "light"
}

const ThemeIcon: React.FC = mode => {
  return mode === "light" ? <DarkModeTwoTone/> : <LightModeTwoTone/>
}

const ThemeToggle: React.FC = () => {
  const [ state, dispatch ] = React.useReducer(reducer, initialState)

  return (
    <IconButton onClick={ dispatch } size="large">
      { ThemeIcon(state) }
    </IconButton>
  )
}

export { ThemeToggle }
