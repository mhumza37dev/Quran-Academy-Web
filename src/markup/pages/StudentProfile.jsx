import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Elements
import Courses from "../elements/profile-content/courses";
import QuizResults from "../elements/profile-content/quiz-results";
import EditProfile from "../elements/profile-content/edit-profile";
import ChangePassword from "../elements/profile-content/change-password";

// Images
import bannerImg from "../../images/banner/banner1.jpg";
import profilePic1 from "../../images/profile/pic1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "20px auto",
    "&:hover": {
      border: "solid #5e72e4",
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
}));

const StudentProfile = (props) => {
  const [currentStudent, setCurrentStudent] = useState();

  if (!localStorage.getItem("student")) {
    props.history.push("/");
  }

  useMemo(() => {
    setCurrentStudent(JSON.parse(localStorage.getItem("student")));
    console.log(currentStudent);
  }, []);

  const classes = useStyles();

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
              <h1 className="text-white">Profile</h1>
            </div>
          </div>
        </div>
        <div className="breadcrumb-row">
          <div className="container">
            <ul className="list-inline">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Profile</li>
            </ul>
          </div>
        </div>

        <div className="content-block">
          <div className="section-area section-sp1">
            <div className="container">
              <Tab.Container defaultActiveKey="tabOne">
                <Tab.Content>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 m-b30">
                      <div className="profile-bx text-center">
                        {/* <div className="user-profile-thumb">
                          <img src={profilePic1} alt="" />
                        </div> */}
                        <div className="">
                          <Avatar
                            alt={
                              currentStudent !== undefined &&
                              currentStudent.account.firstName +
                                " " +
                                " " +
                                currentStudent.account.lastName
                            }
                            src={profilePic1}
                            className={classes.large}
                          />
                        </div>
                        <div className="profile-info">
                          <h4>
                            {currentStudent !== undefined &&
                              currentStudent.account.firstName +
                                " " +
                                " " +
                                currentStudent.account.lastName}
                          </h4>
                          <span>
                            {currentStudent !== undefined &&
                              currentStudent.account.email}
                          </span>
                        </div>
                        <div className="profile-social">
                          <ul className="list-inline m-a0">
                            <li>
                              <Link to="#">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="fa fa-google-plus"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="profile-tabnav">
                          <Nav className="nav-tabs">
                            <Nav.Item>
                              <Nav.Link eventKey="tabOne">
                                <i className="ti-book"></i>Learning
                              </Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                              <Nav.Link eventKey="tabTwo">
                                <i className="ti-bookmark-alt"></i>Quiz Results
                              </Nav.Link>
                            </Nav.Item> */}
                            <Nav.Item>
                              <Nav.Link eventKey="tabThree">
                                <i className="ti-pencil-alt"></i>Edit Profile
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="tabFour">
                                <i className="ti-lock"></i>Change Password
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12 m-b30">
                      <div className="profile-content-bx">
                        <div className="tab-content">
                          <Tab.Pane eventKey="tabOne">
                            <Courses />
                          </Tab.Pane>
                          {/* <Tab.Pane eventKey="tabTwo">
                            <QuizResults />
                          </Tab.Pane> */}
                          <Tab.Pane eventKey="tabThree">
                            <EditProfile />
                          </Tab.Pane>
                          <Tab.Pane eventKey="tabFour">
                            <ChangePassword />
                          </Tab.Pane>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StudentProfile;
