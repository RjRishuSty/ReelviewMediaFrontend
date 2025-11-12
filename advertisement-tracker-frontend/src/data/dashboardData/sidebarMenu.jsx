import DashboardIcon from "@mui/icons-material/Dashboard";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

export const sidebarMenu = [
  {
    title: "Main",
    items: [
      { icon: <DashboardIcon sx={{ color: "#90caf9" }} />, text: "Dashboard" },
      { icon: <BuildIcon sx={{ color: "#81c784" }} />, text: "Services" },
      { icon: <StarIcon sx={{ color: "#f06292" }} />, text: "Important" },
    ],
  },
  {
    title: "Account",
    items: [
      { icon: <PersonIcon sx={{ color: "#64b5f6" }} />, text: "View Profile" },
      { icon: <SettingsIcon sx={{ color: "#ffb74d" }} />, text: "Settings" },
    ],
  },
  {
    title: "Other",
    items: [{ icon: <LogoutIcon sx={{ color: "#e57373" }} />, text: "Logout" }],
  },
];
