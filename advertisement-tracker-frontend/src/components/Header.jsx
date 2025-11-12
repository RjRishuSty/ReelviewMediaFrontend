import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import Sidebar from "./Sidebar";
import CloseIcon from "@mui/icons-material/Close";
import { center } from "../styles/flexStyles";
import { motion } from "framer-motion";
import { buttonVariants, navVariants } from "../animate/header";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Header = () => {
  const minLaptop = useMediaQuery("(max-width:1050px)");
  const isTablet = useMediaQuery("(max-width:800px)");
  const [scrolled, setScrolled] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  // Detect scroll...........
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //* This handler handle sidebar open/close.

  const toggleSidebar = useCallback(() => {
    console.log("Click..");
    setOpenSideBar((prev) => !prev);
  }, []);

  // Close sidebar (pass to MenuLinks)
  const closeSidebar = useCallback(() => {
    setOpenSideBar(false);
  }, []);

  return (
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: scrolled ? "black" : "none",
          bgcolor: scrolled ? "background.other" : "primary.main",
          transition: "background-color 0.5s ease, padding 0.5s ease",
          padding: scrolled ? "0.5rem 0" : "0.3rem 0",
        }}
      >
        <Toolbar>
          <Logo scrolled={scrolled} />
          <Box sx={{ marginLeft: "auto" }}>
            {isTablet ? (
              <IconButton
                onClick={toggleSidebar}
                sx={{
                  bgcolor: scrolled ? "primary.main" : "#fff",
                  "&:hover": { bgcolor: scrolled ? "primary.main" : "#fff" },
                }}
              >
                {openSideBar ? (
                  <CloseIcon
                    fontSize="medium"
                    sx={{
                      color: scrolled ? "primary.contrastText" : "primary.main",
                      fontWeight: 800,
                    }}
                  />
                ) : (
                  <MenuTwoToneIcon
                    fontSize="medium"
                    sx={{
                      color: scrolled ? "primary.contrastText" : "primary.main",
                      fontWeight: 800,
                    }}
                  />
                )}
              </IconButton>
            ) : (
              <Box sx={{ ...center }}>
                <MotionBox
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  sx={{ ...center }}
                >
                  <MenuLinks scrolled={scrolled} />
                </MotionBox>
                <MotionButton
                  size={minLaptop ? "small" : "large"}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    boxShadow: "0px 5px 15px rgba(255,255,255,0.3)",
                    transition: {
                      duration: 0.15,
                      ease: "easeOut",
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  variant={scrolled ? "contained" : "outlined"}
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 800,
                    ml: 5,
                    border: !scrolled && "2px solid #fff",
                    color: "#fff",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": scrolled
                      ? {
                          bgcolor: "transparent",
                          border: "2px solid #2b2b81",
                          color: "primary.main",
                        }
                      : {
                          bgcolor: "#fff",
                          color: "primary.main",
                        },
                  }}
                  startIcon={<CallTwoToneIcon />}
                >
                  Get in Touch
                </MotionButton>
              </Box>
            )}
          </Box>
        </Toolbar>
        <Sidebar
          isOpen={openSideBar}
          closeSidebar={closeSidebar}
          scrolled={scrolled}
        />
      </AppBar>
  );
};

export default Header;
