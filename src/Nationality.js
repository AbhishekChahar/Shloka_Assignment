import React, { useState } from "react";
var data = require("./data.json");

const Nationality = () => {
  const [selectedNationalityvalue, setSelectedNationalityvalue] = useState("");


  const getNationalityvalue = (e) => {
    e.preventDefault();

    setSelectedNationalityvalue(e.target.value);
    console.log(e.target.value);
  };
  var nationalityKeys = Object.keys(data["Exam Fee"]);

  return (
    <>
      <label className="fees-form__label">
        <div className = "fees-form__label_div">Nationality:</div>
        {nationalityKeys &&
          nationalityKeys.map((comment) => {
            return (
              <div style={{ alignItems: "center", margin: "5px 20px" }}>
                <button
                  className="btn btn-primary btn-lg active"
                  id="button"
                  value={comment}
                  onClick={getNationalityvalue}
                >
                  {comment}{" "}
                </button>
              </div>
            );
          })}
          <div>{selectedNationalityvalue}</div>
      </label>
    </>
  );
};

export default Nationality;
















// import Fees from "./Fees";
// import Nationality from "./Nationality";
// import Courses from "./Courses";
// import Level from "./Level";
import React, { useContext, useState, useEffect } from "react";
import "./App.css";
var data = require("./data.json");

const App = () => {
  

  var calculatedfees = 0;
  const [selectedfeesvalue, setSelectedfeesvalue] = useState("Application Fee");
  const [selectedNationalityvalue, setSelectedNationalityvalue] = useState("");
  const [selectedCoursesvalue, setSelectedCoursesvalue] = useState("");
  const [selectedLevelvalue, setSelectedLevelvalue] = useState("");

  const [calculatedfees, setCalculatedfees] = useState(0);

  let feesvalues = Object.keys(data);
  var nationalitykeys = Object.keys(data[selectedfeesvalue]);

  const getFeesvalue = (e) => {
    e.preventDefault(); //
    setSelectedfeesvalue(e.target.value);
    console.log(e.target.value);
    calculate();
  };

  const getNationalityvalue = (e) => {
    e.preventDefault();
    setSelectedNationalityvalue(e.target.value);
    console.log(e.target.value);
    calculate();
  };

  var coursesKey = ["Medical", "Dentist", "Ayurveda"];

  const getCoursesvalue = (e) => {
    e.preventDefault();
    setSelectedCoursesvalue(e.target.value);
    console.log(e.target.value);
    calculate();
  };

  var LevelKey = ["UG", "UG-DIPLOMA", "PG"];

  const getLevelvalue = (e) => {
    e.preventDefault();

    setSelectedLevelvalue(e.target.value);
    console.log(e.target.value);
    calculate();
  };

  function calculate() {

    console.log("chal chala");


    if (
      selectedfeesvalue !== "" &&
      selectedNationalityvalue !== "" &&
      selectedCoursesvalue !== "" &&
      selectedCoursesvalue !== ""
    ) {

      if (coursesKey.indexOf(selectedCoursesvalue) != -1) {
        setSelectedCoursesvalue("ALL_COURSES");
      }

      
      if (selectedfeesvalue == "Exam Fee") {
        setSelectedLevelvalue("ALL_LEVEL");
      } 
          

        setCalculatedfees(
          data[selectedfeesvalue][selectedNationalityvalue][selectedCoursesvalue][selectedLevelvalue]
            .amount
        );
       
      
        console.log(calculatedfees);
    }
  }

  // useEffect(() => {
  //     nationalitykeys = Object.keys(data[setSelectedfeesvalue]);
  // },[]);

  return (
    <div className="app">
      <form className="fees-form">
        <label className="fees-form__label">
          <div className="fees-form__label_div">Fees:</div>
          {feesvalues &&
            feesvalues.map((comment) => {
              return (
                <div style={{ alignItems: "center", margin: "5px 20px" }}>
                  <button
                    className="btn btn-primary btn-lg active"
                    value={comment}
                    id="button"
                    onClick={getFeesvalue}
                  >
                    {comment}
                  </button>
                </div>
              );
            })}
          <div>{selectedfeesvalue}</div>
        </label>

        <label className="fees-form__label">
          <div className="fees-form__label_div">Nationality:</div>
          {nationalitykeys &&
            nationalitykeys.map((comment) => {
              return (
                <div style={{ alignItems: "center", margin: "5px 20px" }}>
                  <button
                    className="btn btn-primary btn-lg active"
                    id="button"
                    value={comment}
                    onClick={getNationalityvalue}
                  >
                    {comment}{" "}
                  </button>
                </div>
              );
            })}
          <div>{selectedNationalityvalue}</div>
        </label>

        <label className="fees-form__label">
          <div className="fees-form__label_div">Courses:</div>

          {coursesKey.map((comment) => {
            return (
              <div style={{ alignItems: "center", margin: "5px 20px" }}>
                <button
                  className="btn btn-primary btn-lg active"
                  id="button"
                  value={comment}
                  onClick={getCoursesvalue}
                >
                  {comment}
                </button>
              </div>
            );
          })}
          <div>{selectedCoursesvalue}</div>
        </label>

        <label className="fees-form__label">
          <div className="fees-form__label_div">Level:</div>

          {LevelKey.map((comment) => {
            return (
              <div style={{ alignItems: "center", margin: "5px 20px" }}>
                <button
                  className="btn btn-primary btn-lg active"
                  id="button"
                  value={comment}
                  onClick={getLevelvalue}
                >
                  {comment}
                </button>
              </div>
            );
          })}
          <div>{selectedLevelvalue}</div>
        </label>
      </form>

      <h1>
        Your Fees is : <i className="fa fa-inr"></i>{" "}
        <span className="fees-form__span">
          <u>{calculatedfees}</u>
        </span>
      </h1>
    </div>
  );
};

export default App;
