import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import Alert from "react-bootstrap/Alert";

// Images
import logo from "../../images/QURAN-04.png";

import logoWhite2 from "../../images/logo-white-2.png";
import bannerImg from "../../images/background/bg2.jpg";

const Register = (props) => {
  const [variant, setVariant] = useState("success");
  const [open, setOpen] = useState(false);
  const [alertIcon, setAlertIcon] = useState();
  const [message, setMessage] = useState("this is example alert");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = () => {
    setLoading(true);
    fetch("https://quran-server.herokuapp.com/student/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "disabled",
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        mobile: mobile,
        gender: gender,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        acceptTerms: true,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        if (res.message === "Email is already in use") {
          setLoading(false);
          setVariant("warning");
          setOpen(true);
        } else if (res.message === "Phone Number is already in use") {
          setLoading(false);
          setVariant("warning");
          setOpen(true);
        } else if (
          res.message ===
          "Registration successful, please check your email for verification instructions"
        ) {
          setLoading(false);
          setVariant("success");
          setOpen(true);
        } else {
          setLoading(false);
          setVariant("danger");
          setOpen(true);
        }
      });
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const loginWithGoogle = (response) => {
    console.log(response["profileObj"]);
    console.log("in google login function");
    fetch("https://quran-server.herokuapp.com/student/google2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response["profileObj"]),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (!res.account) {
          setMessage("Couldn't Login");
          setVariant("danger");
          setAlertIcon("fa fa-times-circle");
          setOpen(true);
        }
        if (res.account) {
          localStorage.setItem("student", JSON.stringify(res));
          props.history.push("");
          console.log("sssssssss");
        }
      });
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <>
      <div className="account-form">
        <div className="account-head">
          <Link to="/">
            <img src={logo} alt="" width="50%" />
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
                        onChange={(e) => setFirstName(e.target.value)}
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
                        onChange={(e) => setLastName(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setMobile(e.target.value)}
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
                      onChange={(e) => setDob(e.target.value)}
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
                      onChange={(e) => setGender(e.target.value)}
                      custom
                    >
                      <option>Select Gender</option>
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
                        onChange={(e) => setPassword(e.target.value)}
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
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 m-b30">
                  <button
                    disabled={loading}
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="btn button-md"
                    onClick={(e) => {
                      e.preventDefault();
                      signUp();
                    }}
                  >
                    {loading ? <span>Please Wait</span> : null}
                    {loading ? (
                      <i
                        className="fa fa-spinner fa-pulse"
                        style={{ margin: "5px" }}
                      ></i>
                    ) : null}
                    {!loading ? <span>Sign Up</span> : null}
                  </button>
                </div>
                <div className="col-lg-12">
                  <h6 className="m-b15">Sign Up with Social media</h6>
                  <FacebookLogin
                    appId="1427438870956312"
                    autoLoad={false}
                    icon={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    render={(renderProps) => (
                      <button
                        className="btn flex-fill m-r10 facebook"
                        onClick={(e) => {
                          e.preventDefault();
                          console.trace();
                        }}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-facebook"></i>Sign Up with Facebook
                      </button>
                    )}
                  />
                  <GoogleLogin
                    className="btn flex-fill m-l5 google-plus"
                    clientId="862532654552-a4dtqhi1d9pkrfang07hdijg2pcj2254.apps.googleusercontent.com"
                    onSuccess={loginWithGoogle}
                    onFailure={responseGoogle}
                    theme={"dark"}
                    icon={false}
                  >
                    <i className="fa fa-google-plus"></i>Sign Up with Google
                  </GoogleLogin>

                  <div className="heading-bx left">
                    <p>
                      <h5 className="title-head">Are you a </h5>
                      <Link style={{ marginLeft: "5px" }} to="/teacher/login">
                        Teacher ?
                      </Link>
                    </p>
                  </div>
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
