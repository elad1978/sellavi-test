import React, { useState } from "react";
import { Typography, Box, Tab, Tabs, Link, Grid } from "@mui/material";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";

const boxStyles = {
  backgroundColor: "rgb(90, 100, 116)",
  //backgroundColor: "rgb(230, 100, 31)",
  borderTop: "2px solid rgba(255, 255, 255, 0.5)",
  padding: "1rem",
  marginTop: "1.5rem",
};

const Footer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={boxStyles}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="transparent"
            textColor="inherit"
            // style={{ backgroundColor: "rgb(90, 100, 116)" }}
            style={{ backgroundColor: "inherit" }}
          >
            <Tab label="Home" />
            <Tab label="Prices" />
            <Tab label="Services" />
            <Tab label="About company" />
            <Tab label="How to do online business" />
          </Tabs>
        </Grid>
        <Grid
          item
          md={6}
          container
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <Typography mt={3} ml={3} color="white">
            All rights reserved 2020 | © Sellavi
          </Typography>
        </Grid>
        <Grid item md={6} container>
          <Grid
            item
            md={12}
            container
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Typography variant="h6" mb={2} pr={11} color="white">
              Contact us:
            </Typography>
          </Grid>
          <Grid
            item
            md={12}
            container
            justifyContent="flex-end"
            // alignItems="flex-end"
          >
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <FaFacebook style={{ fontSize: "40px", color: "white" }} />
            </Link>
            <Link
              pl={2}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <FaInstagram style={{ fontSize: "40px", color: "white" }} />
            </Link>
            <Link
              pl={2}
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <PiTiktokLogo style={{ fontSize: "40px", color: "white" }} />
            </Link>
            <Link
              pl={2}
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <BsWhatsapp style={{ fontSize: "40px", color: "white" }} />
            </Link>
            <Link
              pl={2}
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <TfiYoutube style={{ fontSize: "40px", color: "white" }} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
