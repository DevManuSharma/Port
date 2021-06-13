import React from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css'
const Common =(props)=> {
    return (
    <>
   
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          
               
                 <div className="justify-center">
                    <div className="text-center" style={{marginTop:"20px"}} > <h1  >{props.name} <br/> <strong className="brand-name text-center" >Manu Sharma</strong></h1>
                     <h2 className=" text-center " style={{color:"green"}}> 
                     Interest should come in the work, just then it becomes a passion and passion is something which we don't wanna loose.
                     </h2>
                     <div className="mt-3">
                         <NavLink className="btn btn-primary" to={props.visit} >{props.btnname}</NavLink>
                     </div>
                     </div>
                 </div>
                 
               
            
            
        </div>
             
    </section>
    
    <div class="text-center">
  <img style={{marginTop:"20px" }} width="100%" height="400px" src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="rounded" alt="..."/>
</div>   
    </>
    )

};

export default Common ;