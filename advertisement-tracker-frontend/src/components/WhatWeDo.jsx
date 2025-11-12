import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { whatWeDoData } from "../data/whatWeDoData";
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import { commanAnimate } from "../animate/commanAnimate";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { flexStart } from "../styles/flexStyles";
const MotionTypography = motion(Typography);
const MotionStack = motion(Stack);
const MotionBox = motion(Box);

const WhatWeDo = () => {
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <MotionStack
      {...commanAnimate.section}
      sx={{
        py: 5,
        bgcolor: "primary.light",
      }}
    >
      <Container disableGutters sx={{ p: 2, }}>
        <Grid container sx={{ mt: 5 }} rowSpacing={2} columnSpacing={3}>
          <Grid size={{ xs: 12, sm: 12, md: 3 }}>
            <MotionTypography
              {...commanAnimate.heading}
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "start",
                fontWeight: 900,
                color: "text.dark",
                textShadow:'2px 0px 2px #000'
              }}
            >
              What we do
            </MotionTypography>
            <MotionTypography
              {...commanAnimate.primary}
              variant="body1"
              gutterBottom
              sx={{
                textAlign: "start",
                fontWeight: 500,
                wordSpacing: 2,
                color: "text.dark",
                textShadow:'1px 0px 1px #000'
              }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.{" "}
              <Typography
                component={Link}
                to='/service'
                variant="body1"
                sx={{ color: "other.dark" }}
              >
                Learn more
              </Typography>
            </MotionTypography>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 12, md: 9 }}
            sx={{
              width: "100%",
              mt: 5,
            }}
          >
            <Grid container rowSpacing={2} columnSpacing={3}>
              {whatWeDoData.map((item) => (
                <Grid
                  key={item.id}
                  size={{ xs: 12, sm: 12, md: 6 }}
                  sx={{
                    p: isMobile ? 2 : 3,
                    bgcolor: "background.other",
                    cursor: "pointer",
                    borderRadius: 5,
                    // boxShadow: "0px 0px 5px #000",
                    "&:hover": { bgcolor: "secondary.light" },
                  }}
                >
                  <MotionTypography
                    {...commanAnimate.heading}
                    variant={isMobile ? "h6" : "h5"}
                    gutterBottom
                    sx={{
                      textAlign: "start",
                      fontWeight: isMobile ? 600 : 900,
                      color: "primary.main",
                    }}
                  >
                    {item.title}
                  </MotionTypography>

                  <MotionTypography
                    {...commanAnimate.text}
                    variant={isMobile ? "body2" : "body1"}
                    gutterBottom
                    sx={{
                      textAlign: "start",
                      fontWeight: 500,
                      color: "text.default",
                    }}
                  >
                    {item.subTitle.split(".").map(
                      (part, index) =>
                        part.trim() && (
                          <React.Fragment key={index}>
                            {part.trim()}.
                            <br />
                          </React.Fragment>
                        )
                    )}
                  </MotionTypography>

                  <Typography
                    variant={isMobile ? "body2" : "body1"}
                    gutterBottom
                    sx={{
                      textAlign: "start",
                      color: "text.default",
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ color: "primary.main", fontWeight: 900 }}
                  >
                    {item.servicesTitle}
                  </Typography>

                  {item.services.map((service, index) => (
                    <MotionBox
                      {...commanAnimate.subtext}
                      key={index}
                      sx={{ ...flexStart, m: 1 }}
                    >
                      <SubdirectoryArrowRightIcon
                        sx={{ color: "primary.main", mr: 1 }}
                      />
                      <Typography
                        variant={isMobile ? "body2" : "body1"}
                        sx={{
                          color: "text.default",
                          textTransform: "capitalize",
                          fontWeight: isMobile ? 500 : 600,
                        }}
                      >
                        {service}
                      </Typography>
                    </MotionBox>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MotionStack>
  );
};

export default WhatWeDo;
