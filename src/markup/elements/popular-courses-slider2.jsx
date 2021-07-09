import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Images
import coursesPic1 from "../../images/courses/pic10.jpg";

export default function PopularCoursesSlider2(props) {
  const [courses, setCourses] = useState();

  useEffect(() => {
    fetch("https://quran-server.herokuapp.com/course")
      .then((res) => res.json())
      .then((res) => {
        console.log("ssssss", res);
        setCourses(res);
      });
  }, []);

  const settings = {
    infinite: true,
    dots: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <Slider
        {...settings}
        className="courses-carousel-2 slick-slider owl-none"
      >
        {courses !== undefined &&
          courses.map((item) => (
            <div
              className="slider-item cursor"
              onClick={() => props.history.push("/courses-details", item.id)}
            >
              <div className="cours-bx">
                <div className="action-box">
                  <img src={coursesPic1} alt={item.Title} />
                  <Link
                    to="#"
                    onClick={() =>
                      props.history.push("/courses-details", item.id)
                    }
                    className="btn"
                  >
                    Read More
                  </Link>
                </div>
                <div className="info-bx">
                  <h6 style={{ textTransform: "uppercase" }}>
                    <span
                      onClick={() =>
                        props.history.push("/courses-details", item.id)
                      }
                    >
                      {item.Title}
                    </span>
                  </h6>
                </div>
                <div className="cours-more-info"></div>
              </div>
            </div>
          ))}
      </Slider>
    </>
  );
}
