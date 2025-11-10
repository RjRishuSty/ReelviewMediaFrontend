import { Email, Lock, Person } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Typography } from "@mui/material";

export const authInputsFields = [
  {
    id: "full_name",
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
    icon: <Person fontSize="small" />,
    autoComplete: "name",
  },
  {
    id: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    icon: <Email fontSize="small" />,
    autoComplete: "email",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    icon: <Lock fontSize="small" />,
    autoComplete: "new-password",
  },
  {
    id: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Re-enter your password",
    type: "password",
    icon: <Lock fontSize="small" />,
    autoComplete: "new-password",
  },
];

export const authPageData = [
  {
    id: "login",
    heading: "Login",
    description:
      "Access your account to manage your profile, projects, and settings securely.",
    buttonLabel: "Login",
    icon: <LoginIcon />,
    bottomText: (
      <Typography variant="body2" sx={{mt:4}}>
        Not registered yet?{" "}
        <Typography
          component={Link}
          to="/register"
          variant="body2"
          sx={{ color: "primary.main", textDecoration: "none" }}
        >
          Create an account
        </Typography>
      </Typography>
    ),
    rightHeading: "Welcome back!",
    rightSubtext: "Let’s get you signed in and ready to continue your journey.",
  },
  {
    id: "register",
    heading: "Create Account",
    description: "Join us and start managing your projects easily.",
    buttonLabel: "Register",
    icon: <PersonAddAltIcon />,
    bottomText: (
      <Typography variant="body2" sx={{mt:4}}>
        Already have an account?{" "}
        <Typography
          component={Link}
          to="/login"
          variant="body2"
          sx={{ color: "primary.main", textDecoration: "none" }}
        >
          Login here
        </Typography>
      </Typography>
    ),
    rightHeading: "Welcome!",
    rightSubtext: "Let’s create your account and get started.",
  },
];
