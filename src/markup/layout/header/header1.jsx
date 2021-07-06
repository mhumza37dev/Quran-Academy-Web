import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";

// Images
import logo from "../../../images/logo.png";
import adv from "../../../images/adv/adv.jpg";

const Header = (props) => {
  const [currentStudent, setCurrentStudent] = useState();
  useMemo(() => {
    setCurrentStudent(JSON.parse(localStorage.getItem("student")));
    console.log(currentStudent);
  }, []);

  useEffect(() => {
    // Mobile Menu sidebar function
    var btn = document.querySelector(".menuicon");
    var nav = document.querySelector(".menu-links");

    function toggleFunc() {
      btn.classList.toggle("open");
      nav.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Mobile Submenu open close function
    var navMenu = [].slice.call(
      document.querySelectorAll(".menu-links > ul > li")
    );
    for (var y = 0; y < navMenu.length; y++) {
      navMenu[y].addEventListener("click", function () {
        menuClick(this);
      });
    }

    function menuClick(current) {
      const active = current.classList.contains("open");
      navMenu.forEach((el) => el.classList.remove("open"));

      if (active) {
        current.classList.remove("open");
        console.log("active");
      } else {
        current.classList.add("open");
        console.log("close");
      }
    }
  });

  return (
    <>
      <header className="header rs-nav header-transp arent">
        <div className="top-bar">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="topbar-left">
                <ul>
                  <li>
                    <Link to="/faq">
                      <i className="fa fa-question-circle"></i>Ask a Question
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-envelope-o"></i>support@reignsol.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topbar-right">
                <ul>
                  {currentStudent !== undefined ? (
                    <>
                      <ul className="">
                        <li className="active">
                          <Link to="/student/profile">
                            {currentStudent.account.firstName +
                              " " +
                              " " +
                              currentStudent.account.lastName}
                            <i
                              className="fa fa-user-circle"
                              style={{ fontSize: "1rem", marginLeft: "0.5rem" }}
                            ></i>
                          </Link>
                        </li>

                        <li>
                          <Link
                            onClick={() => {
                              localStorage.removeItem("student");
                              props.history.push("/login");
                            }}
                          >
                            Logout <i class="fa fa-power-off"></i>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Sticky enabled={true} className="sticky-header navbar-expand-lg">
          <div className="menu-bar clearfix">
            <div className="container clearfix">
              {/* <!-- Header Logo ==== --> */}
              <div className="menu-logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              {/* <!-- Mobile Nav Button ==== --> */}
              <button
                className="navbar-toggler collapsed menuicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#menuDropdown"
                aria-controls="menuDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Author Nav ==== --> */}
              <div className="secondary-menu">
                <div className="secondary-inner">
                  <ul>
                    <li>
                      <Link to="#" className="btn-link">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="btn-link">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="btn-link">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Navigation Menu ==== --> */}
              <div
                className="menu-links navbar-collapse collapse justify-content-start"
                id="menuDropdown"
              >
                <div className="menu-logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <ul className="nav navbar-nav">
                  <li className="">
                    <Link to="/">Home </Link>
                  </li>

                  <li className="add-mega-menu">
                    <Link to="/courses">Courses </Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>

                  <li>
                    <Link to="/about">About Us</Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact Us </Link>
                  </li>
                </ul>
                <div className="nav-social-link">
                  <Link to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
              {/* <!-- Navigation Menu END ==== --> */}
            </div>
          </div>
        </Sticky>
      </header>
    </>
  );
};

export default Header;
