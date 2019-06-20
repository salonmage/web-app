import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";
import useNav from "../../_nav";
import useRoutes from "../../routes";
import { actionLogout } from "../../redux/userLogin/actions";
import LayzyLoad from "../../components/LayzyLoad";

const DefaultAside = LayzyLoad(import("./DefaultAside"));
const DefaultFooter = LayzyLoad(import("./DefaultFooter"));
const DefaultHeader = LayzyLoad(import("./DefaultHeader"));

const DefaultLayout = props => {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin, shallowEqual);

  const navigation = useNav();
  const routes = useRoutes();

  const signOut = e => {
    e.preventDefault();
    dispatch(actionLogout());
  };

  if (!userLogin) return <Redirect to="/login" />;
  return (
    <div className="app">
      <AppHeader fixed>
        <DefaultHeader onLogout={e => signOut(e)} />
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarHeader />
          <AppSidebarForm />
          <AppSidebarNav navConfig={navigation} {...props} router={router} />
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <AppBreadcrumb appRoutes={routes} router={router} />
          <Container fluid>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect from="/" to="/customer-information" />
            </Switch>
          </Container>
        </main>
        <AppAside fixed>
          <DefaultAside />
        </AppAside>
      </div>
      <AppFooter>
        <DefaultFooter />
      </AppFooter>
    </div>
  );
};

export default DefaultLayout;
