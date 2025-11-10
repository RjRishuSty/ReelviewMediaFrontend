import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Box,
  Tooltip,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Logo from "../Logo";
import FullScreenIcon from "./FullScreenIcon";
import MessageIcon from "./MessageIcon";

const Header = ({ handleDrawerToggle, open }) => {
  const drawerWidth = open ? 250 : 150;
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#1e1e2f",
        transition: "all 0.3s ease",
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Logo useIn="dashboard" />

        <MessageIcon />
        <FullScreenIcon />
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
