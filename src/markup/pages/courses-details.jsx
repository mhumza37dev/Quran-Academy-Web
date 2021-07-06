import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Images
import bannerImg from "../../images/banner/banner2.jpg";
import blogDefaultThum1 from "../../images/blog/default/thum1.jpg";

function CoursesDetails(props) {
  const [classes, setClasses] = useState();
  const arr = [1, 2, 3, 4];
  console.log(props.location.state);

  if (
    props.location.state === null ||
    props.location.state === undefined ||
    !props.location.state
  ) {
    props.history.push("/");
  }

  useEffect(() => {
    fetch("https://quran-server.herokuapp.com/class")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setClasses(res.filter((el) => el.course.id === props.location.state));
      });
  }, []);
  return (
    <>
      <Header />

      <div className="page-content">
        <div
          className="page-banner ovbl-dark"
          style={{ backgroundImage: "url(" + bannerImg + ")" }}
        >
          <div className="container">
            <div className="page-banner-entry">
              <h1 className="text-white">Courses Details</h1>
            </div>
          </div>
        </div>
        <div className="breadcrumb-row">
          <div className="container">
            <ul className="list-inline">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Courses Details</li>
            </ul>
          </div>
        </div>

        <div className="content-block">
          <div className="section-area section-sp1">
            <div className="container">
              <div className="row d-flex flex-row-reverse">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="courses-post">
                    <div className="ttr-post-media media-effect">
                      <Link to="#">
                        <img src={blogDefaultThum1} alt="" />
                      </Link>
                    </div>
                    <div className="ttr-post-info m-b30">
                      <div className="ttr-post-title ">
                        <h2 className="post-title">
                          Nvidia and UE4 Technologies Practice
                        </h2>
                      </div>
                      <div className="ttr-post-text">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="courese-overview" id="overview">
                    <h4>Overview</h4>
                    <div className="row">
                      <div className="col-md-12 col-lg-12">
                        <h5 className="m-b10">Course Description</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </p>
                        <h5 className="m-b10">Certification</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </p>
                        <h5 className="m-b10">Learning Outcomes</h5>
                        <ul className="list-checked primary">
                          <li>Over 37 lectures and 55.5 hours of content!</li>
                          <li>
                            LIVE PROJECT End to End Software Testing Training
                            Included.
                          </li>
                          <li>
                            Learn Software Testing and Automation basics from a
                            professional trainer from your own desk.
                          </li>
                          <li>
                            Information packed practical training starting from
                            basics to advanced testing techniques.
                          </li>
                          <li>
                            Best suitable for beginners to advanced level users
                            and who learn faster when demonstrated.
                          </li>
                          <li>
                            Course content designed by considering current
                            software testing technology and the job market.
                          </li>
                          <li>
                            Practical assignments at the end of every session.
                          </li>
                          <li>
                            Practical learning experience with live project work
                            and examples.cv
                          </li>
                        </ul>
                      </div>

                      <table className="ui table grey" id="myTable">
                        <thead>
                          <tr className="mb-4">
                            <th>Days</th>
                            <th>Time</th>
                            <th>Cost</th>
                            <th className="text-center">Available Seats</th>
                            <th>Teacher</th>
                            <th>Admission</th>
                          </tr>
                        </thead>

                        <tbody>
                          {classes !== undefined && classes.length > 0 ? (
                            classes.map((index) => (
                              <tr>
                                <td>{index.days}</td>
                                <td>{index.time_slot}</td>
                                <td>
                                  <strong>{"$" + index.fee}</strong>
                                </td>
                                <td className="text-center">
                                  {parseInt(index.max_students) -
                                    parseInt(index.students.length)}
                                </td>
                                <td>
                                  {index.teacher[0].firstName +
                                    " " +
                                    index.teacher[0].lastName}
                                </td>
                                <td>
                                  {" "}
                                  <a class="btn" role="button">
                                    Get Enrolled
                                  </a>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>no class for now</tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CoursesDetails;
