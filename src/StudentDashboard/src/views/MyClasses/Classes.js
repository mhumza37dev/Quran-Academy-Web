import React, { useState, useEffect, useMemo } from "react";

import { useLoading, Audio } from "@agney/react-loading";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import { makeStyles } from "@material-ui/core/styles";

// reactstrap components
import {
  Badge,
  // Card,
  // CardHeader,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Alert,
  Button as BT,
} from "reactstrap";

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";

import { Modal } from "react-bootstrap";

const Classes = (props) => {
  // const [counter, setCounter] = useState(0);
  const [currentAdmin, setCurrentAdmin] = useState();

  const [adminId, setAdminId] = useState("");
  const [fetchedAdmins, setFetchedAdmins] = useState([]);
  const [runn, setrunn] = useState();
  const [show, setShow] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [mobile, setmobile] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [acceptTerms, setacceptTerms] = useState();
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = useState();
  const [mounted, setMounted] = useState(false);

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });

  // let admin = JSON.parse(localStorage.getItem("user"));
  // if (
  //   !admin.permissionss.includes("View Admins") &&
  //   admin.account.super === false
  // ) {
  //   props.history.push("/admin/404");
  // }

  useMemo(() => {
    setCurrentAdmin(JSON.parse(localStorage.getItem("student")));
    console.log(JSON.parse(localStorage.getItem("student")).account.id);
  }, []);

  useEffect(() => {
    fetch(
      `https://quran-server.herokuapp.com/student/attendance/count/all/${currentAdmin.account.id}`,
      {
        method: "GET",
        dataType: "JSON",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${currentAdmin.jwtToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("sdsadasdasd========>?", res);
        setFetchedAdmins(res);
      });
  }, []);

  // const edit = () => {
  //   console.log(currentAdmin.account.jwtToken);
  //   // setAdminId(a);
  //   let url = `https://quran-server.herokuapp.com/admin/${adminId}`;
  //   if (adminId !== "") {
  //     console.log(url);

  //     fetch(url, {
  //       method: "PUt",
  //       dataType: "JSON",
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8",
  //         Authorization: `Bearer ${currentAdmin.account.jwtToken}`,
  //       },
  //       body: JSON.stringify({
  //         firstName: firstname,
  //         lastName: lastname,
  //         mobile: mobile,
  //         dob: dob,
  //         gender: gender,
  //         email: email,
  //         password: password,
  //         confirmPassword: confirmPassword,
  //         acceptTerms: acceptTerms,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         setMessage(res.message);
  //         if (res.message === "Successfully Updated") {
  //           localStorage.setItem("lastCallAt", Date.now());
  //           setAlertType("success");
  //           setOpen(true);
  //           setTimeout(() => {
  //             handleShow();
  //           }, 1000);
  //         } else if (res.message === "Email is already in use") {
  //           setAlertType("warning");
  //           setOpen(true);
  //           // setTimeout(() => {
  //           //   setOpen(false);
  //           // }, 5000);
  //         } else if (res.message === "Phone Number is already in use") {
  //           setAlertType("warning");
  //           setOpen(true);
  //           // setTimeout(() => {
  //           //   setOpen(false);
  //           // }, 5000);
  //         } else {
  //           setAlertType("danger");
  //           setOpen(true);
  //           // setTimeout(() => {
  //           //   setOpen(false);
  //           // }, 5000);
  //         }
  //       });
  //   } else {
  //     setMessage("Wait a minute !!!! who are you ?????");
  //     setAlertType("danger");
  //     setOpen(true);
  //     // setTimeout(() => {
  //     //   setOpen(false);
  //     // }, 5000);
  //   }
  // };

  // const deleteAdmin = (adminid) => {
  //   console.log("delete function start");
  //   fetch(`https://quran-server.herokuapp.com/admin/block/${adminid}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("response===> ", res);
  //       setMessage(res.message);
  //       if (res.message === "Account deleted successfully") {
  //         localStorage.setItem("lastCallAt", Date.now());
  //         setAlertType("success");
  //         setOpen(true);
  //         setAdminId("");
  //       } else {
  //         setAlertType("danger");
  //         setOpen(true);
  //       }
  //     });
  // };

  // const displayStates = () => {
  //   // console.log({
  //   //   firstname: firstname,
  //   //   lastname: lastname,
  //   //   mobile: mobile,
  //   //   dob: dob,
  //   //   gender: gender,
  //   //   email: email,
  //   //   password: password,
  //   //   confirmPassword: confirmPassword,
  //   //   acceptTerms: acceptTerms,
  //   // });
  // };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const classes = useStyles();

  function getFormattedDate(date) {
    var date = new Date(date);
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return year + "-" + month + "-" + day;
  }

  var counter = 0;

  return (
    <>
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8"></div>

      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <Alert
              color={alertType}
              isOpen={open}
              onClick={() => setOpen(false)}
              toggle={() => setOpen(false)}
            >
              {message}
            </Alert>
            <div>
              <div className="container justify-content-center">
                    <div className="pb-5">
                  <h1 className="font-weight-bold fs">Update Admin</h1>
                  <div
                    style={{
                      borderBottom: "5px solid #5e72e4",
                      width: "95px",
                    }}
                  />
                </div>
                <form className="css-prp">
                  <div className="row pb-lg-3 pb-md-3">
                    <div className="col-12  col-lg-6 col-md-6 form-group">
                      <label htmlFor="Name">First Name</label>
                      <input
                        placeholder="enter first name"
                        type="name"
                        value={firstname}
                        className="form-control"
                        onChange={(e) => {
                          setfirstname(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 form-group">
                      <label htmlFor="name">Last Name</label>
                      <input
                        placeholder="enter last name"
                        type="name"
                        value={lastname}
                        className="form-control"
                        onChange={(e) => {
                          setlastname(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-12  col-lg-6 col-md-6 form-group">
                      <label htmlFor="address">Mobile</label>
                      <input
                        placeholder="enter mobile number"
                        type="text"
                        value={mobile}
                        className="form-control"
                        onChange={(e) => {
                          setmobile(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-12 col-lg-6 col-md-6 form-group">
                      <label htmlFor="birthday">Birthday</label>
                      <input
                        placeholder="enter birthday"
                        type="Date"
                        value={getFormattedDate(dob).toString()}
                        className="form-control"
                        onChange={(e) => {
                          setdob(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-12 col-lg-12 col-md-12 form-group">
                      <label htmlFor="birthday">Email</label>
                      <input
                        placeholder="Enter Email"
                        type="email"
                        value={email}
                        className="form-control"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-12 col-lg-6 col-md-6 form-group">
                      <label htmlFor="name">Password</label>
                      <input
                        placeholder="Enter Password"
                        type="password"
                        value={password}
                        className="form-control"
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                      />
                    </div>

                    <div className="dropdown col-xl-6 col-lg-6 col-md-6">
                      <label htmlFor="name">Gender</label>
                      <select
                        className="form-control"
                        id="sel1"
                        value={gender}
                        onChange={(e) => {
                          setgender(e.target.value);
                        }}
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <BT variant="secondary" onClick={handleClose}>
            Close
          </BT>
          <BT
            style={{ background: "#5e72e4", color: "white" }}
            // onClick={displayStates}
            // onClick={() => {
            //   displayStates();
            //   edit();
            // }}
          >
            Update
          </BT>
        </Modal.Footer>
      </Modal> */}

      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader color="primary">
                <h4
                  className={classes.cardTitleWhite}
                  style={{ color: "white" }}
                >
                  {" "}
                  MY CLASSES
                </h4>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th>S.No</th>
                      {/* <th scope="col" className="text-center">
                        ClassID
                      </th> */}
                      <th scope="col" className="text-center">
                        Course
                      </th>
                      <th scope="col" className="text-center">
                        Teacher
                      </th>
                      <th scope="col" className="text-center">
                        Days
                      </th>
                      <th scope="col" className="text-center">
                        Time-Slot
                      </th>
                      <th scope="col" className="text-center">
                        Absents
                      </th>
                      <th scope="col" className="text-center">
                        Presents
                      </th>
                      <th scope="col" className="text-center">
                        Total Attendance
                      </th>
                      {/* <th scope="col" />
                    <th scope="col" /> */}
                    </tr>
                  </thead>

                  <tbody>
                    {fetchedAdmins === undefined
                      ? null
                      : fetchedAdmins.AllClasses !== undefined &&
                        fetchedAdmins.AllClasses.map((data) =>
                          data.status !== "blocked" ? (
                            <tr>
                              <td>{++counter}</td>
                              {/* <td scope="row" className="text-center">
                                <span className="mb-0 text-sm text-center">
                                  {data.id}
                                </span>
                              </td> */}
                              <td className="text-center">
                                <span className="mb-0 text-md">
                                  {data.course.Title}
                                </span>
                              </td>
                              <td className="text-center">
                                {data.teacher[0].firstName +
                                  " " +
                                  data.teacher[0].lastName}
                              </td>
                              <td className="text-center">{data.days}</td>
                              <td className="text-center">{data.time_slot}</td>
                              <td className="text-center">
                                {
                                  fetchedAdmins.TotalAttendance[data.id][
                                    fetchedAdmins.TotalAttendance[data.id]
                                      .length - 1
                                  ]["Total Absent"]
                                }
                              </td>

                              <td className="text-center">
                                {data.status === "Inactive" ? (
                                  <i className="bg-warning" />
                                ) : (
                                  <i className="bg-success" />
                                )}
                                {
                                  fetchedAdmins.TotalAttendance[data.id][
                                    fetchedAdmins.TotalAttendance[data.id]
                                      .length - 1
                                  ]["Total Present"]
                                }
                              </td>
                              <td className="text-center">
                                {fetchedAdmins.TotalAttendance[data.id][
                                  fetchedAdmins.TotalAttendance[data.id]
                                    .length - 1
                                ]["Total Present"] +
                                  fetchedAdmins.TotalAttendance[data.id][
                                    fetchedAdmins.TotalAttendance[data.id]
                                      .length - 1
                                  ]["Total Absent"]}
                              </td>
                            </tr>
                          ) : null
                        )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default Classes;
