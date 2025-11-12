import { Card, CardContent, Typography, Chip } from "@mui/material";
import React from "react";
import { spaceBetween } from "../../styles/flexStyles";

const DashboardCard = ({ item }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: 140,
        p: 3,
        borderRadius: "20px",
        background: item.bg,
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardContent sx={{ ...spaceBetween, flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#222" }}>
          {item.title}
        </Typography>

        <Typography variant="body2" sx={{ color: "#555" }}>
          {item.subtitle}
        </Typography>

        <Chip
          label="In Bundle"
          size="small"
          sx={{
            mt: 1,
            bgcolor: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(4px)",
            fontWeight: 500,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
