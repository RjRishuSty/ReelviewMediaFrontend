import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";

export const companyInfo = [
  {
    id: 1,
    icon: <PhoneIcon sx={{fontSize:'2.7rem',p:0.5,color:"#ff00bb"}}  />,
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    id: 2,
    icon: <EmailIcon sx={{fontSize:'2.7rem',p:0.5,color:"#5305c7"}}  />,
    label: "Email",
    value: "support@yourcompany.com",
  },
  {
    id: 3,
    icon: <LocationOnIcon sx={{fontSize:'2.7rem',p:0.5,color:"#2b2b81"}}  />,
    label: "Address",
    value: "AH Complex, Exhibition Rd, Old Jakkanpur, Lodipur, Patna, Bihar 800001",
  },
  {
    id: 4,
    icon: <AccessTimeIcon sx={{fontSize:'2.7rem',p:0.5,color:"#2b2b81"}}  />,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM to 7:00 PM",
  },
];
