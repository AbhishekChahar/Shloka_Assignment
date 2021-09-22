import React,{useState} from "react";
var data = require("./data.json");


const Nationality = () => {
    
  const [selectedNationalityvalue, setSelectedNationalityvalue] = useState("");

    // var Nationalityvalues = Object.keys(data);

    const getNationalityvalue = (e) => {
        setSelectedNationalityvalue(e.target.value);
        console.log(selectedNationalityvalue);
    };
    var nationalityKeys  = Object.keys(data["Exam Fee"]);
    
    return (
    <>
      <label className="fees-form__label">
        Nationality:
        { nationalityKeys &&
          nationalityKeys.map((comment) => {
            return (
              <div  style={{ alignItems: "center", margin: "5px 20px" }}>
                <button className="btn btn-primary" id="button" value={comment} onClick={getNationalityvalue}>
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
