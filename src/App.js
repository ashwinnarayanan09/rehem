import React from 'react';
import './App.css';
import Donate from './components/Donate.js'
import Menu from './components/Menu.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (

      <Router>
          <div style={{backgroundColor:"#F8F8F8"}}>
              <Menu/>

              <br /><br/><br/><br/>

              {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>

                  <Route exact path="/donate">
                      <Donate />
                  </Route>
                  <Route exact path="/about">
                      <About />
                  </Route>
                  <Route exact path="/contact">
                      <Contact />
                  </Route>
              </Switch>

              <Footer/>
          </div>
      </Router>
  );
}

export default App;