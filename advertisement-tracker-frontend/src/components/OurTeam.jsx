import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import CustomSlider from "./Swiper/CustomSlider";
import { center } from "../styles/flexStyles";

const OurTeam = () => {
  return (
    <Stack component="section" sx={{ py: 10,...center,border:'2px solid red'}}>
      <Typography gutterBottom variant="h3" sx={{ color: "secondary.main",fontWeight:800 }}>
        Meet Your Teams
      </Typography>
      <Container>
        {/* <CustomSlider useIn='teamSection' /> */}
      </Container>
    </Stack>
  );
};

export default OurTeam;
