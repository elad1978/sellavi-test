import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Tooltip,
  Avatar,
  Tab,
  Tabs,
  Grid,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import UserMenu from "../UserMenu/UserMenu";

const StyledContainer = styled("div")({
  flexGrow: 1,
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "rgba(8, 8, 8, 0.846)",
  "&:hover": {
    backgroundColor: "rgba(8, 8, 8, 1)",
  },
  "& #root-container:hover &": {
    backgroundColor: "rgba(8, 8, 8, 1)",
  },
});

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    <StyledContainer>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Grid container alignItems="center" id="root-container">
            <Grid item>
              <img
                src="https://sellavi.com/region/global/assets/logo.svg"
                alt="sellavi-icon"
                style={{ margin: "1rem" }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                centered
                indicatorColor="primary"
                textColor="inherit"
              >
                <Tab label="Home" />
                <Tab label="Prices" />
                <Tab label="Services" />
                <Tab label="About company" />
                <Tab label="How to do online business" />
              </Tabs>
            </Grid>
            <Grid item sx={{ marginLeft: "auto" }}>
              <Box>
                <Tooltip title="Toggle dark mode">
                  <IconButton
                    onClick={toggleDarkMode}
                    color="inherit"
                    sx={{ p: 0, mr: 2 }}
                  >
                    {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <UserMenu
                  anchorEl={anchorElUser}
                  onClose={handleCloseUserMenu}
                  settings={settings}
                />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppBar>
    </StyledContainer>
  );
};

export default NavBar;
