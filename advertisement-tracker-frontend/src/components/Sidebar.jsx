import { Box, Divider, Drawer } from "@mui/material";
import MenuLinks from "./MenuLinks";
import { center } from "../styles/flexStyles";
import SocialMediaIcons from "./SocialMediaIcons ";

const Sidebar = ({ isOpen, closeSidebar,scrolled }) => {
  return (
    <Drawer
      anchor="top"
      open={isOpen}
      hideBackdrop
      transitionDuration={500}
      PaperProps={{
        sx: {
          bgcolor: "primary.main",
          width: "100%",
          top: 65,
          height: "calc(100vh - 65px)",
          borderRadius: "0 0 20px 20px",
          boxShadow: "none",
          transition: "transform 0.5s ease",
        },
      }}
      ModalProps={{
        keepMounted: true,
        
      }}
    >
      <Box sx={{ mt: 1}}>
        <Divider sx={{ borderColor:scrolled?'primary.main': "#fff" }} />
        <Box
          sx={{
            py: 3,
            px: 2,
            display: "flex",
            justifyItems: "start",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <MenuLinks useIn="sidebar" closeSidebar={closeSidebar} />
        </Box>
        <Box
          sx={{
            ...center,
            mt:5
          }}
        >
          <SocialMediaIcons useIn='sidebar' />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
