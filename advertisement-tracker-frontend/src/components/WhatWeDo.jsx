import { Box, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { whatWeDoData } from "../data/whatWeDoData";
import { motion } from "framer-motion";
import { commanAnimate } from "../animate/commanAnimate";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { flexStart } from "../styles/flexStyles";

const MotionTypography = motion(Typography);
const MotionStack = motion(Stack);
const MotionBox = motion(Box);

const WhatWeDo = () => {
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <MotionStack
      {...commanAnimate.section}
      sx={{ bgcolor: "background.paper", py: 10 }}
    >
      <Container sx={{p:isMobile?0:""}}>
        <MotionTypography
          {...commanAnimate.heading}
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            color: "secondary.main",
          }}
        >
          What we do
        </MotionTypography>
        <MotionTypography
          {...commanAnimate.text}
          variant="body1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: 500,
            color: "text.light",
            wordSpacing: 2,
          }}
        >
          Grow your business with confidence
        </MotionTypography>
        <Grid container sx={{ mt: 5 }} rowSpacing={2} columnSpacing={3}>
          {whatWeDoData.map((item) => (
            <Grid
              key={item.id}
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{
                p: 3,
                borderRadius: 5,
              }}
            >
              <MotionTypography
                {...commanAnimate.heading}
                variant={isMobile?"h5":"h4"}
                gutterBottom
                sx={{
                  textAlign: "start",
                  fontWeight: 900,
                  color: "primary.main",
                }}
              >
                {item.title}
              </MotionTypography>

              <MotionTypography
                {...commanAnimate.text}
                variant={isMobile?"body1":"h6"}
                gutterBottom
                sx={{
                  textAlign: "start",
                  fontWeight: 500,
                  color: "other.main",
                }}
              >
                {item.subTitle.split(".").map(
                  (part, index) =>
                    part.trim() && (
                      <React.Fragment key={index}>
                        {part.trim()}.
                        <br />
                      </React.Fragment>
                    )
                )}
              </MotionTypography>

              <Typography
                variant={isMobile?"body2":"body1"}
                gutterBottom
                sx={{
                  textAlign: "start",
                  color: "text.light",
                }}
              >
                {item.description}
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "other.main", fontWeight: 900 }}
              >
                {item.servicesTitle}
              </Typography>

              {item.services.map((service, index) => (
                <MotionBox
                  {...commanAnimate.subtext}
                  key={index}
                  sx={{ ...flexStart, m: 1 }}
                >
                  <SubdirectoryArrowRightIcon
                    sx={{ color: "other.main", mr: 1 }}
                  />
                  <Typography
                    variant={isMobile?"body2":"body1"}
                    sx={{
                      color: "text.light",
                      textTransform: "capitalize",
                      fontWeight:isMobile?500: 600,
                    }}
                  >
                    {service}
                  </Typography>
                </MotionBox>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </MotionStack>
  );
};

export default WhatWeDo;
