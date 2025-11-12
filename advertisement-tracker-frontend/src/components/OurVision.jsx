import React from "react";
import { visionData } from "../data/visionData";
import { Box, Typography } from "@mui/material";

const OurVision = () => {
  // const isTablet = useMediaQuery("(max-width:900px)");
  return (
    <React.Fragment>
      {visionData.map((item) => (
        <Box sx={{mb:2 }}>
          <Typography gutterBottom variant="h6" sx={{color:'secondary.dark',fontWeight:600,textTransform:'uppercase'}}>{item.title}</Typography>
          <Typography variant="body1" sx={{color:'primary.dark'}}>{item.description}</Typography>
        </Box>
      ))}
    </React.Fragment>
  );
};

export default OurVision;
