import { Button, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { clearAuth } from "../redux_store/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../utils/apiBaseUrl";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutBtn = ({ handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/auth/logout`, {
        withCredentials: true,
      });
      console.log("Logout", response);
      dispatch(clearAuth());
      handleClose();
      navigate("/login");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <MenuItem
      component={Button}
      startIcon={<LogoutIcon sx={{ color: "#e57373" }} />}
      onClick={handleLogout}
      sx={{ textTransform: "capitalize", p: 1 }}
    >
      <Typography textAlign="center">Logout</Typography>
    </MenuItem>
  );
};

export default React.memo(LogoutBtn);
