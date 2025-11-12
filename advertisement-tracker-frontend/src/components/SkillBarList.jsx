import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const SkillBarList = ({ item }) => {
  return (
    <Box key={item.label} sx={{ mb: 2, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {item.label}
        </Typography>
        <Typography variant="body1">{item.percentage}</Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={item.value}
        sx={{
          height: 20,
          borderRadius: 1,
          backgroundColor: "secondary.light",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "secondary.dark",
          },
        }}
      />
    </Box>
  );
};

export default SkillBarList;
