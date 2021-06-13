import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer =()=>{
    return(
        <>
            


  

<footer className=" font-small blue  footer "    >

  <div className="footer-copyright text-center py-3" style={{color:"white" , textDecoration:"none"}}>© 2021 Copyrighted &nbsp;
    <NavLink to="/"  style={{color:"white" , textDecoration:"none"}} > TdevManu</NavLink>
  </div>

</footer>


        </>
    )
}

export default Footer 
