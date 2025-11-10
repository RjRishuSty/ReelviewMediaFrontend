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
          color: "#cc0096",
          fontSize: "4rem",
          position: "absolute",
          top: -30,
          left: -30,
          transform: "rotate(-10deg)",
        }}
      />
      <MotionCard
        {...commanAnimate.card}
        sx={(theme) => ({
          width: "100%",
          cursor: "pointer",
          p: 3,
          background: theme.palette.background.custom,
        })}
      >
        <CardContent sx={{ ...center, flexDirection: "column" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#fff",
              textShadow: "3px 0px 3px #000",
              textAlign: "center",
            }}
          >
            {item.title}
          </Typography>
          <Divider
            sx={{
              borderColor: "#fff",
              borderWidth: "2px",
              width: "80%",
              mb: 3,
              borderRadius: 5,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
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
