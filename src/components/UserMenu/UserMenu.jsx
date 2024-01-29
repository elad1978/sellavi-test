import React from "react";
import { Menu, MenuItem, Typography } from "@mui/material";

const UserMenu = ({ anchorEl, onClose, settings }) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom", // Adjust the vertical position (e.g., "bottom")
        horizontal: "left", // Adjust the horizontal position (e.g., "left")
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={onClose}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default UserMenu;
