import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Services.css"
const PCards =(props)=> {
    return (
    <>
   

      <div className="holder">
        <div className="crd-container">
            <div className="crd">
                <div className="crd-view">
                    <img src={props.photo} height="150px" width="295px" alt="projectimage" />
                   <div className="crd-elements"> <h3>{props.name}</h3>
                    <p>{props.info}</p>
                    <h6><strong  >Languages:</strong>{props.lang}</h6>
                    </div>
                    <div className="uploaded">
                        <h5>Uploaded on : {props.date}</h5>
                        </div>
                        <div class="d-grid gap-2">
                        <NavLink  className="btn btn-primary btn-lg btn-block" to = {props.visit} >View Project</NavLink>
                        </div>
                </div>
            </div>            
        </div>
      </div>
    </>
    )

};

export default PCards;