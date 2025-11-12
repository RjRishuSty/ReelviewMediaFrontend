
import React from "react";
import AboutSection from "../components/AboutSection";
import { Box, Stack } from "@mui/material";
import CommonSection from "../components/CommonSection";
import FindYourWorkSection from "../components/FindYourWorkSection";

const AboutPage = () => {

  return (
    <Stack component='section' sx={{mt:11.5,position:'relative'}}>
      <AboutSection />
      <CommonSection useIn="whatWeOffer"/>
      <FindYourWorkSection/>
    </Stack>
  );
};

export default AboutPage;
