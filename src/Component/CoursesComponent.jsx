import React, { useState } from "react";
import coursesPic3 from "../images/courses/pic3.jpg";

function CoursesComponent(props) {
  // const [selectedCourses, setSelectedCourses] = useState(localStorage.getItem("course_id").split(","))

  const getIds = (id) => {
    var array = [];
    if (localStorage.getItem("course_id") !== null) {
      array = localStorage.getItem("course_id").split(",");
    }
    if (!array.includes(id)) {
      array.push(id);
    }

    console.log("ssssssssssssssssssssssssssssssssssssssssssssss", array);
    localStorage.removeItem("course_id");
    localStorage.setItem("course_id", array);
  };

  console.log(props);
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {props.courses !== undefined &&
        props.courses.map((item) => (
          <div className="col-md-6 col-lg-4 col-sm-6 m-b30" key={item.id}>
            <div
              className="cours-bx shadow cursor"
              onClick={() => props.history.push("/courses-details", item.id)}
              // onClick={() => {
              //   // alert(item.id)
              //   getIds(item.id);
              // }}
            >
              <div className="action-box">
                <img src={coursesPic3} alt={item.Title} />
                <span
                  onClick={
                    () => props.history.push("/courses-details", item.id)
                    // alert(item.id)
                  }
                  className="btn"
                >
                  Read More
                </span>
              </div>
              <div className="info-bx">
                <span>{"Islamic"}</span>
                <h6 style={{ textTransform: "uppercase" }}>{item.Title}</h6>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default CoursesComponent;
