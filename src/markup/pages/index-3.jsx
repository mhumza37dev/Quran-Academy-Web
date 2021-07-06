import React, { useMemo, useState } from "react";

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Elements
import MainSlider from "../elements/slider/slider2";
import ServicesContent3 from "../elements/services-content-3";
import AppointmentBox from "../elements/appointment-box";
import Testimonial3 from "../elements/testimonial3";
import PopularCoursesSlider2 from "../elements/popular-courses-slider2";

// Images
import bg4 from "../../images/background/bg4.jpg";

const Index3 = (props) => {
  const [currentStudent, setCurrentStudent] = useState();

  if (!localStorage.getItem("student")) {
    props.history.push("/login");
  }

  useMemo(
    () => setCurrentStudent(JSON.parse(localStorage.getItem("student"))),
    []
  );

  return (
    <>
      <Header {...props} />

      <div className="page-content bg-white">
        <MainSlider />

        <div className="content-block" id="content-area">
          <div
            className="popular-courses-bx"
            style={{
              backgroundImage: "url(" + bg4 + ")",
              backgroundSize: "cover",
            }}
          >
            <div className="section-area section-sp3">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 heading-bx style1 text-center">
                    <h2 className="title-head">Our Awesome Services</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page
                    </p>
                  </div>
                </div>

                <ServicesContent3 {...props} />
              </div>
            </div>

            <div className="section-area section-sp1">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 heading-bx style1 text-center">
                    <h2 className="title-head">Popular Courses</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page
                    </p>
                  </div>
                </div>

                <PopularCoursesSlider2 {...props} />
              </div>
            </div>
          </div>

          <AppointmentBox {...props} />

          <Testimonial3 {...props} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index3;
