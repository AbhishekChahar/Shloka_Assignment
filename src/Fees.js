import React, { useState } from "react";
import "./App.css";
var data = require("./data.json");

const Fees = () => {

  const [selectedfeesvalue, setSelectedfeesvalue] = useState("");

  var feesvalues = Object.keys(data);

  const getfeesvalue = (e) => {
    e.preventDefault();// 
    setSelectedfeesvalue(e.target.value);
    console.log(e.target.value);
    
  };

  return (
    <>
      <label className="fees-form__label">
        <div className = "fees-form__label_div">Fees:</div>
        {feesvalues &&
          feesvalues.map((comment) => {
            return (
              
              <div style={{ alignItems: "center", margin: "5px 20px" }}>
                <button
                  className="btn btn-primary btn-lg active"
                  value={comment}
                  id="button"
                  onClick={getfeesvalue}
                >
                  {comment}
                </button>
              </div>
              
            );
          })}

<div>{selectedfeesvalue}</div>
      </label>
    </>
  );
};

export default Fees;
