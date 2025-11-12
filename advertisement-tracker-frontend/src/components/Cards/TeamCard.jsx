import React from "react";
import { Card, Box, CardContent, Typography } from "@mui/material";

const ReviewCard = ({ item }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: 400,
        borderRadius: "0 0 16px 16px",
        borderTopLeftRadius: "50% 40%",
        borderTopRightRadius: "50% 40%",
        pt: 2,
        overflow: "hidden",
        bgcolor: "primary.main",
        position: "relative",
        cursor: "pointer",
        "&:hover .imageOverlay": {
          filter: "brightness(40%)", // darken image
          transform: "scale(1.05)", // subtle zoom
        },
        "&:hover .textContent": {
          opacity: 1,
          transform: "translateY(0)",
        },
        transition: "all 0.4s ease-in-out",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={item.userImg}
        alt={item.name}
        className="imageOverlay"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          borderTopLeftRadius: "100%",
          borderTopRightRadius: "100%",
          transition: "all 0.5s ease",
        }}
      />

      {/* Overlay Text */}
      <CardContent
        className="textContent"
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 50,
          textAlign: "center",
          opacity: 0, // hidden initially
          transform: "translateY(30px)",
          transition: "all 0.4s ease",
        }}
      >
        <Typography variant="h5" sx={{ color: "#fff", fontWeight: 700, mb: 1 }}>
          {item.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#ddd", fontWeight: 500 }}>
          {item.role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(ReviewCard);
