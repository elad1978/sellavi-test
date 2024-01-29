import { Box, Container } from "@mui/system";
import React, { useState } from "react";

const RoundedComponent = ({ bgImage, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyles = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    borderRadius: "50%",
    width: "20rem",
    height: "20em",
    border: isHovered ? "2px solid rgba(79, 201, 99, 255)" : "none",
    boxShadow: isHovered ? "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5)" : "none", // Add an inset shadow on hover
    transition: "box-shadow 0.3s ease", // Smooth transition effect for the hover effect
  };

  const textStyles = {
    width: "12rem",
    textAlign: "center",
    // fontSize: "2rem",
    fontSize: isHovered ? "2.1rem" : "2rem", // Increase font size on hover
    fontWeight: "900",
    color: isHovered ? "rgba(79, 201, 99, 255)" : "white",
    transition: "color 0.5s ease", // Smooth transition effect for color change
  };

  return (
    <div>
      <Container
        style={containerStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box sx={textStyles}>{text}</Box>
      </Container>
    </div>
  );
};

export default RoundedComponent;
