import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";

export const inputFieldData = [
  {
    id: "name",
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
    icon: <PersonIcon color="action" />,
  },
  {
    id: "email",
    label: "Email Address",
    name: "email",
    type: "email",
    placeholder: "Enter your email address",
    required: true,
    icon: <EmailIcon color="action" />,
  },
  {
    id: "phone",
    label: "Phone Number",
    name: "phone",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
    icon: <PhoneIcon color="action" />,
  },
  {
    id: "message",
    label: "Message",
    name: "message",
    type: "text",
    placeholder: "Type your message here...",
    multiline: true,
    rows: 4,
    required: false,
    icon: <MessageIcon color="action" />,
  },
];