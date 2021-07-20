import React, { useState, useEffect, useMemo } from "react";

import { useLoading, Audio } from "@agney/react-loading";

import SearchField from "react-search-field";

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

  const [copyArray, setCopyArray] = useState([]);

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

  const [course, setCourseSearch] = useState();
  const [timeSearch, setTimeSearch] = useState();
  const [daySearch, setDaySearch] = useState();
  const [teacherSearch, setTeacherSearch] = useState();

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });

  if (!JSON.parse(localStorage.getItem("student"))) {
    props.history.push("/login");
  }

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
                      <th></th>
                      <th className="text-center">
                        {" "}
                        <SearchField
                          placeholder="Search Course"
                          onChange={(value, event) => {
                            if (value.length > 0) {
                              console.log("course search value", value);
                              console.log(
                                fetchedAdmins.AllClasses.filter((item) =>
                                  item.course.Title.toLowerCase().includes(
                                    value
                                  )
                                )
                              );
                              setCopyArray(
                                fetchedAdmins.AllClasses.filter((item) =>
                                  item.course.Title.toLowerCase().includes(
                                    value
                                  )
                                )
                              );
                            } else {
                              setCopyArray([]);
                            }
                          }}
                        />
                      </th>
                      <th className="text-center">
                        {" "}
                        <SearchField
                          placeholder="Search Teacher"
                          // onChange={onTeacherSearch}
                          onChange={(value, event) => {
                            if (value.length > 0) {
                              console.log("Teacher search value", value);
                              console.log(
                                fetchedAdmins.AllClasses.filter((item) =>
                                  item.teacher[0].firstName
                                    .toLowerCase()
                                    .includes(value)
                                )
                              );
                              setCopyArray(
                                fetchedAdmins.AllClasses.filter((item) =>
                                  item.teacher[0].firstName
                                    .toLowerCase()
                                    .includes(value)
                                )
                              );
                            } else {
                              setCopyArray([]);
                            }
                          }}
                        />
                      </th>
                      <th className="text-center">
                        {" "}
                        <SearchField
                          placeholder="Search Days"
                          // onChange={onDaySearch}
                          onChange={(value, event) => {
                            if (value.length > 0) {
                              console.log("Days search value", value);
                              console.log(
                                fetchedAdmins.AllClasses.filter((item) =>
                                  item.days.toLowerCase().includes(value)
                                )
                              );
                              setCopyArray(
                                fetchedAdmins.AllClasses.filter((item) =>
                                  item.days.toLowerCase().includes(value)
                                )
                              );
                            } else {
                              setCopyArray([]);
                            }
                          }}
                        />
                      </th>
                      <th className="text-center">
                        {" "}
                        <SearchField
                          placeholder="Search Time-Slot"
                          onChange={(value, event) => {
                            if (value.length > 0) {
                              console.log("Time search value", value);
                              console.log(
                                fetchedAdmins.AllClasses.filter((item) =>
                                  item.time_slot.toLowerCase().includes(value)
                                )
                              );
                              setCopyArray(
                                fetchedAdmins.AllClasses.filter((item) =>
                                  item.time_slot.toLowerCase().includes(value)
                                )
                              );
                            } else {
                              setCopyArray([]);
                            }
                          }}
                        />
                      </th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th>S.No</th>
                      <th scope="col" className="text-center">
                        Course
                      </th>
                      <th scope="col" className="text-center">
                        Teacher
                      </th>
                      <th scope="col" className="text-center">
                        Days
                      </th>
                      <th
                        scope="col"
                        className="text-center"
                        // style={{ borderLeft: "1px solid #dee2e6" }}
                      >
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
                    </tr>
                  </thead>

                  <tbody>
                    {fetchedAdmins ===
                    undefined ? null : fetchedAdmins.AllClasses !==
                      undefined ? (
                      fetchedAdmins.AllClasses.length > 0 ? (
                        copyArray === undefined ? (
                          <span>No result found</span>
                        ) : copyArray.length > 0 ? (
                          copyArray.map((data) => (
                            <tr>
                              <th>{++counter}</th>
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
                              <td
                                className="text-center"
                                // style={{ borderLeft: "1px solid #dee2e6" }}
                              >
                                {data.time_slot}
                              </td>
                              <td className="text-center">
                                {fetchedAdmins.TotalAttendance[data.id] !==
                                undefined ? (
                                  fetchedAdmins.TotalAttendance[data.id][
                                    fetchedAdmins.TotalAttendance[data.id]
                                      .length - 1
                                  ]["Total Absent"]
                                ) : (
                                  <span>-</span>
                                )}
                              </td>

                              <td className="text-center">
                                {data.status === "Inactive" ? (
                                  <i className="bg-warning" />
                                ) : (
                                  <i className="bg-success" />
                                )}
                                {fetchedAdmins.TotalAttendance[data.id] !==
                                undefined ? (
                                  fetchedAdmins.TotalAttendance[data.id][
                                    fetchedAdmins.TotalAttendance[data.id]
                                      .length - 1
                                  ]["Total Present"]
                                ) : (
                                  <span>-</span>
                                )}
                              </td>

                              <td className="text-center">
                                {fetchedAdmins.TotalAttendance[data.id] !==
                                undefined ? (
                                  fetchedAdmins.TotalAttendance[data.id][
                                    fetchedAdmins.TotalAttendance[data.id]
                                      .length - 1
                                  ]["Total Present"] +
                                  fetchedAdmins.TotalAttendance[data.id][
                                    fetchedAdmins.TotalAttendance[data.id]
                                      .length - 1
                                  ]["Total Absent"]
                                ) : (
                                  <span>-</span>
                                )}
                              </td>
                            </tr>
                          ))
                        ) : (
                          fetchedAdmins.AllClasses.map((data) => (
                            <tr>
                              <th>{++counter}</th>
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
                              <td
                                className="text-center"
                                // style={{ borderLeft: "1px solid #dee2e6" }}
                              >
                                {data.time_slot}
                              </td>
                              <td className="text-center">
                                {fetchedAdmins.TotalAttendance[data.id] !==
                                undefined ? (
                                  fetchedAdmins.TotalAttendance[data.id][
                                    fetchedAdmins.TotalAttendance[data.id]
                                      .length - 1
                                  ]["Total Absent"]
                                ) : (
                                  <span>-</span>
                                )}
                              </td>

                              <td className="text-center">
                                {data.status === "Inactive" ? (
                                  <i className="bg-warning" />
                                ) : (
                                  <i className="bg-success" />
                                )}
                                {fetchedAdmins.TotalAttendance[data.id] !==
                                undefined ? (
                                  fetchedAdmins.TotalAttendance[data.id][
                                    fetchedAdmins.TotalAttendance[data.id]
                                      .length - 1
                                  ]["Total Present"]
                                ) : (
                                  <span>-</span>
                                )}
                              </td>
                              <td className="text-center">
                                {fetchedAdmins.TotalAttendance[data.id] !==
                                undefined ? (
                                  fetchedAdmins.TotalAttendance[data.id][
                                    fetchedAdmins.TotalAttendance[data.id]
                                      .length - 1
                                  ]["Total Present"] +
                                  fetchedAdmins.TotalAttendance[data.id][
                                    fetchedAdmins.TotalAttendance[data.id]
                                      .length - 1
                                  ]["Total Absent"]
                                ) : (
                                  <span>-</span>
                                )}
                              </td>
                            </tr>
                          ))
                        )
                      ) : (
                        // null
                        <tr>
                          <td>You are not enrolled in any class</td>
                        </tr>
                      )
                    ) : null}
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
