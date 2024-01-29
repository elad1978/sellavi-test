import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    // fontFamily: "Your Custom Font, sans-serif",
    h1: {
      fontSize: "6rem",
      color: "rgba(79, 201, 99, 255)",
    },
  },
});

// Light Theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export { darkTheme, lightTheme };
