import React from "react";
import { LoginForm as Form } from "../../organisms/Auth";
import { MainTemplate } from "../../templates";
import { Redirect } from "react-router-dom";
import { auth } from "../../../utils";

export const Login = () => {
  const isAuthenticated = auth.isAuthenticated();
  if (isAuthenticated) {
    return <Redirect to="/me" />;
  } else {
    return (
      <React.Fragment>
        <MainTemplate title={"Iniciar sesión"}>
          <Form />
        </MainTemplate>
      </React.Fragment>
    );
  }
};
