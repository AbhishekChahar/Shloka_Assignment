import Fees from "./Fees";
import Nationality from "./Nationality";
import Courses from "./Courses";
import Level from "./Level";
import React, { useState } from "react";
import "./App.css";
var json = require("./data.json");

const App = () => {

  var calculatedFees = 0;

  var feestypeKeys = [];
  var nationalitiesKeys = [];
  var coursesKeys = ["Medical", "Dentist", "Ayurveda"];
  var levelKeys = [];

  return (
    <div className="app">
     
      <form className="fees-form">
          <Fees />

        
          <Nationality />
        

        
          <Courses />
        

        
          <Level />
        
      </form>

      <h1>

        Your Fees is : <i class="fa fa-inr"></i>{" "}
        <span className="fees-form__span">
          <u>{calculatedFees}</u>
        </span>
      </h1>
    </div>
  );
};

export default App;
