import { Box } from "@mui/material";
import React from "react";

const ReelViewGoogleMap = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 300, md: 500 },
      }}
    >
      <iframe
        title="ReelView Media Pvt. Ltd."
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115133.01634131288!2d85.06064120856574!3d25.608014355214312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbd7c4c6bb7ca4d%3A0x5f1ce0dd854b47df!2sReelview%20Media!5e0!3m2!1sen!2sin!4v1762860791637!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{
          border: 0,
          filter: "grayscale(20%) contrast(105%) brightness(95%)",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default ReelViewGoogleMap;
