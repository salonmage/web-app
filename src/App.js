import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import history from "./common/history";
import { Provider } from "react-redux";
import store from "./redux/store";
import LazyLoad from "./components/LayzyLoad";

const Register = LazyLoad(import("./containers/Register/Register"));
const Login = LazyLoad(import("./containers/Login/Login"));
const Page404 = LazyLoad(import("./containers/Page404/Page404"));
const Page500 = LazyLoad(import("./containers/Page500/Page500"));
const DefaultLayout = LazyLoad(import("./layouts/DefaultLayout/DefaultLayout"));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route
              exact
              path="/register"
              name="Register Page"
              component={Register}
            />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
