import { Typography, Stack, Container, Grid, Box } from "@mui/material";
import React from "react";
import { whyChooseUs } from "../data/whyChooseUsData";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { motion } from "framer-motion";
import { commanAnimate } from "../animate/commanAnimate";
import { flexAllStart } from "../styles/flexStyles";

const MotionTypography = motion(Typography);
const MotionContainer = motion(Container);
const MotionBox = motion(Box);

const WhyChooseUs = () => {
  return (
    <Stack
      sx={{
        height: "auto",
        width: "100%",
        overflow: "hidden",
        py: 10,
      }}
    >
      <MotionContainer {...commanAnimate.section} maxWidth="lg">
        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <MotionTypography
              {...commanAnimate.heading}
              gutterBottom
              variant="body1"
              sx={{ fontWeight: 700, color: "text.text" }}
            >
              Your Trusted Partner for Every Service Need
            </MotionTypography>
            <MotionTypography
              {...commanAnimate.heading}
              gutterBottom
              variant="h4"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                textAlign: "start",
                textTransform: "uppercase",
              }}
            >
              Why Choose Us?
            </MotionTypography>
          </Grid>

          {whyChooseUs.map((item, index) => (
            <Grid size={{ xs: 12, sm: 12, md: 6 }} key={index} sx={{ p: 2 }}>
              <MotionTypography
                {...commanAnimate.subtext}
                gutterBottom
                variant="h6"
                sx={{ color: "other.main", fontWeight: 600 }}
              >
                {item.title}
              </MotionTypography>
              <MotionBox {...commanAnimate.section} sx={{ ...flexAllStart }}>
                <SubdirectoryArrowRightIcon
                  fontSize="small"
                  sx={{ color: "secondary.main", mr: 1 }}
                />
                <Typography variant="body1" sx={{ color: "text.text" }}>
                  {item.description}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </MotionContainer>
    </Stack>
  );
};

export default WhyChooseUs;
