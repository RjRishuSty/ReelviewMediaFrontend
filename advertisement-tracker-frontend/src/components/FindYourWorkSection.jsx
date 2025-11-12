import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import bgImg from "../assets/aboutbg.png";
import { flexEnd, flexStart } from "../styles/flexStyles";

const FindYourWorkSection = () => {
  return (
    <Stack sx={{pb:10, ...flexEnd }}>
      <Box
        sx={{
          width: "80%",
          height: 650,
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderTopLeftRadius:2,
          borderBottomLeftRadius:2,
          ...flexStart,
        }}
      >
        <Box
          sx={{
            bgcolor: "primary.dark",
            width: "60%",
            height: "auto",
            p: 5,
            py: 10,
          }}
        >
          <Typography
            gutterBottom
            variant="h3"
            sx={{ fontWeight: 900, textAlign: "center", color: "other.dark" }}
          >
            Find Your Growth with ReelView Media
          </Typography>
          <Typography gutterBottom variant="body1" sx={{mt:4, color: "text.dark" }}>
            At ReelView Media, we help businesses stand out in the digital world
            through creative strategies and result-driven marketing. From
            boosting your online presence to converting followers into loyal
            customers, our team ensures your brand gets the attention it
            deserves.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 3, bgcolor: "secondary.dark" }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default FindYourWorkSection;
