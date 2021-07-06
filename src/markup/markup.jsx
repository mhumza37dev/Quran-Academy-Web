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
import ForgetPassword from "./pages/forget-password";

// Courses
import Courses from "./pages/courses";
import CoursesDetails from "./pages/courses-details";

// Contact Us
import Contact1 from "./pages/contact-1";
import StudentProfile from "./pages/StudentProfile";

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
            <Route path="/forget-password" exact component={ForgetPassword} />
            <Route path="/student/profile" exact component={StudentProfile} />

            {/* Courses */}
            <Route path="/courses" exact component={Courses} />
            <Route path="/courses-details" exact component={CoursesDetails} />

            {/* Contact Us */}
            <Route path="/contact" exact component={Contact1} />

            <Route path="*" exact component={Error404} />
          </Switch>

          <PageScrollTop />
        </BrowserRouter>

        <BackToTop />
      </>
    );
  }
}

export default Markup;
