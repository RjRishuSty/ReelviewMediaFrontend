import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/reelview.mp4";
import { center, startCenter } from "../styles/flexStyles";
import { motion } from "framer-motion";
import { heroSectionAnimation } from "../animate/heroSectionAnimate";


const MotionGrid = motion(Grid);
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

const HeroVideo = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef(0);

  const isMobile = useMediaQuery("(max-width:520px)");
  const isTablet = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(scrollRef.current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 400, 1);
  const videoHeight = 250 + progress * 200;
  const videoScale = 1 + progress * 0.05;
  const videoWidth =
    scrollY > 100 && isTablet ? "98%" : scrollY > 100 ? "80%" : "100%";

  const bottomSpacing = scrollY > 200 ? 19 : 0;
  return (
    <Box
      sx={{
        overflow: "visible",
        pb: `${bottomSpacing}px`,
        position: "relative",
      }}
    >
      {isMobile && <Divider sx={{ borderColor: "#fff", py: 2 }} />}
      <Container maxWidth="xl" sx={{ px: isMobile ? 1.7 : 5 }}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={4}
          sx={{ width: "100%", alignItems: "start" }}
        >
          <MotionGrid
          variants={heroSectionAnimation.text}
            initial="initial"
            whileInView="whileInView"
            viewport={heroSectionAnimation.text.viewport}
            size={{
              xs: 12,
              sm: scrollY > 100 ? 12 : 7,
              md: scrollY > 100 ? 12 : 8,
            }}
            sx={{
              ...startCenter,
              flexDirection: "column",
              transition: "all 0.5s ease",
            }}
          >
            <MotionTypography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "primary.text",
                textTransform: "capitalize",
              }}
            >
              Discover the Full Range of Services We Provide to Make Life Easier
            </MotionTypography>
            <MotionTypography
              gutterBottom
              variant="body1"
              sx={{
                color: "primary.text",
              }}
            >
              From hotels and hospitals to community halls, we provide reliable
              services designed to simplify your life and meet all your
              essential needs seamlessly.
            </MotionTypography>
          </MotionGrid>
          <MotionGrid
           variants={heroSectionAnimation.video}
            initial="initial"
            whileInView="whileInView"
            viewport={heroSectionAnimation.video.viewport}
            size={{
              xs: 12,
              sm: scrollY > 100 ? 12 : 5,
              md: scrollY > 100 ? 12 : 4,
            }}
            sx={{ ...center, mt: scrollY ? 5 : 0, transition: "all 0.6s ease" }}
          >
            <MotionBox
              sx={{
                width: videoWidth,
                height: videoHeight,
                borderRadius: 5,
                transform: `scale(${videoScale})`,
                transition: "all 0.5s ease",
                // boxShadow: "0px  0px 20px rgba(255, 255, 255, 0.3)",
                overflow: "hidden",
              }}
            >
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  // borderRadius: 14,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </MotionBox>
          </MotionGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroVideo;
