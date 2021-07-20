import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

// Images
import logo from "../../images/QURAN-04.png";
import logoWhite2 from "../../images/logo-white-2.png";
import bannerImg from "../../images/background/bg2.jpg";
import Alert from "react-bootstrap/Alert";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const TeacherLogin = (props) => {
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
            localStorage.setItem("teacher", JSON.stringify(res));
            props.history.push("/");
          }
        });
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
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
        } else if (res.account) {
          localStorage.setItem("student", JSON.stringify(res));
          props.history.push("");
          console.log("sssssssss");
        }
      });
  };

  const loginWithFacebook = (response) => {
    console.log(response);
    if (response.email !== undefined) {
      fetch("https://quran-server.herokuapp.com/student/facebook2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: response.name,
          imageUrl: response.picture.data.url,
          userID: response.id,
          email: response.email,
          providerName: response.graphDomain,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.account) {
            localStorage.setItem("student", JSON.stringify(res));
            props.history.push("");
            console.log("sssssssss");
          } else {
            setMessage("Couldn't Login, Try Again after a while.");
            setVariant("danger");
            setAlertIcon("fa fa-times-circle");
            setOpen(true);
          }
        });
    } else {
      setMessage("Couldn't Login");
      setVariant("danger");
      setAlertIcon("fa fa-times-circle");
      setOpen(true);
    }
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
                Login to your <span>Account</span>
              </h2>
              <p>
                Don't have an account?{" "}
                <Link to="/register">Create one here as Instructor</Link>
              </p>
            </div>
            <Alert show={open} variant={variant} onClick={() => setOpen(false)}>
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
                  <FacebookLogin
                    appId="1427438870956312"
                    autoLoad={false}
                    icon={true}
                    fields="name,email,picture"
                    callback={loginWithFacebook}
                    size={"small"}
                    render={(renderProps) => (
                      <Link
                        className="btn flex-fill m-r10 facebook"
                        onClick={(e) => {
                          renderProps.onClick();
                          // console.trace();
                        }}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-facebook"></i>Sign In with Facebook
                      </Link>
                    )}
                  />
                  <GoogleLogin
                    className="btn flex-fill m-l5 google-plus"
                    clientId="862532654552-a4dtqhi1d9pkrfang07hdijg2pcj2254.apps.googleusercontent.com"
                    onSuccess={loginWithGoogle}
                    onFailure={responseGoogle}
                    render={(renderProps) => (
                      <Link
                        className="btn flex-fill m-l5 google-plus"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <i className="fa fa-google-plus"></i>Sign In with Google
                      </Link>
                    )}
                  />

                  <div className="heading-bx left">
                    <p>
                      <h5 className="title-head">Are you a </h5>
                      <Link style={{ marginLeft: "5px" }} to="/login">
                        Student ?
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

export default TeacherLogin;
