import React,{useState} from "react";
var data = require("./data.json");


const Nationality = () => {
    
  const [selectedNationalityvalue, setSelectedNationalityvalue] = useState("");

    // var Nationalityvalues = Object.keys(data);

    const getNationalityvalue = (e) => {
        setSelectedNationalityvalue(e.target.value);
        console.log(selectedNationalityvalue);
    };
    
    return (
    <>
      <label className="fees-form__label">
        Nationality:
        { data["Exam Fee"] &&
          data["Exam Fee"].map((comment) => {
            return (
              <div style={{ alignItems: "center", margin: "20px 60px" }}>
                <button id="button" value={comment} onClick={getNationalityvalue}>
                  <h4>{comment}</h4>
                </button>
              </div>
            );
          })}
      </label>
    </>
  );
};

export default Nationality;
