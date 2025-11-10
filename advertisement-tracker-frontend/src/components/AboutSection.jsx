import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { achievementData } from "../data/aboutAchievementData";
import { center } from "../styles/flexStyles";
import { motion } from "framer-motion";
import { commanAnimate } from "../animate/commanAnimate";


const MotionContainer = motion(Container);
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const MotionCard = motion(Card);



const AboutSection = () => {
  const isTablet = useMediaQuery("(max-width:850px)");

  const isMobile = useMediaQuery("(max-width:500px)");
  const smallMobile = useMediaQuery("(max-width:450px)");

  return (
    <MotionContainer
    {...commanAnimate.section}
      sx={{
        py:10,
        mt:10,
        ...center,
        flexDirection: "column",
      }}
    >
      <Box sx={{ p: 1, ...center, flexDirection: "column" }}>
        <MotionTypography
        {...commanAnimate.heading}
        gutterBottom
          variant={isMobile ? "h4" : "h3"}
          sx={{ fontWeight: 700, textAlign: "center", color: "secondary.main" }}
        >
          About Us
        </MotionTypography>
        <MotionTypography
        {...commanAnimate.text}
          variant="body1"
          sx={{
            width: isTablet ? "100%" : "80%",
            textAlign: "center",
            mb: 5,
            color: "text.text",
          }}
        >
          We are dedicated to connecting people with reliable local services
          that simplify everyday life.
        </MotionTypography>
      </Box>
      <Grid container rowSpacing={3} columnSpacing={4}>
        <Grid
          size={{ xs: 12, sm: 12, md: 7 }}
          sx={{
            boxShadow: "0px 0px 5px black",
            p: smallMobile ? 2 : 5,
            borderRadius: 2,
          }}
        >
          <MotionTypography
          {...commanAnimate.subtext}
            gutterBottom
            variant="body1"
            sx={{
              fontWeight: 600,
              textTransform: "capitalize",
              color: "text.text",
            }}
          >
            How it started
          </MotionTypography>
          <MotionTypography
          {...commanAnimate.heading}
            variant={smallMobile ? "h4" : isTablet ? "h3" : "h2"}
            sx={{
              mt: 2.5,
              fontWeight: 700,
              textTransform: "capitalize",
              background:
                "linear-gradient(90deg, #FF6FD8 0%, #9D60FB 50%, #4C9EFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Trusted Partner{" "}
            <Typography
              component="span"
              variant={smallMobile ? "h4" : isTablet ? "h3" : "h2"}
              sx={{ fontWeight: 700,}}
            >
              {" "}
              for Every Service Need
            </Typography>
          </MotionTypography>
          <MotionTypography {...commanAnimate.text} variant="body1" sx={{ color: "text.text", mt: 5 }}>
            We are a comprehensive service provider dedicated to simplifying
            your life by offering solutions across multiple domains under one
            roof. From healthcare facilities to hospitality, technology support
            to legal services, we've built a diverse portfolio designed to meet
            the everyday needs of individuals and businesses alike.
          </MotionTypography>
          <MotionTypography {...commanAnimate.text}
            variant="body1"
            sx={{ mt: 3, color: "text.text", fontWeight: 500 }}
          >
            Our mission is simple: to be the single point of contact for all
            your service requirements, delivering quality, reliability, and
            convenience in everything we do
          </MotionTypography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 5 }}>
          <Box sx={{ position: "relative" }}>
            <MotionBox
            {...commanAnimate.image}
              component="img"
              src="https://images.pexels.com/photos/7682351/pexels-photo-7682351.jpeg"
              sx={{
                width: "100%",
                height: 300,
                borderRadius: 5,
                objectFit: "cover",
                objectPosition: "0px 30%",
              }}
            />
            <Grid container columnSpacing={2} rowSpacing={2} sx={{ mt: 3 }}>
              {achievementData.map((item) => (
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <MotionCard
                  {...commanAnimate.card}
                    key={item.id}
                    sx={(theme)=>({
                      background:theme.palette.background.custom,
                      cursor: "pointer",
                      transition: "all 0.9s ease-in-out",
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                      },
                    })}
                  >
                    <CardContent>
                      <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        {item.number}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 700,
                          textTransform: "uppercase",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </CardContent>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MotionContainer>
  );
};

export default AboutSection;
