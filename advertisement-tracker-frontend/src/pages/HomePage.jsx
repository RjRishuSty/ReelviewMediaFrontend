import React from "react";
import { Container, Typography } from "@mui/material";
import CustomSlider from "../components/Swiper/CustomSlider";
import CommonSection from "../components/CommonSection";
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
      <WhoWeAre />
      <WhatWeDo />
      <CommonSection useIn='whyChooseUs' />
      <OurTeam />
    </React.Fragment>
  );
};

export default HomePage;
