import { enqueueSnackbar } from "notistack";
import { API_BASE_URL } from "../utils/apiBaseUrl";
import axios from "axios";
import { setAuthData } from "../redux_store/slices/auth.slice";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const handleLoginValidator = ({ email, password }) => {
  if (!email) {
    enqueueSnackbar("Email is required.", { variant: "error" });
    return false;
  }
  if (!emailRegex.test(email)) {
    enqueueSnackbar("Please enter a valid email address.", {
      variant: "error",
    });
    return false;
  }
  if (!password) {
    enqueueSnackbar("Password is required.", { variant: "error" });
    return false;
  }
  if (password.length < 6) {
    enqueueSnackbar("Password must be at least 6 characters.", {
      variant: "warning",
    });
    return false;
  }
  return true;
};

export const handleRegisterValidator = ({
  full_name,
  email,
  password,
  confirmPassword,
}) => {
  if (!full_name) {
    enqueueSnackbar("Full name is required.", { variant: "error" });
    return false;
  }
  if (!email) {
    enqueueSnackbar("Email is required.", { variant: "error" });
    return false;
  }
  if (!emailRegex.test(email)) {
    enqueueSnackbar("Invalid email address format.", { variant: "error" });
    return false;
  }
  if (!password) {
    enqueueSnackbar("Password is required.", { variant: "error" });
    return false;
  }
  if (password.length < 6) {
    enqueueSnackbar("Password must be at least 6 characters long.", {
      variant: "warning",
    });
    return false;
  }
  if (!confirmPassword) {
    enqueueSnackbar("Please confirm your password.", { variant: "error" });
    return false;
  }
  if (password !== confirmPassword) {
    enqueueSnackbar("Passwords do not match.", { variant: "error" });
    return false;
  }
  return true;
};

export const handleLoginSubmit = async (e, formData, navigate, dispatch) => {
  e.preventDefault();
  const isValid = handleLoginValidator(formData);
  if (!isValid) return;
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, formData, {
      withCredentials: true,
    });

    if (response.status === 200) {
      dispatch(setAuthData(response.data.user));
      enqueueSnackbar(response.data.message, { variant: "success" });
      navigate("/dashboard");
    }
  } catch (error) {
    console.log(error);
    enqueueSnackbar(error.response?.data?.message, { variant: "error" });
  }
};

export const handleRegisterSubmit = async (e, formData, navigate, dispatch) => {
  e.preventDefault();

  const isValid = handleRegisterValidator(formData);
  if (!isValid) return;

  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register`,
      formData,
      { withCredentials: true }
    );
    if (response.status === 201 && response.data.success) {
      dispatch(setAuthData(response.data.data));
      enqueueSnackbar(response.data.message, { variant: "success" });
      navigate("/dashboard");
    }
  } catch (error) {
    console.log(error);
    enqueueSnackbar(error.response?.data?.message || "Registration failed", {
      variant: "error",
    });
  }
};
