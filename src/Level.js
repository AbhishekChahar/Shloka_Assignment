import React,{useState} from "react";
// var data = require("./data.json");


const Level = () => {
    
  const [selectedLevelvalue, setSelectedLevelvalue] = useState("");

    // var Levelvalues = Object.keys(data);

    const getLevelvalue = (e) => {
        setSelectedLevelvalue(e.target.value);
        // console.log(selectedLevelvalue);
    };
    var LevelKey  = ["UG" ,"UGD","PG"];
    // console.log(LevelKey);

    return (
    <>
      <label className="fees-form__label">
        Level:
        { 
          LevelKey.map((comment) => {
            return (
              <div  style={{ alignItems: "center", margin: "5px 20px" }}>
                <button className="btn btn-primary" id="button" value={comment} onClick={getLevelvalue}>
                  <h4>{comment}</h4>
                </button>
              </div>
            );
          })}
      </label>
    </>
  );
};

export default Level;
