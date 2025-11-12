import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CustomSlider from "./Swiper/CustomSlider";
import { center } from "../styles/flexStyles";

const OurTeam = () => {
  return (
    <Stack
      component="section"
      sx={{mt:5, pb: 5, ...center,}}
    >
      <Typography
        gutterBottom
        variant="h4"
        sx={{
          color: "secondary.dark",
          fontWeight: 900,
          textTransform: "capitalize",
        }}
      >
        Our team of experts
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", textTransform: "capitalize" }}
      >
        Our professionals May help you out to enhance your socail meida reach
      </Typography>
      <Box disableGutters>
        <CustomSlider useIn="team" />
      </Box>
    </Stack>
  );
};

export default OurTeam;
