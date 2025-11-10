import { Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import { flexStart } from "../../styles/flexStyles";

const CardComponent = ({ icon, label }) => {
  return (
    <Card
      sx={(theme)=>({
        width: "100%",
        background:theme.palette.background.custom,
        p: 2,
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
        },
      })}
    >
      <CardContent sx={{ ...flexStart }}>
        <IconButton
          sx={{
            bgcolor: "#fff",
            width: 50,
            height: 50,
            mr: 2,
            "&:hover": { bgcolor: "#ccc" },
          }}
        >
          {icon}
        </IconButton>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ color: "primary.contrastText", fontWeight: 500 }}
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(CardComponent);
