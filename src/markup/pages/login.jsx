import React, { useState } from "react";
import { Link } from "react-router-dom";

// Images
import logoWhite2 from "../../images/logo-white-2.png";
import bannerImg from "../../images/background/bg2.jpg";
import Alert from "react-bootstrap/Alert";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("danger");
  const [open, setOpen] = useState(false);
  const [alertIcon, setAlertIcon] = useState();
  const [message, setMessage] = useState("this is example alert");

  if (localStorage.getItem("student")) {
    props.history.push("/");
  }

  const login = () => {
    console.log(email, "===>", password);
    console.log("in login function");
    if (email === "" && password === "") {
      setMessage("All Fields are required (*)");
      setVariant("warning");
      setAlertIcon("fa fa-exclamation-triangle");
      setOpen(true);
    } else if (email === "") {
      setMessage("Email is required");
      setVariant("warning");
      setAlertIcon("fa fa-exclamation-triangle");
      setOpen(true);
    } else if (password === "") {
      setMessage("Password is required");
      setVariant("warning");
      setAlertIcon("fa fa-exclamation-triangle");
      setOpen(true);
    } else {
      fetch("https://quran-server.herokuapp.com/student/student-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.status === 400) {
            setMessage(res.message);
            setVariant("danger");
            setAlertIcon("fa fa-times-circle");
            setOpen(true);
          } else {
            localStorage.setItem("student", JSON.stringify(res));
            props.history.push("/");
          }
        });
    }
  };

  const loginWithGoogle = () => {
    fetch("")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const loginWithFacebook = () => {
    fetch("")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

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
                Login to your <span>Account</span>
              </h2>
              <p>
                Don't have an account?{" "}
                <Link to="/register">Create one here</Link>
              </p>
            </div>
            <Alert show={open} variant={variant}>
              <i className={alertIcon}></i>
              {message}
            </Alert>
            <form className="contact-bx">
              <div className="row placeani">
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Your Email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        name="email"
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group form-forget">
                    <Link to="/forget-password" className="ml-auto">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12 m-b30">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="btn button-md"
                    onClick={(e) => {
                      e.preventDefault();
                      login();
                    }}
                  >
                    Login
                  </button>
                </div>
                <div className="col-lg-12">
                  <h6 className="m-b15">Login with Social media</h6>
                  <Link
                    className="btn flex-fill m-r10 facebook"
                    style={{ color: "white", border: "none" }}
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      loginWithFacebook();
                    }}
                  >
                    <i className="fa fa-facebook"></i>Facebook
                  </Link>
                  <Link
                    className="btn flex-fill m-l5 google-plus"
                    style={{ color: "white", border: "none" }}
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      loginWithGoogle();
                    }}
                  >
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

export default Login;
