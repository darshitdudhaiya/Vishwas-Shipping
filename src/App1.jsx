import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./common/sidebar/Sidebar";
import Content from "./components/Content";
import "./App.css";
import Login from "./pages/Auth/Login";
import { Grid } from "@mui/material";
import PersistentDrawerLeft from "./pages/views/Demo";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarIsOpen)
  };



  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home/*"
          element={
            <Grid container justifyContent="center" className="App wrapper position-relative d-inline-flex">
              <Grid item xs={12} sm={12} md={2}>
                <Sidebar toggle={setSidebarOpen} isOpen={sidebarIsOpen} />
              </Grid>
              <Grid item xs={12} sm={12} md={sidebarIsOpen?10:12} >
                <Content
                  toggleSidebar={toggleSidebar}
                  sidebarIsOpen={sidebarIsOpen}
                />
              </Grid>
            </Grid>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/demo" element={<PersistentDrawerLeft/>} />

      </Routes>
    </Router>
  );
};

export default App;
