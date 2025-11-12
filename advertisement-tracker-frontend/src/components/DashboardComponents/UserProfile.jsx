import { Avatar, Typography } from "@mui/material";
import React from "react";
import userImg from "../../assets/user.png";
import { useSelector } from "react-redux";

const UserProfile = ({ open }) => {
  const { full_name, email } = useSelector((state) => state.auth.user);
  return (
    <>
      <Avatar
        alt="User Profile"
        src={userImg}
        sx={{
          width: open ? 70 : 50,
          height: open ? 70 : 50,
          mb: 1,
          transition: "0.3s",
        }}
      />
      {open && (
        <>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {full_name}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {email}
          </Typography>
        </>
      )}
    </>
  );
};

export default UserProfile;
