import React,{useState} from "react";
import './App.css';
var data = require("./data.json");


const Fees = () => {
    
  const [selectedfeesvalue, setSelectedfeesvalue] = useState('');

    var feesvalues = Object.keys(data);
    // var feesvalues = [];

    const getfeesvalue = (e) => {
      e.preventDefault();
        setSelectedfeesvalue(e.target.value);

        console.log("sfcnl");
        console.log(e.target.value);
        console.log(selectedfeesvalue);
        console.log("vsbdjlnc");

    };
    
    return (
    <>
      <label className="fees-form__label">
        <div>Fees:</div>
        { feesvalues &&
          feesvalues.map((comment) => {
            return (
              <div   style={{ alignItems: "center", margin: "5px 20px" }}>
                <button className="btn btn-primary" value = {comment} id="button" onClick={getfeesvalue}>
                  {comment}
                </button>
              </div>
            );
          })}
      </label>
    </>
  );
};

export default Fees;
