import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#666633",
      dark:'#55552b',
      light: "#aaaa55",
      text: "#cce6ff",
    },
    secondary: {
      main: "#339cff",
      dark:'#004f99',
      light: "#cce6ff",
      text: "#000000",
    },
    other: {
      main: "#e6ffff",
      dark:'#00cccc',
      light: "#00ffff",
      text: "#000",
    },
    background: {
      default: "#55552b",
      main:'#339cff',
      paper: "#004f99",
      other:'#fff',
    },
    text: {
      default: "#000",
      dark:'#fff',
      light: "#cce6ff",
      custom:'#55552b'
    },
    // hover: {
    //   default: "#ff00bb",
    //   main: "#005ccc",
    //   light: "#5305c7",
    // },
    // active: {
    //   main: "#0000FF",
    // },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Poppins', sans-serif" },
    h2: { fontFamily: "'Poppins', sans-serif" },
    h3: { fontFamily: "'Poppins', sans-serif" },
    h4: { fontFamily: "'Poppins', sans-serif" },
    h5: { fontFamily: "'Poppins', sans-serif" },
    h6: { fontFamily: "'Poppins', sans-serif" },
    body1: { fontFamily: "'Inter', sans-serif" },
    body2: { fontFamily: "'Inter', sans-serif" },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
            "& fieldset": {
              borderColor: "#55552b", // ✅ default border pink
            },
            "&:hover fieldset": {
              borderColor: "#aaaa55", // ✅ hover pink
            },
            "&.Mui-focused fieldset": {
              borderColor: "#666633", // ✅ focused pink
            },
            "& input::placeholder": {
              color: "#aaaa55",
              fontSize: "0.9rem",
            },
          },

          // ✅ Label styling (default + focused)
          "& .MuiInputLabel-root": {
            color: "#55552b", // default label white
            fontWeight: 500,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#55552b", // label stays white when focused
          },
        },
      },
    },
    
  },
});

export default theme;
