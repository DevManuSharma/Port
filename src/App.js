import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Service from "./Pages/Service"
import Covid from "./Pages/Coronacomponents/Covid"
import NavBar from "./Navbar"
import Footer from "./Footer"

import {Switch , Route , Redirect} from "react-router-dom";
const App=()=>{
  return(
    <>
    <NavBar/>
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/Project" component={Service} />
  <Route exact path="/contact" component={Contact} />
  <Route exact path="/Covid" component={Covid}/>
  <Redirect to="/"/>

  </Switch>
  <Switch>
    <Footer/>
  </Switch>
    </>
  )
}

export default App;
