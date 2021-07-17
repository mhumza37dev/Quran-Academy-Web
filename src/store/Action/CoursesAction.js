import { getCourses } from "../ActionType";

export const getCoursesData = () => {
  console.log("action start");
  return async (dispatch) => {
    fetch("https://quran-server.herokuapp.com/course")
      .then((res) => res.json())
      .then((res) => {
        // console.log("ssssss", res);
        dispatch({
          type: getCourses,
          getCourses: res,
        });
      });
  };
};
