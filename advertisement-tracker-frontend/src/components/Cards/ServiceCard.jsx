import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { center, spaceBetween } from "../../styles/flexStyles";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { serviceCardAnimation } from "../../animate/serviceCardAnimate";

const MotionCard = motion(Card);

const ServiceCard = ({ item }) => {
  const smallMobile = useMediaQuery("(max-width:400px)");
  const location = useLocation();
  const aboutPage = location.pathname === "/about";

  return (
    <MotionCard
      initial={serviceCardAnimation.initial}
      whileInView={serviceCardAnimation.whileInView}
      viewport={serviceCardAnimation.viewport}
      whileHover={serviceCardAnimation.whileHover}
      transition={serviceCardAnimation.transition}
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        p: aboutPage ? 0 : 3,
        ...(aboutPage ? {} : center),
        flexDirection: smallMobile || aboutPage ? "column" : "row",
        filter: "brightness(100%)",
        background: theme.palette.background.custom,
        cursor: "pointer",
        overflow: "hidden",
      })}
    >
      {/* ✅ If About Page → show image */}
      {aboutPage ? (
        <Box
          component="img"
          src={item.img}
          alt={item.label}
          sx={{
            border: "2px solid red",
            width: "100%",
            height: 180,
            objectFit: "cover",
          }}
        />
      ) : (
        <IconButton
          sx={{
            bgcolor: "#f2f2f2",
            p: 2,
            mr: smallMobile ? 0 : 1.5,
          }}
        >
          {item.icon}
        </IconButton>
      )}

      <CardContent
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            ...(smallMobile ? center : ""),
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              textShadow:'2px 2px 3px #000',
              textTransform: "uppercase",
              letterSpacing: 1,
              textAlign: smallMobile ? "center" : "start",
              color: "primary.text",
            }}
          >
            {item.label}
          </Typography>

          {!aboutPage && (
            <Typography
              gutterBottom
              variant="body2"
              sx={{
                fontWeight: 600,
                textShadow:'2px 2px 3px #000',
                color: "primary.text",
                textAlign: smallMobile ? "center" : "start",
              }}
            >
              Our Partners: {item.numberOfPartner}
            </Typography>
          )}
          {!aboutPage && (
            <Rating
              name="read-only"
              value={item.rating}
              readOnly
              size="medium"
            />
          )}
        </Box>
        <Box>
          {/* ✅ Only show description & partners on About Page */}
          {aboutPage && (
            <>
              <Typography
                gutterBottom
                variant="body2"
                sx={{
                  mt: 1,
                  color: "text.secondary",
                  textAlign: smallMobile ? "center" : "start",
                }}
              >
                {item.description}
              </Typography>

              <Box sx={{ ...spaceBetween }}>
                <Typography
                  variant={"body2"}
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    color: "primary.text",
                    textAlign: smallMobile ? "center" : "start",
                  }}
                >
                  Our Partners: {item.numberOfPartner}
                </Typography>
                <Rating
                  name="read-only"
                  value={item.rating}
                  readOnly
                  size="medium"
                />
              </Box>
            </>
          )}
        </Box>
      </CardContent>
    </MotionCard>
  );
};

export default React.memo(ServiceCard);
