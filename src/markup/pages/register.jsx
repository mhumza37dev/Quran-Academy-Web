import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

import Alert from "react-bootstrap/Alert";

// Images
import logoWhite2 from "../../images/logo-white-2.png";
import bannerImg from "../../images/background/bg2.jpg";

const Register = () => {
  const [variant, setVariant] = useState("success");
  const [open, setOpen] = useState(true);
  const [alertIcon, setAlertIcon] = useState();
  const [message, setMessage] = useState("this is example alert");

  return (
    <>
      <div className="account-form">
        <div
          className="account-head"
          style={{ backgroundImage: "url(" + bannerImg + ")" }}
        >
          <Link to="/">
            <img src={logoWhite2} alt="" />
          </Link>
        </div>
        <div className="account-form-inner">
          <div className="account-container">
            <div className="heading-bx left">
              <h2 className="title-head">
                Sign Up <span>Now</span>
              </h2>
              <p>
                Login Your Account <Link to="/login">Click here</Link>
              </p>
            </div>
            <Alert show={open} variant={variant} onClick={() => setOpen(false)}>
              <i className={alertIcon}></i>
              {message}
            </Alert>
            <form className="contact-bx">
              <div className="row placeani">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <Form.Label>First Name</Form.Label>
                    <div className="input-group">
                      <input
                        name="name"
                        type="text"
                        placeholder="Your First Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <Form.Label>Last Name</Form.Label>

                    <div className="input-group">
                      <input
                        name="name"
                        type="text"
                        placeholder="Enter Your Last Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <Form.Label>Email</Form.Label>
                    <div className="input-group">
                      <input
                        name="email"
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <Form.Label>Mobile #</Form.Label>
                    <div className="input-group">
                      <input
                        name="phone"
                        type="phone"
                        placeholder="Your Mobile #"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <Form.Group controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                    />
                  </Form.Group>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <Form.Group controlId="dob">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      className="mr-sm-2 form-control"
                      id=""
                      custom
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Control>
                  </Form.Group>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <Form.Label>Password</Form.Label>
                    <div className="input-group">
                      <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <Form.Label>Confirm Password</Form.Label>
                    <div className="input-group">
                      <input
                        name="password"
                        type="password"
                        placeholder="Confirm Password"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                </div>

                <div className="col-lg-12 m-b30">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="btn button-md"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="col-lg-12">
                  <h6 className="m-b15">Sign Up with Social media</h6>
                  <Link className="btn flex-fill m-r10 facebook" to="#">
                    <i className="fa fa-facebook"></i>Facebook
                  </Link>
                  <Link className="btn flex-fill m-l5 google-plus" to="#">
                    <i className="fa fa-google-plus"></i>Google Plus
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
