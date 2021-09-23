import React, { useState } from "react";
// var data = require("./data.json");

const Level = () => {
  const [selectedLevelvalue, setSelectedLevelvalue] = useState("");

  const getLevelvalue = (e) => {
    e.preventDefault();

    setSelectedLevelvalue(e.target.value);
    console.log(e.target.value);
  };
  var LevelKey = ["UG", "UGD", "PG"];

  return (
    <>
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
        <div>{selectedLevelvalue}</div>
      </label>
    </>
  );
};

export default Level;
