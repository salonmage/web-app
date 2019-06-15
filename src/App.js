import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import history from "./common/history";
import { Provider } from "react-redux";
import store from "./redux/store";
import LazyLoad from "./components/LayzyLoad";

const Register = LazyLoad(import("./containers/Login/Login"));
const Login = LazyLoad(import("./containers/Register/Register"));
const Page404 = LazyLoad(import("./containers/Page404/Page404"));
const Page500 = LazyLoad(import("./containers/Page500/Page500"));
const DefaultLayout = LazyLoad(import("./layouts/index"));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={props => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={props => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={props => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={props => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={props => <DefaultLayout {...props} />}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
