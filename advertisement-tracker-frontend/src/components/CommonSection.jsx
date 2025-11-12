import React from "react";
import { Typography, Stack, Container, Grid, Box } from "@mui/material";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { motion } from "framer-motion";
import { commanAnimate } from "../animate/commanAnimate";
import { flexAllStart } from "../styles/flexStyles";

// Data imports
import { whyChooseUs } from "../data/whyChooseUsData";
import { whatWeOffer } from "../data/whatWeOfferData";

const MotionTypography = motion(Typography);
const MotionContainer = motion(Container);
const MotionBox = motion(Box);

const CommonSection = ({ useIn }) => {
  let heading = "";
  let subHeading = "";
  let data = [];

  switch (useIn) {
    case "whatWeOffer":
      heading = "What We Offer";
      subHeading =
        "Empowering Your Business with Comprehensive Digital Solutions";
      data = whatWeOffer;
      break;

    case "whyChooseUs":
      heading = "Why Choose Us?";
      subHeading = "Your Trusted Partner for Every Service You Need";
      data = whyChooseUs;
      break;
    default:
      return <Typography>provide me usein</Typography>;
  }

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
          {/* Section headings */}
          <Grid size={{ xs: 12 }}>
            <MotionTypography
              {...commanAnimate.heading}
              gutterBottom
              variant="body1"
              sx={{ fontWeight: 700, color: "text.default" }}
            >
              {subHeading}
            </MotionTypography>
            <MotionTypography
              {...commanAnimate.heading}
              gutterBottom
              variant="h4"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                textAlign: "start",
                textTransform: "uppercase",
              }}
            >
              {heading}
            </MotionTypography>
          </Grid>

          {/* Map through selected dataset */}
          {data.map((item, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index} sx={{ p: 2 }}>
              <MotionTypography
                {...commanAnimate.subtext}
                gutterBottom
                variant="h6"
                sx={{ color: "secondary.dark", fontWeight: 600 }}
              >
                {item.title}
              </MotionTypography>
              <MotionBox {...commanAnimate.section} sx={{ ...flexAllStart }}>
                <SubdirectoryArrowRightIcon
                  fontSize="small"
                  sx={{ color: "secondary.dark", mr: 1 }}
                />
                <Typography variant="body1" sx={{ color: "primary.main" }}>
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

export default CommonSection;
