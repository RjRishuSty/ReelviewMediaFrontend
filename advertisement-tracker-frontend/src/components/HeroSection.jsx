import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { center } from "../styles/flexStyles";
import HeroVideo from "./HeroVideo";
import { motion } from "framer-motion";
import { heroSectionAnimation } from "../animate/heroSectionAnimate";

const MotionStack = motion(Stack);
const MotionTypography = motion(Typography);

const HeroSection = () => {
  const minLaptop = useMediaQuery("(max-width:950px)");
  const isTablet = useMediaQuery("(max-width:725px)");
  const ismobile = useMediaQuery("(max-width:520px)");

  return (
    <MotionStack
      component="section"
      variants={heroSectionAnimation.container}
      initial="initial"
      animate="animate"
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        // border:'2px solid red',
        mt:8,
        height: "auto",
        pb: 10,
        bgcolor: "primary.main",
        ...center,
      }}
    >
      <Container sx={{ mt: 10, ...center, flexDirection: "column" }}>
        <MotionTypography
          variants={heroSectionAnimation.heading}
          gutterBottom
          variant="h1"
          sx={{
            color:'primary.text',
            fontSize: ismobile
              ? "3.5rem"
              : isTablet
              ? "4rem"
              : minLaptop
              ? "5.5rem"
              : "6rem",
            textAlign: "center",
            fontWeight: 900,
            textShadow:'2px 0px 3px #000'
          }}
        >
          Let’s Grow{" "}
          <MotionTypography
            variants={heroSectionAnimation.gradientText}
            variant="h1"
            component="span"
            sx={{
              color:'primary.text',
              fontSize: ismobile
                ? "3.5rem"
                : isTablet
                ? "4rem"
                : minLaptop
                ? "5.5rem"
                : "6rem",
              fontWeight: 900,
              lineHeight: 1.4,
              textShadow:'2px 0px 3px #000'
            }}
          >
            Your Business Digitally
          </MotionTypography>
        </MotionTypography>
        <MotionTypography
          variants={heroSectionAnimation.subtext}
          gutterBottom
          sx={{
            width: isTablet ? "100%" : minLaptop ? "90%" : "75%",
            mt: 1,
            textAlign: ismobile ? "start" : "center",
            color: "primary.text",
            fontSize: "1.3rem",
            fontWeight: 900,
            letterSpacing: 0.5,
            wordSpacing: 0.7,
            mb: 10,
          }}
        >
          Grow your business faster with smart{" "}
          <Typography
            component="span"
            sx={{
              color: "other.light",
              fontSize: "1.3rem",
              fontWeight: 900,
              borderRadius: 5,
              p: 0.5,
              textShadow:'0px 0px 1px #000'
            }}
          >
            marketing strategies
          </Typography>
          ,{" "}
          <Typography
            component="span"
            sx={{
              color: "other.light",
              fontSize: "1.3rem",
              fontWeight: 900,
              borderRadius: 5,
              p: 0.5,
            }}
          >
            powerful digital campaigns
          </Typography>
          , and a team focused on real results.
        </MotionTypography>
      </Container>
      <HeroVideo />
    </MotionStack>
  );
};

export default HeroSection;
