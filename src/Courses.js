import React,{useState} from "react";
// var data = require("./data.json");


const Courses = () => {
    
  const [selectedCoursesvalue, setSelectedCoursesvalue] = useState("");

    // var Coursesvalues = Object.keys(data);

    const getCoursesvalue = (e) => {
        setSelectedCoursesvalue(e.target.value);
        console.log(selectedCoursesvalue);
    };
    var coursesKey  = ["Medical", "Dentist", "Ayurveda"];
    // console.log(coursesKey);

    return (
    <>
      <label className="fees-form__label">
        Courses:
        { 
          coursesKey.map((comment) => {
            return (
              <div style={{ alignItems: "center", margin: "20px 20px" }}>
                <button className="btn btn-primary"id="button" value={comment} onClick={getCoursesvalue}>
                  <h4>{comment}</h4>
                </button>
              </div>
            );
          })}
      </label>
    </>
  );
};

export default Courses;
