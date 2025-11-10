import React, { useState } from "react";
import { authInputsFields } from "../data/authData";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const AuthForm = ({ formData,onChange }) => {
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const loginPage = location.pathname === "/login";
  const loginFields = authInputsFields.filter(
    (item) => item.id === "email" || item.id === "password"
  );
  const fieldsToRender = loginPage ? loginFields : authInputsFields;

  const handleTogglePassword = (fieldId) => {
    if (fieldId === "password") {
      setShowPassword((prev) => !prev);
    } else if (fieldId === "confirmPassword") {
      setShowConfirmPassword((prev) => !prev);
    }
  };
  return (
    <Grid container columnSpacing={2}>
      {fieldsToRender.map((item) => {
        const isPasswordField =
          item.id === "password" || item.id === "confirmPassword";
        return (
          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: loginPage ? 12 : isPasswordField ? 6 : 12,
            }}
            key={item.id}
          >
            <TextField
              fullWidth
              onChange={onChange}
              label={item.label}
              id={item.id}
              value={formData[item.id]}
              placeholder={item.placeholder}
              autoComplete={item.autoComplete}
              variant="outlined"
              margin="normal"
              type={
                item.id === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : item.id === "confirmPassword"
                  ? showConfirmPassword
                    ? "text"
                    : "password"
                  : item.type
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{item.icon}</InputAdornment>
                ),
                endAdornment: isPasswordField && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleTogglePassword(item.id)}
                      edge="end"
                    >
                      {item.id === "password" ? (
                        showPassword ? (
                          <VisibilityOff fontSize="small" />
                        ) : (
                          <Visibility fontSize="small" />
                        )
                      ) : showConfirmPassword ? (
                        <VisibilityOff fontSize="small" />
                      ) : (
                        <Visibility fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default React.memo(AuthForm);
