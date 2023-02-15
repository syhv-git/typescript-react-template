import {AppBar, Button} from "@mui/material";
import {Outlet} from "react-router-dom";

const pages = ["Home", "Products", "FAQs"];
const settings = ["Mode"];

export const NavBar = () => {
  return (
    <>
      <div id="nav">
        <AppBar>
        </AppBar>
      </div>
      <Outlet />
    </>
  );
}
