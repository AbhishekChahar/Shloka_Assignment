import React,{useState} from "react";
// var data = require("./data.json");


const Courses = () => {
    
  const [selectedCoursesvalue, setSelectedCoursesvalue] = useState("");

    // var Coursesvalues = Object.keys(data);

    const getCoursesvalue = (e) => {
      e.preventDefault();

        setSelectedCoursesvalue(e.target.value);
        console.log(selectedCoursesvalue);
    };
    var coursesKey  = ["Medical", "Dentist", "Ayurveda"];
    // console.log(coursesKey);

    return (
    <>
      <label className="fees-form__label">
        <div className = "fees-form__label_div">Courses:</div>
        
        { 
          coursesKey.map((comment) => {
            return (
              <div style={{ alignItems: "center", margin: "5px 20px" }}>
                <button className="btn btn-primary btn-lg active"id="button" value={comment} onClick={getCoursesvalue}>
                 {comment}
                </button>
              </div>
            );
          })}
          <div>{selectedCoursesvalue}</div>

      </label>
    </>
  );
};

export default Courses;
