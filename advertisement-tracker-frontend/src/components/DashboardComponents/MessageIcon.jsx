import React from "react";
import { IconButton, Badge, Tooltip } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MessageIcon = () => {
  const unreadCount = 3; 

  return (
    <Tooltip title="Messages" sx={{mr:1}}>
      <IconButton color="inherit">
        <Badge badgeContent={unreadCount} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default MessageIcon;
