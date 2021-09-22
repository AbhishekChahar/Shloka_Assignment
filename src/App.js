import Fees from "./Fees";
import Nationality from './Nationality';
import Courses from './Courses';
import Level from './Level';
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
var json = require("./data.json");

const App = () => {
  var calculatedFees = 0;
  const [selectednationalityvalue, setSelectednationalityvalue] = useState("");
  const [selectedCoursevalue, setSelectedCoursevalue] = useState("");
  const [selectedLevelvalue, setSelectedLevelvalue] = useState("");


  var data = json;

  var feestypeKeys = [];
  var nationalitiesKeys = [];
  var coursesKeys = ["Medical", "Dentist", "Ayurveda"];
  var levelKeys = [];

  var feesKeys = Object.keys(json);
  console.log(feesKeys);
  let value = "Exam Fee";
  var feesObj = json.value;
  console.log(feesObj);
  console.log(value);

  // function onClick($this) {
  //   var val = $this.previousElementSibling.value;
  //   if(val == ''){
  //       console.log('no input');
  //   }else{
  //      console.log(val);
  //   }
  // }

  // nationalitiesKeys = Object.keys(json.value);
  // console.log(nationalitiesKeys)
  // console.log("oajlbnck");
  // componentDidMount() {
  //   this.fetchAdvice();
  // }

  //  fetchAdvice = async () => {
  //   await axios.get('https://api.adviceslip.com/advice')
  //     .then((response) => {
  //       const { advice } = response.data.slip;

  //       this.setState({ advice });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }



  const getnationalityvalue = (e) => {
    setSelectednationalityvalue(e.target.value);
    console.log();
    console.log(e);
  };

  return (
    <div className="app">
      {/* <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div> */}

      <form className="fees-form">
        <Fees/>

        <label className="fees-form__label">
          Nationality:
          {/* <Option value = "Indian"/>
          <Option value = "Foreigner"/>
          <Option value = "NRI"/>
          <Option value = "SAARC"/> */}
     
        </label>

        <label className="fees-form__label">
          Courses:
          {/* <Option value = "Medical"/>
          <Option value = "Ayurveda"/>
          <Option value = "Dental"/> */}
        </label>

        <label className="fees-form__label">
          Levels:
          {/* <Option value = "UG"/>
          <Option value = "UGD"/>
          <Option value = "PG"/> */}
        </label>
      </form>

      <p> Your Fees is : {calculatedFees}</p>
    </div>
  );
};

export default App;
