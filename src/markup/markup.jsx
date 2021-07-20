import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Elements
import BackToTop from "./elements/back-top";
import PageScrollTop from "./elements/page-scroll-top";
// index
import Index3 from "./pages/index-3";

// About Us
import About1 from "./pages/about-1";

// Faq
import Faq1 from "./pages/faq-1";

// Other Pages
import Portfolio from "./pages/portfolio";
import Profile from "./pages/profile";
import Membership from "./pages/membership";
import Error404 from "./pages/error-404";
import Register from "./pages/register";
import Login from "./pages/login";
import TeacherLogin from "./pages/TeacherLogin";
import ForgetPassword from "./pages/forget-password";

// Courses
import Courses from "./pages/courses";
import CoursesDetails from "./pages/courses-details";

// Contact Us
import Contact1 from "./pages/contact-1";
import StudentProfile from "./pages/StudentProfile";
import Review from "../css/admin/review";

// import Admin from "../../layouts/Admin.js";
import Admin from "../StudentDashboard/src/layouts/Admin";
import Cart from "./pages/Cart";

class Markup extends Component {
  render() {
    return (
      <>
        <BrowserRouter basename={"/"}>
          <Switch>
            {/* Home Pages */}
            {/* <Route path='/' exact component={Index} />
						<Route path='/index-2' exact component={Index2} /> */}
            <Route path="/" exact component={Index3} />
            {/* About Us */}
            <Route path="/about" exact component={About1} />
            {/* <Route path='/about-2' exact component={About2} /> */}
            {/* Faq */}
            <Route path="/faq" exact component={Faq1} />
            {/* <Route path='/faq-2' exact component={Faq2} /> */}
            {/* Other Pages */}
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/error-404" exact component={Error404} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/teacher/login" exact component={TeacherLogin} />

            <Route path="/forget-password" exact component={ForgetPassword} />
            {/* <Route path="/student/profile" exact component={StudentProfile} /> */}
            {/* Courses */}
            <Route path="/courses" exact component={Courses} />
            <Route path="/courses-details" exact component={CoursesDetails} />
            <Route path="/cart" exact component={Cart} />

            {/* Contact Us */}
            <Route path="/contact" exact component={Contact1} />
            {/* Student Panel */}
            <Route path="/test" exact component={Review} />
            <Route path="/student/dashboard" exact component={Admin} />
            <Route path="/student/table" exact component={Admin} />
            <Route path="/student/user" exact component={Admin} />
            <Route path="/student/icons" exact component={Admin} />
            <Route path="/student/notifications" exact component={Admin} />
            <Route path="/student/typography" exact component={Admin} />
            <Route path="/student/classes" exact component={Admin} />
            <Route path="/student/transcript" exact component={Admin} />

            {/* Error Page */}
            <Route path="*" exact component={Error404} />
            {/* <Redirect from="/student/*" to="stude" /> */}
          </Switch>

          <PageScrollTop />
        </BrowserRouter>

        <BackToTop />
      </>
    );
  }
}

export default Markup;
