import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import {
  Contact,
  EditMe,
  Home,
  Login,
  Me,
  Product,
  SingUp,
} from "./components/pages";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/me/edit">
            <EditMe />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/singup">
            <SingUp />
          </Route>
          <Route
            path="/product/:id"
            render={(props) => <Product {...props} />}
          />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export { App };
