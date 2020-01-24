import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Calorie from "./components/Calorie";
import Navbar from "./components/Navbar";


import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import FoodDesc from "./components/FoodDesc";
const App = function() {
  

  return (
    <Router>
    <div>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/home">
      <Navbar />

    </Route>
        <Route path="/calorie">
          <Calorie></Calorie>
        </Route>

        <Route path="/food">
        <FoodDesc></FoodDesc>
      </Route>

        <Route path="/"> <Login></Login></Route>
      </Switch>
    </div>
  </Router>
  );
};

export default App;