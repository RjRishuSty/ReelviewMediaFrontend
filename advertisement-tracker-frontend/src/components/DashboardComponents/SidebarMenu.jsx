import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import { sidebarMenu } from "../../data/dashboardData/sidebarMenu";
import React from "react";
import LogoutBtn from "../LogoutBtn";

const SidebarMenu = ({ open }) => {
  return (
    <List sx={{ p: 1 }}>
      {sidebarMenu.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          {/* Section Title */}
          {open && (
            <Typography
              variant="subtitle2"
              sx={{
                pl: 2,
                py: 0.5,
                color: "rgba(255,255,255,0.7)",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "0.5px",
              }}
            >
              {section.title}
            </Typography>
          )}

          {/* Section Items */}
          {section.items.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                justifyContent: open ? "initial" : "center",
                px: 2,
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <ListItemIcon
                sx={{ color: "inherit", minWidth: 0, mr: open ? 2 : "auto" }}
              >
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItemButton>
          ))}

          {sectionIndex !== sidebarMenu.length - 1 && (
            <Divider sx={{ my: 1, backgroundColor: "rgba(255,255,255,0.2)" }} />
          )}
          <LogoutBtn/>
        </React.Fragment>
      ))}
    </List>
  );
};

export default SidebarMenu;
