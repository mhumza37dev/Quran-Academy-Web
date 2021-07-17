import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Admin from "./StudentDashboard/src/layouts/Admin";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";



// Redux Imports
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import CourseReducer from "./store/Reducer/CourseReducer";


const rootReducer = combineReducers({
  Course: CourseReducer,

  
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route path="/student" component={Admin} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
