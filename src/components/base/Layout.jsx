import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "./AppBar";
import Main from "./Main";
import DrawerHeader from "./DrawerHeader";
import DrawerSidebar from "./DrawerSidebar";
import Content from "../Content";
import Footer from "./Footer";
import Menu from "@mui/material/Menu";
import { Button } from "reactstrap";
import MenuItem from "@mui/material/MenuItem";

const Layout = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [currentWindow, setCurrentWindow] = React.useState("");

  const handleCurrentWindow = (window) => {
    setCurrentWindow(window);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const userMenuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        className="bg-teal"
        sx={{ backgroundColor: "#222D32" }}
      >
        <Toolbar className="d-flex">
          <IconButton
            color="inherit"
            className="d-flex flex-grow-0"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            className="d-flex flex-grow-1"
            component="div"
          >
            {currentWindow}
          </Typography>
          <Button
            id="basic-button "
            className="rounded-0 bg-transparent d-flex flex-grow-2 border-3 border-white"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            User
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={userMenuOpen}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <DrawerSidebar open={open} setOpen={setOpen} theme={theme} sx={{minWidth:"800px",maxWidth:"600px"}}/>
      <Main open={open}>
        <DrawerHeader />
        <Content handleCurrentWindow={handleCurrentWindow} />
        <Footer />
      </Main>
    </Box>
  );
};

export default Layout;
