import React from "react";
import coursesPic3 from "../images/courses/pic3.jpg";

function CoursesComponent(props) {
  console.log(props);
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {props.courses !== undefined &&
        props.courses.map((item) => (
          <div className="col-md-6 col-lg-4 col-sm-6 m-b30">
            <div
              className="cours-bx shadow cursor"
              onClick={() => props.history.push("/courses-details", item.id)}
            >
              <div className="action-box">
                <img src={coursesPic3} alt={item.Title} />
                <span
                  onClick={() =>
                    props.history.push("/courses-details", item.id)
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
