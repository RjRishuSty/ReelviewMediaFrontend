import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CustomSlider from "./Swiper/CustomSlider";
import { motion } from "framer-motion";
import { commanAnimate } from "../animate/commanAnimate";

const MotionStack = motion(Stack);
const MotionTypography = motion(Typography);

const ExploreServices = () => {
  const minLaptop = useMediaQuery("(max-width:850px)");
  const smallMobile = useMediaQuery("(max-width:400px)");
  return (
    <MotionStack
      component="section"
      {...commanAnimate.section}
      sx={{ width: "100%", py: 5, position: "relative", mt: 0,bgcolor:'background.other' }}
    >
      <MotionTypography
        variant={smallMobile ? "h5" : "h4"}
        gutterBottom
        {...commanAnimate.heading}
        sx={{
          color: "primary.main",
          textAlign: "center",
          fontWeight: 900,
          p: smallMobile ? 1 : 0,
        }}
      >
        Explore Our Services
      </MotionTypography>
      <MotionTypography
        variant="body1"
        {...commanAnimate.text}
        gutterBottom
        sx={{ textAlign: "center", color: "primary.dark", px: minLaptop ? 1 : 0 }}
      >
        We provide a wide rang of reliable and verified services for personal,
        professional and community needs.
      </MotionTypography>
      <CustomSlider useIn="service" />
    </MotionStack>
  );
};

export default ExploreServices;
