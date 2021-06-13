import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const NavBar = ()=>{
  return (
    <>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand logo" style={{marginLeft:"10px",marginRight:"40px" ,fontSize:"30px", textDecoration:"none" , color:"#5722BA"}}  to="">DevManu</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li className="topnav-item">
              <NavLink
                exact
                to="/Home"
                activeClassName="topnav-activ actv"
                className="topnav-link"
             
              >
                Home
              </NavLink>
            </li>
            <li className="topnav-item">
              <NavLink
                exact
                to="/Project"
                activeClassName="topnav-activ actv"
                className="topnav-link"
             
              >
                Projects
              </NavLink>
            </li>
            <li className="topnav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="topnav-activ actv"
                className="topnav-link"
             
              >
                About
              </NavLink>
            </li>
            <li className="topnav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="topnav-activ actv"
                className="topnav-link"
             
              >
                Contact 
              </NavLink>

            </li>
            <li className="topnav-item">
              <NavLink
                exact
                to="/Covid"
                activeClassName="coronaac"
                className=" corona"
                style={{color:"red"}}
             
              >
                Corona Tracker
              </NavLink>
              
            </li>
    </ul>
  </div>
</nav>
    </>
  );
}

export default NavBar;