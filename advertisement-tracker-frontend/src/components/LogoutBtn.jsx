import { MenuItem, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { clearAuth } from "../redux_store/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../utils/apiBaseUrl";

const LogoutBtn = ({ handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/auth/logout`, {
        withCredentials: true,
      });
      console.log("logut", response);
      dispatch(clearAuth());
      handleClose();
      navigate("/login");
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <MenuItem onClick={handleLogout}>
      <Typography textAlign="center">Logout</Typography>
    </MenuItem>
  );
};

export default React.memo(LogoutBtn);
