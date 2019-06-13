import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import history from './common/history'
import { Provider } from 'react-redux'
import store from './redux/store'

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const DefaultLayout = React.lazy(() => import('./layouts/index'));

const Login = React.lazy(() => import('./containers/Login/Login'));
const Register = React.lazy(() => import('./containers/Register/Register'));
const Page404 = React.lazy(() => import('./containers/Page404/Page404'));
const Page500 = React.lazy(() => import('./containers/Page500/Page500'));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </Router>
      </Provider>
    )
  }

}

export default App
