import React from 'react'
import PCards from './PCards'

const Service =()=> {
    return (
    <>
   
   <h1 className="text-center"  >My Projects</h1>
    <PCards 
    visit="/Covid" 
    name="Covid 19 Tracker" 
    photo="/images/Covid Tracker.png"
    info="Tracks the cases all over the INDIA" 
    lang=" Html | Css | React" 
    date=" 13-06-2021" 
    btnname="project"
    id="C-tracker"
     />   

<PCards 
    visit="/Home" 
    name="Coming soon" 
    photo=""
    info="Coming soon" 
    lang="Coming soon"  
    date="not uploaded" 
    btnname="project"
     />  
    </>
    )

};

export default Service;