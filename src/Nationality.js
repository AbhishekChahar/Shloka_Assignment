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
        Nationality:
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
