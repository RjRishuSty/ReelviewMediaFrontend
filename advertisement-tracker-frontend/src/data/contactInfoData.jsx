import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const contactInfoData = [
  {
    title: "Phone",
    value: "+91 98765 43210",
    icon: <PhoneIcon  sx={{p:1,fontSize:'3.5rem',color:'secondary.dark',"&:hover":{color:'text.dark'}}}/>
  },
  {
    title: "Email",
    value: "contact@reelviewmedia.com",
    icon: <EmailIcon  sx={{p:1,fontSize:'3.5rem',color:'secondary.dark',"&:hover":{color:'text.dark'}}}/>
  },
  {
    title: "Address",
    value: "2nd Floor, ABC Business Hub, New Delhi, India",
    icon: <LocationOnIcon  sx={{p:1,fontSize:'3.5rem',color:'secondary.dark',"&:hover":{color:'text.dark'}}}/>
  },
];
