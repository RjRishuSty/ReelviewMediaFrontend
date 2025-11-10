import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/logo.png";
import { motion } from "framer-motion";
import { logoVariants } from "../animate/header";

const MotionBox = motion(Box);

const Logo = ({ scrolled }) => {
  const minLaptop = useMediaQuery("(max-width:1050px)");
  return (
    <MotionBox
      component={Link}
      to="/"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      sx={{
        width:'auto',
      }}
    >
      <Box
        component="img"
        src={LogoImg}
        alt="Reelview Media"
        sx={{
          width: minLaptop ? 200 : scrolled ? 200 : 300,
          height: 80,
          objectFit: "contain",
          objectPosition: "center",
          p: 1,
          cursor: "pointer",
        }}
      />
    </MotionBox>
  );
};

export default Logo;
