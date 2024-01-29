import React, { useEffect } from "react";
import { styled, Box } from "@mui/system";
import { Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import RoundedComponent from "../../components/RoundedComponent/RoundedComponent";
import TestComp from "../../components/testComp/testComp";

const StyledContainer = styled("div")({
  // backgroundImage: 'url("siteBuildImg2.png")',
  // backgroundSize: "60% 100%",
  // backgroundPosition: "right -10% center  ",
  // backgroundPosition: " 115% 50%",
  // backgroundRepeat: "no-repeat",
  height: "55vh",
  marginTop: "11vh",
});

const LandingPage = ({ darkMode }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [darkMode]);

  const roundedComponentPropsData = [
    {
      text: "why you should start selling online now",
      bgImage: "codeExplainImage.jpg",
      fade: "fade-right",
    },
    {
      text: "4 ways to improve your online business performance",
      bgImage: "codingImage.jpg",
      fade: "fade-down",
    },
    {
      text: "7 steps to transform your business during a pandemic",
      bgImage: "codingImage2.jpg",
      fade: "fade-left",
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute" }}>
        <Typography
          data-aos="fade-right"
          data-aos-duration="2000"
          variant="h1"
          sx={{
            width: "70%",
            marginLeft: "4%",
            marginTop: "2%",
            fontSize: "5rem",
            // fontWeight: "500",
          }}
        >
          Create your online store in 10 minutes!
        </Typography>
        <Typography
          data-aos="fade-left"
          data-aos-duration="2000"
          variant="h2"
          sx={{
            width: "60%",
            marginLeft: "5%",
            fontWeight: "500",
            color: "rgba(36, 135, 134)",
          }}
        >
          Your website determines your success
        </Typography>
      </div>
      <StyledContainer data-aos="zoom-in" data-aos-duration="2000">
        <img
          src="siteBuildImg2.png"
          alt="computer"
          style={{ position: "absolute", left: "45%", top: "5%" }}
        />
      </StyledContainer>
      {/* <Box
        sx={{
          border: "2px solid white",
          height: "10rem",
          width: "47%",
          marginLeft: "5%",
        }}
      > */}
      <Box pl={9}>
        <TestComp />
      </Box>

      {/* </Box> */}
      <Typography
        variant="h1"
        //paddingLeft={10}
        paddingTop={4}
        fontSize={"5rem"}
        sx={{ textAlign: "center" }}
      >
        We are doing it for you!
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={4}
        mt={2}
      >
        {roundedComponentPropsData.map((data, index) => (
          <div data-aos={data.fade} key={index} data-aos-duration="1300">
            <RoundedComponent bgImage={data.bgImage} text={data.text} />
          </div>
        ))}
      </Box>
    </div>
  );
};

export default LandingPage;
