import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FacebookIcon fontSize="medium"/>,
    url: "https://facebook.com/",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon fontSize="medium"/>,
    url: "https://instagram.com/",
    color: "#E1306C",
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon fontSize="medium"/>,
    url: "https://youtube.com/",
    color: "#FF0000",
  },
  {
    name: "Twitter",
    icon: <TwitterIcon fontSize="medium"/>,
    url: "https://twitter.com/",
    color: "#1DA1F2",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon fontSize="medium"/>,
    url: "https://linkedin.com/",
    color: "#0077B5",
  },
];

const SocialMediaIcons = ({useIn}) => {
  const sidebar = useIn === 'sidebar';
  const footer = useIn === 'footer';
  return (
    <>
      {socialLinks.map((item) => (
        <Tooltip title={item.name} key={item.name}>
          <IconButton
            component={Link}
            to={item.url}
            target="_blank"
            sx={{
              bgcolor:'background.paper',
              color: item.color,
              mr:2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)",
                backgroundColor: "primary.light",
              },
            }}
          >
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </>
  );
};

export default SocialMediaIcons;
