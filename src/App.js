import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import OptionButton from './Option.js';
var json = require('./data.json');

const App=()=> {
  
  
  var calculatedFees = 0 ;
  const [predictedFees, setPredictedFees] = useState([]);
  console.log(json);
  console.log("hila dlaana");
  var data =json;
  

  var feesKeys = [];
  var nationalitiesKeys=[]
  var coursesKeys = ["Medical", "Dentist", "Ayurveda"];
  var levelKeys = [];

  var feeskeys = Object.keys(json);
  console.log(feeskeys);
  let value = "Exam Fee";
  var feesObj = json.value;
  console.log(feesObj);
  console.log(value);

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


    console.log("hila la na")


    return (
      <div className="app">
        {/* <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div> */}

        
        <form className="fees-form">
          <label className="fees-form__label" >Fees:     
          <input className="input" type = "number" placeholder ="Enter Fees" />
          </label>

          <label className="fees-form__label">Nationality: 
          <input className="input" type = "number" placeholder ="Enter Fees" />
          </label>

          <label className="fees-form__label">Courses: 
          <input className="input" type = "number" placeholder ="Enter Fees" />
          
          </label>
          <label className="fees-form__label">Levels: 
          <input className="input" type = "number" placeholder ="Enter Fees" />
          </label>
       
      </form>

        <p> Your Fees is : {calculatedFees}</p>

      </div>
    );
  
}

export default App;