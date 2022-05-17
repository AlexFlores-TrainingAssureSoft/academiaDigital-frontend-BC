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
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="https://i.ibb.co/Sxf3pLz/home-2.png" alt="logo" style={{ width: "8%" }} />
          <NavLink
            to="/"
            activestyle={{
              color: "#FCA53F",
              fontWeight: "bold"
            }}
            style={{ color: "#ffffff", textDecoration: "none", margin:10, fontFamily:"Arial"  }}
            key={1}
            sx={{ my: 4, color: 'white', display: 'block' ,width: 1/6 }}     
          >
            Getting started
          </NavLink>
          <NavLink
            to="/createTrainee"
            activestyle={{
              color: "#FCA53F",
              fontWeight: "bold"
            }}
            style={{ color: "#ffffff", textDecoration: "none", margin:10, fontFamily:"Arial"  }}
            key={2}
            sx={{ my: 4, color: 'white', display: 'block' ,width: 1/6 }}   
          >
            Trainees
          </NavLink>
          <NavLink
            to="/listTrainee"
            activestyle={{
              color: "#FCA53F",
              fontWeight: "bold"
            }}
            style={{ color: "#ffffff", textDecoration: "none", margin:10, fontFamily:"Arial" }}
            key={3}
            sx={{ my: 4, color: 'white', display: 'block' ,width: 1/6 }}    
          >
            Show Trainees
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
