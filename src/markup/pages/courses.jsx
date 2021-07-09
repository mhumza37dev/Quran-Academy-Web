import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Images
import bannerImg from "../../images/banner/banner3.jpg";
import adv from "../../images/adv/adv.jpg";
import blogRecentPic1 from "../../images/blog/recent-blog/pic1.jpg";
import blogRecentPic3 from "../../images/blog/recent-blog/pic3.jpg";
import coursesPic1 from "../../images/courses/pic1.jpg";
import coursesPic2 from "../../images/courses/pic2.jpg";
import coursesPic3 from "../../images/courses/pic3.jpg";
import coursesPic4 from "../../images/courses/pic4.jpg";
import coursesPic5 from "../../images/courses/pic5.jpg";
import coursesPic6 from "../../images/courses/pic6.jpg";
import coursesPic7 from "../../images/courses/pic7.jpg";
import coursesPic8 from "../../images/courses/pic8.jpg";
import coursesPic9 from "../../images/courses/pic9.jpg";
import Pagination from "../../Component/Pagination";

import CoursesComponent from "../../Component/CoursesComponent";

const content = [
  {
    Thumb: coursesPic1,
    Title: "Introduction EduChamp – LMS plugin",
    Tag: "Programming",
    Review: 3,
    PriceDel: 120,
    Price: 190,
  },
  {
    Thumb: coursesPic2,
    Title: "Learn PHP Programming From Scratch",
    Tag: "Developing",
    Review: 4,
    PriceDel: 180,
    Price: 150,
  },
  {
    Thumb: coursesPic3,
    Title: "Master Microservices with Spring",
    Tag: "Coding",
    Review: 2,
    PriceDel: 520,
    Price: 234,
  },
  {
    Thumb: coursesPic4,
    Title: "Build A Full Web Chat App From Scratch",
    Tag: "Marketing",
    Review: 3,
    PriceDel: 320,
    Price: 260,
  },
  {
    Thumb: coursesPic4,
    Title: "Strategy Law And Organization",
    Tag: "Lerning",
    Review: 4,
    PriceDel: 120,
    Price: 260,
  },
  {
    Thumb: coursesPic5,
    Title: "Fundamentals Of Music Theory Learn New",
    Tag: "Programming",
    Review: 1,
    PriceDel: 140,
    Price: 240,
  },
  {
    Thumb: coursesPic7,
    Title: "Introduction EduChamp – LMS plugin",
    Tag: "Programming",
    Review: 3,
    PriceDel: 120,
    Price: 190,
  },
  {
    Thumb: coursesPic8,
    Title: "Learn PHP Programming From Scratch",
    Tag: "Developing",
    Review: 4,
    PriceDel: 180,
    Price: 150,
  },
  {
    Thumb: coursesPic9,
    Title: "Master Microservices with Spring",
    Tag: "Coding",
    Review: 2,
    PriceDel: 520,
    Price: 234,
  },
  {
    Thumb: coursesPic4,
    Title: "Build A Full Web Chat App From Scratch",
    Tag: "Marketing",
    Review: 3,
    PriceDel: 320,
    Price: 260,
  },
  {
    Thumb: coursesPic6,
    Title: "Strategy Law And Organization ",
    Tag: "Lerning",
    Review: 4,
    PriceDel: 120,
    Price: 260,
  },
  {
    Thumb: coursesPic2,
    Title: "Fundamentals Of Music Theory Learn New",
    Tag: "Programming",
    Review: 1,
    PriceDel: 140,
    Price: 240,
  },
];

function Courses(props) {
  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  console.log(props);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      fetch("https://quran-server.herokuapp.com/course")
        .then((res) => res.json())
        .then((res) => {
          console.log("ssssss", res);
          setCourses(res);
          setLoading(false);
        });
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = courses.slice(indexOfFirstPost, indexOfLastPost);

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
                      totalPosts={courses.length}
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
