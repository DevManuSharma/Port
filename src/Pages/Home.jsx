import React from 'react'

import './Home.css'
import Common from './Common'
import { NavLink } from 'react-router-dom'
const Home =()=> {
    return (
    <>
  <Common 
  name="Young Age Developer I'm" 
  visit="/Project" 
   
  btnname="Get Started"/>

<div className="card text-center" style={{ marginTop:"30px" , border:"transparent 1px solid"}}>
  <div className="card-header">
    <h2>RECENT PROJECT &nbsp;  &nbsp; &nbsp; &nbsp; <NavLink className="btn btn-success" to="/Project" >All Projects</NavLink></h2>
  </div>
  <div className="card-body" >
    <h5 className="card-title">COVID-19 TRACKER</h5>
    <p className="card-text">Track COVID-19 cases of <strong>INDIA</strong> </p>
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <NavLink class="btn btn-secondary" to="/Covid" >Covid Tracker</NavLink>
  
  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle viewall" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      View all
    </button>
    
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <NavLink class="dropdown-item" to="/Covid" >COVID-19 TRACKER</NavLink>
      
    </div>
  </div>
</div>
  </div>
</div>
  </>
  )}
export default Home;