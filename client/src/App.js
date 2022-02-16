import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from  "./Components/About";
import ScheduleService from "./Components/ScheduleService";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './App.css';

function App() {

  return (
    <div>
    <Login />
    <Header />
    <NavBar />
    
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

         <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/schedule-service">
          <ScheduleService />
        </Route> 
      </Switch>

      <Footer/>
      </div>
  );
}

export default App;
