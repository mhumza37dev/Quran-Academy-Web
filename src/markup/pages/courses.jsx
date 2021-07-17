import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as getCourses from "../../store/Action/CoursesAction";
// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Images
import bannerImg from "../../images/banner/banner3.jpg";

import Pagination from "../../Component/Pagination";

import CoursesComponent from "../../Component/CoursesComponent";

function Courses(props) {
  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const dispatcher = useDispatch();

  // console.log(props);

  const data = useSelector((state) => state.Course.getCourses);

  console.log("sadasdasdasdasdasdasdasdasdas",data)

  useEffect(() => {
    
    getCoursesMethod();
  }, []);

  const getCoursesMethod = async () => {
    setLoading(true);
    await dispatcher(getCourses.getCoursesData());
    setLoading(false);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchPosts = async () => {
  //     fetch("https://quran-server.herokuapp.com/course")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log("ssssss", res);
  //         setCourses(res);
  //         setLoading(false);
  //       });
  //   };

  //   fetchPosts();
  // }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header {...props} />

      <div className="page-content">
        <div
          className="page-banner ovbl-dark"
          style={{ backgroundImage: "url(" + bannerImg + ")" }}
        >
          <div className="container">
            <div className="page-banner-entry">
              <h1 className="text-white">Our Courses</h1>
            </div>
          </div>
        </div>
        <div className="breadcrumb-row">
          <div className="container">
            <ul className="list-inline">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Our Courses</li>
            </ul>
          </div>
        </div>

        <div className="content-block">
          <div className="section-area section-sp1">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                  <div className="widget widget_archive">
                    <h5 className="widget-title style-1">All Courses</h5>
                  </div>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-12">
                  <div className="row">
                    <CoursesComponent
                      {...props}
                      courses={currentPosts}
                      loading={loading}
                    />

                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={data.length}
                      paginate={paginate}
                    />
                    {/* <div className="col-lg-12 m-b20">
                      <div className="pagination-bx rounded-sm gray clearfix">
                        <ul className="pagination">
                          <li className="previous">
                            <Link to="#">
                              <i className="ti-arrow-left"></i> Prev
                            </Link>
                          </li>
                          <li className="active">
                            <Link to="#">1</Link>
                          </li>
                          <li>
                            <Link to="#">2</Link>
                          </li>
                          <li>
                            <Link to="#">3</Link>
                          </li>
                          <li className="next">
                            <Link to="#">
                              Next <i className="ti-arrow-right"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div> */}
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

export default Courses;
