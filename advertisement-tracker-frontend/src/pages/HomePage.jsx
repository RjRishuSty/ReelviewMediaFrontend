import React from "react";
import { Container, Typography } from "@mui/material";
import CustomSlider from "../components/Swiper/CustomSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import WhoWeAre from "../components/WhoWeAre";
import OurVision from "../components/OurVision";
import WhatWeDo from "../components/WhatWeDo";
import HeroSection from "../components/HeroSection";
import ExploreServices from "../components/ExploreServices";
import OurTeam from "../components/OurTeam";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ExploreServices />
      <WhoWeAre />
      <OurVision />
      <WhatWeDo />
      <WhyChooseUs />
      {/* <OurTeam/> */}

      <Container maxWidth="xl" sx={{ py:10}}>
        <Typography
          gutterBottom
          variant="h4"
          sx={{ color: "text.text", fontWeight: 700, textAlign: "center" }}
        >
          Genuine reviews from Customers
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.light", textAlign: "center" }}
        >
          Each listing is designed to be clear and concise, providing customers
        </Typography>
        <CustomSlider useIn="review" />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
