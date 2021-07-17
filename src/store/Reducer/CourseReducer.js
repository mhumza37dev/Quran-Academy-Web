import {getCourses } from '../ActionType'

const initialState = {
    getCourses: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case getCourses:
      return {
        ...state,
        getCourses: action.getCourses,
      };
  }
  return state;
};
 
