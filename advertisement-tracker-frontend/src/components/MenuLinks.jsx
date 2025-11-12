import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { menuLinks } from "../data/menuLinksData";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import { center, flexAllStart } from "../styles/flexStyles";
import { motion } from "framer-motion";
import { linkVariants } from "../animate/header";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const MenuLinks = ({ scrolled, useIn, closeSidebar }) => {
  const minLaptop = useMediaQuery("(max-width:1050px)");
  const location = useLocation();
  const footer = useIn === "footer";
  const sidebar = useIn === "sidebar";
  const home = location.pathname === "/";

  return (
    <Box
      sx={{
        width: "100%",
        ...(footer || sidebar ? flexAllStart : center),
        flexDirection: footer || sidebar ? "column" : null,
      }}
    >
      {menuLinks.map((item, index) => {
        if (item.path === "/" && home) return null;
        const isActive = location.pathname === item.path;

        return (
          <MotionBox
            key={item.id}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.3 }}
          >
            <MotionButton
              size="small"
              component={Link}
              to={item.path}
              whileHover={{
                scale: 1.15,
                y: -3,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
              sx={{
                textTransform: minLaptop ? "capitalize" : "uppercase",
                color: isActive ? "info.main" : scrolled ? "#000" : "white",
                fontWeight: isActive ? 800 : 500,
                letterSpacing: 1,
                textAlign: "start",
                marginBottom: sidebar || footer ? 2 : 0,
                textDecoration: "none",
                cursor: "pointer",
                mx: minLaptop ? 0.7 : 1.5,
                position: "relative",
                background: "transparent",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "0%",
                  height: "2px",
                  bgcolor: scrolled ? "primary.main" : "white",
                  transition: "width 0.3s ease-in-out",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
              onClick={() => {
                if (sidebar && closeSidebar) closeSidebar();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {footer ? (
                <Box sx={{ display: "flex" }}>
                  <CircleIcon
                    fontSize="small"
                    sx={{
                      color: "primary.dark",
                      borderRadius: 5,
                      bgcolor: "#fff",
                      boxShadow: "1px 0px 2px #000",
                      mr: 2,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color:isActive?"primary.dark": "text.dark",
                      fontWeight:isActive?700:'normal',
                      textShadow:'1px 1px 1px #000',
                      "&:hover": {
                        color:
                          isActive || (scrolled && isActive)
                            ? "other.main"
                            : "hover.main",
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              ) : (
                item.name
              )}
            </MotionButton>
          </MotionBox>
        );
      })}
    </Box>
  );
};

export default MenuLinks;
