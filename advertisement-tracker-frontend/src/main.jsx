import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import App from "./App.jsx";
import theme from "./theme.js";
import "./index.css";
import "./fonts/fonts.js";
import { store } from "./redux_store/store.js";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={3000}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  </ThemeProvider>
);
