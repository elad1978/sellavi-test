import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./theme"; // Import both darkTheme and lightTheme
import NavBar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import "./App.css";
//import VideoComponent from "./components/VideoComponent/VideoComponent";
//import starsVideo from "./assets/starsVideo.mp4";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = createTheme(darkMode ? darkTheme : lightTheme);

  return (
    <ThemeProvider theme={theme}>
      {/* <VideoComponent videoSrc={starsVideo} /> */}
      <CssBaseline />
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <LandingPage darkMode={darkMode} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
