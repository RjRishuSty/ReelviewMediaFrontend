import React, { useCallback, useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/DashboardComponents/Header";
import Sidebar from "../components/DashboardComponents/Sidebar";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle} open={open} />
      <Sidebar open={open} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2.5,
          mt: 8,
          minHeight: "91vh",
          backgroundColor: "#ccc",
          transition: "all 0.3s ease",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
