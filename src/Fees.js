import React,{useState} from "react";
var data = require("./data.json");


const Fees = () => {
    
  const [selectedfeesvalue, setSelectedfeesvalue] = useState("");

    var feesvalues = Object.keys(data);

    const getfeesvalue = (e) => {
        setSelectedfeesvalue(e.target.value);
        console.log(selectedfeesvalue);
    };
    
    return (
    <>
      <label className="fees-form__label">
        Fees:
        { feesvalues &&
          feesvalues.map((comment) => {
            return (
              <div   style={{ alignItems: "center", margin: "20px 20px" }}>
                <button className="btn btn-primary" id="button" value={comment} onClick={getfeesvalue}>
                  <h4>{comment}</h4>
                </button>
              </div>
            );
          })}
      </label>
    </>
  );
};

export default Fees;
