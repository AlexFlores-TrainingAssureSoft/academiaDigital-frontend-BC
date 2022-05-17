import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <AppBar position="static"       
        style={{
          backgroundColor: "#04144c",
          color: "white"
        }} >
          <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="https://i.ibb.co/Sxf3pLz/home-2.png" alt="logo" style={{ width: "8%" }} />
          <NavLink
              activeStyle={{
                color: "#FCA53F",
                fontWeight: "bold",
              }}
              exact
              style={{ color: "#ffffff", textDecoration: "none", margin:10, fontFamily:"Arial"  }}
                key={1}
                sx={{ my: 4, color: 'white', display: 'block' ,width: 1/6 }}
                to="/"
            >
                Getting started
          </NavLink>
          <NavLink
              activeStyle={{
                color: "#FCA53F",
                fontWeight: "bold",
              }}
              exact
              style={{ color: "#ffffff", textDecoration: "none", margin:10, fontFamily:"Arial"  }}
                key={1}
                sx={{ my: 4, color: 'white', display: 'block' ,width: 1/6 }}
                to="/createTrainee"
            >
                Trainees
          </NavLink>
          <NavLink
              activeStyle={{
                color: "#FCA53F",
                fontWeight: "bold",
              }}
              exact
              style={{ color: "#ffffff", textDecoration: "none", margin:10, fontFamily:"Arial" }}
                key={1}
                sx={{ my: 4, color: 'white', display: 'block' ,width: 1/6 }}
                to="/"
            >
                Show Trainees
          </NavLink>
        </Toolbar>
        </Container>
    </AppBar>
  );
};
export default NavBar;
