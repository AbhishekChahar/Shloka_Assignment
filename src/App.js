// import Fees from "./Fees";
// import Nationality from "./Nationality";
// import Courses from "./Courses";
// import Level from "./Level";
import React, { useContext, useState, useEffect } from "react";
import "./App.css";
var data = require("./data.json");

const App = () => {
  var calculatedFees = 0;
  var course = "ALL_COURSES";
  var level = "ALL_LEVEL";

  const [selectedfeesvalue, setSelectedfeesvalue] = useState("Exam Fee");
  const [selectedNationalityvalue, setSelectedNationalityvalue] = useState("");
  const [selectedCoursesvalue, setSelectedCoursesvalue] = useState("");
  const [selectedLevelvalue, setSelectedLevelvalue] = useState("");

  const [calculatedfees, setCalculatedfees] = useState(0);

  let feesvalues = Object.keys(data);
  var nationalitykeys = Object.keys(data[selectedfeesvalue]);

  const getFeesvalue = (e) => {
    e.preventDefault(); //
    setSelectedfeesvalue(e.target.value);
    setSelectedNationalityvalue("");
    setSelectedCoursesvalue("");
    setSelectedLevelvalue("");

    
    console.log(e.target.value);
    calculate();
  };

  const getNationalityvalue = (e) => {
    e.preventDefault();
    setSelectedNationalityvalue(e.target.value);
    setSelectedCoursesvalue("");
    setSelectedLevelvalue("");

    console.log(e.target.value);
    calculate();
  };

  var coursesKey = ["Medical", "Dentist", "Ayurveda"];

  const getCoursesvalue = (e) => {
    e.preventDefault();
    setSelectedCoursesvalue(e.target.value);
    setSelectedLevelvalue("");

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
    console.log(level);
    console.log(course);
    console.log(selectedfeesvalue);
    console.log(selectedLevelvalue);
    if (
      selectedfeesvalue !== "" &&
      selectedNationalityvalue !== "" &&
      selectedCoursesvalue !== "" &&
      selectedLevelvalue !== ""
    ) {
      // if (coursesKey.indexOf(selectedCoursesvalue) !== -1) {
      //   course = "ALL_COURSES";
      //   console.log("value of course changes" + { course });
      // }

      if (selectedfeesvalue === "Exam Fee" ) {
        level = "ALL_LEVEL";
      } else {
        level = selectedLevelvalue;
      }

      console.log(typeof(level))
      console.log(level);
      console.log(typeof(selectedLevelvalue));
      console.log(selectedLevelvalue);

      if(selectedfeesvalue==="Exam Fee"){
        //runs for Exam Fees
        if(selectedNationalityvalue === "INDIAN" || selectedNationalityvalue ==="SAARC"){
          setCalculatedfees(
            (data[selectedfeesvalue][selectedNationalityvalue][course][level].amount) * 1.18 
          );
        }
        else if(selectedNationalityvalue === "NRI" || selectedNationalityvalue === "FOREIGN"){
          setCalculatedfees(
            (data[selectedfeesvalue][selectedNationalityvalue][course][level].amount) * 1.28 
          );
        }
      }
      
      else{
        //runs for Application Fees

        level = {selectedLevelvalue};
        if(selectedNationalityvalue === "INDIAN" || selectedNationalityvalue ==="SAARC"){
          setCalculatedfees(
            (data[selectedfeesvalue][selectedNationalityvalue][course][selectedLevelvalue].amount) * 1.18 
          );
        }
        else if(selectedNationalityvalue === "NRI" || selectedNationalityvalue === "FOREIGN"){
          setCalculatedfees(
            
            (data[selectedfeesvalue][selectedNationalityvalue][course][selectedLevelvalue].amount) * 1.28 
          );
        }
      }

      console.log(calculatedFees);
      return calculatedFees;
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
          <div className="selected-option">{selectedfeesvalue}</div>
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
          <div className="selected-option">{selectedNationalityvalue}</div>
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
          <div className="selected-option">{selectedCoursesvalue}</div>
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
          <div className="selected-option">{selectedLevelvalue}</div>
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
