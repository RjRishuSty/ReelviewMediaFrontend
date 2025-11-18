import { Box, Button } from "@mui/material";
import { API_BASE_URL } from "../utils/apiBaseUrl";

const GoogleButton = () => { 
 
  const handleGoogleLogin = () => {
   
    window.location.href = `${API_BASE_URL}/auth/google`;
  };
  return (
    <Button
      fullWidth
      variant="outlined"
      size="large"
      onClick={handleGoogleLogin}
      sx={{
        mt: 3,
        borderRadius: 9,
        textTransform: "none",
        fontWeight: 500,
        color: "#3c4043",
        backgroundColor: "#fff",
        borderColor: "#dadce0",
        boxShadow:
          "0 1px 3px rgba(60, 64, 67, 0.3), 0 1px 1px rgba(60, 64, 67, 0.15)",
        "&:hover": {
          backgroundColor: "#f8f9fa",
          boxShadow:
            "0 1px 3px rgba(60, 64, 67, 0.3), 0 1px 1px rgba(60, 64, 67, 0.15)",
          borderColor: "#dadce0",
        },
        "&:active": {
          backgroundColor: "#f1f3f4",
        },
      }}
    >
      <Box
        component="img"
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google Logo"
        sx={{
          width: 20,
          height: 20,
          mr: 1,
        }}
      />
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;
