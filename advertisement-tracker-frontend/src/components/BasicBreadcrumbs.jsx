import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import { center } from "../styles/flexStyles";

const BasicBreadcrumbs = ({ pathname }) => {
  const path = pathname.split("/").join("");
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="large" />}
      aria-label="breadcrumb"
      sx={{ ...center,py:2}}
    >
      <Typography
        variant="h6"
        component={Link}
        sx={{ fontWeight: 600 }}
        color="inherit"
        to="/"
      >
        Home
      </Typography>
      <Typography
        variant="h6"
        color="text.primary"
        sx={{ textTransform: "capitalize", fontWeight: 600 }}
      >
        {path}
      </Typography>
    </Breadcrumbs>
  );
};

export default React.memo(BasicBreadcrumbs);
