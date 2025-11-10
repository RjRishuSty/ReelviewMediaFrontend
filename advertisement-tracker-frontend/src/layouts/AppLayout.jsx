import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Box } from "@mui/material";

const AppLayout = () => {
  const location = useLocation();
  const authPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <React.Fragment>
      {authPage ? (
        <Outlet />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            overflow: "hidden",
            bgcolor: "background.default",
            position:'relative',
          }}
        >
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Outlet />
          </Box>
          <Footer />
        </Box>
      )}
    </React.Fragment>
  );
};

export default AppLayout;
