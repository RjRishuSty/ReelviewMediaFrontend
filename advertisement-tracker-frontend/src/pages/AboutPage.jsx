
import React from "react";
import AboutSection from "../components/AboutSection";

const AboutPage = () => {
  // const isTablet = useMediaQuery("(max-width:850px)");
  // const smallMobile = useMediaQuery("(max-width:450px)");

  return (
    <React.Fragment>
      <AboutSection />
      {/* <Box
        sx={{
          width:'100%',
          ...center,
          flexDirection: "column",
          py: 10,
          background: "linear-gradient(135deg, #2b2b81 0%, #00e6e6 100%)",
        }}
      >
        <Typography
          
          variant={smallMobile?"h4":"h3"}
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "primary.contrastText",
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body2"
          sx={{
            width: isTablet ? "100%" : "50%",
            padding:isTablet?1:0,
            textAlign: "center",
            color: "primary.contrastText",
          }}
        >Our mission is to make access to trusted
          professionals easier, faster, and more transparent for everyone.
        </Typography>
        <CustomSlider useIn="aboutService" />
      </Box> */}
    </React.Fragment>
  );
};

export default AboutPage;
