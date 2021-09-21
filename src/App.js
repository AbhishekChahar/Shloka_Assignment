import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

var json = require('./data.json');

const App=()=> {
  
  var arr=[];
  var calculatedFees = 0 ;
  const [predictedFees, setPredictedFees] = useState(arr);
  console.log(json);
  console.log("hila dlaana");
  var data =json;
  


var count = 0;
for(var key in json)
    if(json.hasOwnProperty(key))
        count++;

console.log(count); 
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

  const feesOption=()=>{
      return{
        // `<option value="volvo">Volvo</option>`
      }
  }
  
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
          <select name="fees" id="fees">
            
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
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