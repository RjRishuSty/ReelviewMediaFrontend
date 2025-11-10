import React from "react";
import { visionData } from "../data/visionData";
import { Box, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import VisionCard from "./Cards/VisionCard";

const OurVision = () => {
  const isTablet = useMediaQuery('(max-width:900px)');
  return (
    <Stack component='section' className="ourVisionSection" sx={{pb:5,}}>
      <Container>
        <Grid container sx={{ p: 2, mt: 3 }} rowSpacing={5} columnSpacing={10}>
          {visionData.map((item, index) => {
            let move = index % 2 === 0;
            return (
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                key={index}
                sx={{ mt: move ? isTablet?3: 10 : 0, position: "relative" }}
              >
                <VisionCard item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Stack>
  );
};

export default OurVision;
