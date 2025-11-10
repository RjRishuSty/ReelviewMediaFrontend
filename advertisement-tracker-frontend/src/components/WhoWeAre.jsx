import { Box, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import img2 from "../assets/whoweare2.jpg";
import { commanAnimate } from "../animate/commanAnimate";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);


const WhoWeAre = () => {

  const isMobile = useMediaQuery('(max-width:450px)')
  return (
    <Stack sx={{ mt: 10 }} component='section'>
      <Container>
        <Grid container rowSpacing={2} columnSpacing={5}>
          <Grid
            size={{ xs: 12, sm: 12, md: 5 }}
          >
            <MotionBox
            {...commanAnimate.image}
              component="img"
              src={img2}
              alt="Reelview media"
              sx={{
                width: '100%',
                height: 400,
                objectFit: "cover",
                objectPosition: "center",
                borderRadius:5,
                filter:'brightness(80%)',
                cursor:'pointer',
                "&:hover":{filter:'brightness(110%)'}
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 7 }} sx={{mt:2}}>
            <MotionTypography
              gutterBottom
              {...commanAnimate.heading}
              variant="h6"
              sx={{ color: "secondary.main", fontWeight: 600 }}
            >
              Who we are
            </MotionTypography>

            <MotionTypography
              gutterBottom
              variant={isMobile?"h5":"h4"}
              {...commanAnimate.heading}
              sx={{ fontWeight: 800, color: "other.light",textTransform:'capitalize' }}
            >
              A new age media for vision lead businesses
            </MotionTypography>

            <MotionTypography
              variant="body1"
              {...commanAnimate.text}
              sx={{
                color: "text.text",
                letterSpacing: 1,
                wordSpacing: 1,
                lineHeight: 1.8,
              }}
            >
              Reelview Media is your comprehensive growth partner — combining
              strategic marketing expertise and innovative digital campaigns to
              help your business scale with precision and purpose. We deliver
              clarity to your brand, measurable impact to your marketing, and
              lasting strength to your teams.
            </MotionTypography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default WhoWeAre;
