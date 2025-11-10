import React from "react";
import { Drawer, Box } from "@mui/material";
import UserProfile from "./UserProfile";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ open }) => {
  const drawerWidth = open ? 250 : 150;

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1E1E2F",
          color: "#fff",
          overflowX: "hidden",
          transition: "all 0.3s ease",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          transition: "all 0.3s ease",
        }}
      >
        <UserProfile open={open} />
      </Box>
      <SidebarMenu open={open} />
    </Drawer>
  );
};

export default React.memo(Sidebar);
