import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { center } from "../../styles/flexStyles";
import { motion } from "framer-motion";
import { commanAnimate } from "../../animate/commanAnimate";

const MotionCard = motion(Card);

const VisionCard = ({ item }) => {
  return (
    <>
      <AdsClickIcon
        sx={{
          color: "background.main",
          fontSize: "4rem",
          position: "absolute",
          top: -30,
          left: -30,
          transform: "rotate(-10deg)",
          filter: "brightness(100%)"
        }}
      />
      <MotionCard
        {...commanAnimate.card}
        sx={{
          width: "100%",
          cursor: "pointer",
          p: 3,
          bgcolor: 'background.main'
        }}
      >
        <CardContent sx={{ ...center, flexDirection: "column" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: 'primary.dark',
              textShadow: "1px 0px 1px #000",
              textAlign: "center",
            }}
          >
            {item.title}
          </Typography>
          <Divider
            sx={{
              borderColor: "primary.dark",
              borderWidth: "2px",
              width: "80%",
              mb: 3,
              borderRadius: 5,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "text.dark",
              lineHeight: 1.5,
              fontWeight: 500,
              letterSpacing: 0.5,
            }}
          >
            {item.description}
          </Typography>
        </CardContent>
      </MotionCard>
    </>
  );
};

export default React.memo(VisionCard);
