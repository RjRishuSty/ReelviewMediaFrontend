import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Logo from "../components/Logo";
import { center, flexStart } from "../styles/flexStyles";
import authBg from "../assets/authbg.png";
import GoogleButton from "../components/GoogleButton";
import AuthForm from "../components/AuthForm";
import { useLocation, useNavigate } from "react-router-dom";
import { authPageData } from "../data/authData";
import { useState } from "react";
import { handleLoginSubmit, handleRegisterSubmit } from "../utils/authHandler";
import { useDispatch } from "react-redux";

const AuthPage = () => {
  const laptop = useMediaQuery("(max-width:1136px)");
  const isTablet = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:600px)");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const loginPage = location.pathname === "/login";
  const currentAuthPageData = authPageData.find((item) =>
    loginPage ? item.id === "login" : item.id === "register"
  );
  const {
    heading,
    description,
    buttonLabel,
    icon,
    bottomText,
    rightHeading,
    rightSubtext,
  } = currentAuthPageData;
  return (
    <Stack sx={{ height:'auto' }}>
      <Grid container sx={{height: "100vh"}}>
        <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ p: isMobile ? 1 : 3,height:'100%'}}>
          <Logo useIn="login" />
          <Card
            component="form"
            onSubmit={(e) =>
              loginPage
                ? handleLoginSubmit(e, formData, navigate, dispatch)
                : handleRegisterSubmit(e, formData, navigate, dispatch)
            }
            sx={{
              bgcolor: "transparent",
              boxShadow: "none",
              px: loginPage? isMobile? 0  : isTablet? 5: laptop ? 2: 9:isMobile?0: isTablet?5:laptop? 1: 3,
              py: 5,
            }}
          >
            <CardContent>
              <Box
                sx={{
                  width: "100%",
                  ...(isTablet ? center : flexStart),
                  alignItems: isTablet ? "center" : "start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  gutterBottom
                  variant={isMobile?"h5":"h4"}
                  sx={{
                    fontWeight: 900,
                  }}
                >
                  {heading}
                </Typography>
                <Typography
                  gutterBottom
                  variant="title1"
                  sx={{
                    color: "text.light",
                    textAlign: isTablet ? "center" : "start",
                  }}
                >
                  {description}
                </Typography>
                {loginPage && <GoogleButton />}
              </Box>

              {loginPage && (
                <Box sx={{ ...center, my: 3 }}>
                  <Divider sx={{ borderColor: "#ccc", width: isMobile?"10%":"30%" }} />
                  <Typography
                    component="p"
                    variant={isMobile ? "caption" : "body2"}
                    sx={{ color: "text.light", mx: 1 }}
                  >
                    Sign in with email
                  </Typography>
                  <Divider sx={{ borderColor: "#ccc", width: isMobile?"10%":"30%" }} />
                </Box>
              )}
              <Box sx={{width:'100%', mt: loginPage ? 1 : isMobile?1:3.5 }}>
                <AuthForm formData={formData} onChange={handleChange} />
              </Box>
            </CardContent>
            <CardActions sx={{ ...center }}>
              <Button
                endIcon={icon}
                type="submit"
                size="large"
                variant="contained"
                
              >
                {buttonLabel}
              </Button>
            </CardActions>
            {bottomText}
          </Card>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{
            height: "auto",
            bgcolor: "primary.main",
            p: 3,
            ...center,
            flexDirection: "column",
            backgroundImage: `url(${authBg})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: { xs: "none", sm: "none", md: "flex" },
          }}
        >
          <Typography
            gutterBottom
            variant="h2"
            sx={{ fontWeight: 800, color: "primary.contrastText" }}
          >
            {rightHeading}
          </Typography>
          <Typography variant="body1" sx={{ color: "primary.contrastText" }}>
            {rightSubtext}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AuthPage;
