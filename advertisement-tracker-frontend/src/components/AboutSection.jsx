import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  // useMediaQuery,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { commanAnimate } from "../animate/commanAnimate";
import sectionImg from "../assets/whoWeare.jpg";
import OurVision from "./OurVision";

const MotionContainer = motion(Container);
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const MotionCard = motion(Card);

const AboutSection = () => {
  // const isTablet = useMediaQuery("(max-width:850px)");

  // const isMobile = useMediaQuery("(max-width:500px)");
  // const smallMobile = useMediaQuery("(max-width:450px)");

  return (
    <MotionContainer
      {...commanAnimate.section}
      sx={{
        mt: 10,
      }}
    >
      <Grid container rowSpacing={3} columnSpacing={4}>
        <Grid size={{ xs: 12, sm: 12, md: 5 }}>
          <MotionBox
            {...commanAnimate.image}
            component="img"
            src={sectionImg}
            sx={{
              width: "100%",
              height: 550,
              borderRadius: 1,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 7 }} sx={{ mt: 4 }}>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              fontWeight: 400,
              color: "secondary.dark",
              textTransform: "capitalize",
            }}
          >
            About working of Our dedicated professionals helps you enhance and
            boost your digital reach.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              color: "primary.dark",
              wordSpacing: 1,
            }}
          >
            Our team has extensive experience in digital marketing and a deep
            understanding of the latest trends. We understand your needs,
            business, and goals, and help you enhance your brand and achieve
            success. We deliver measurable results, keep you updated, and strive
            to build a long-term relationship.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "primary.dark",
              wordSpacing: 1,
            }}
          >
            At ReelView Media, we are a team of innovative digital marketing
            professionals dedicated to help businesses succeed in the online
            world. With experience, passion, and focus on delivering results, we
            offer a range of digital marketing services to boost your online
            presence and convert your followers into customers.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <OurVision />
          </Box>
        </Grid>
      </Grid>
    </MotionContainer>
  );
};

export default AboutSection;
