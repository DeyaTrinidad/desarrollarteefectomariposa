import React from "react";
import { SingUpForm as Form } from "../../organisms/Auth";
import { MainTemplate } from "../../templates";
import { Redirect } from "react-router-dom";
import { auth } from "../../../utils";

export const SingUp = () => {
  const isAuthenticated = auth.isAuthenticated();
  if (isAuthenticated) {
    return <Redirect to="/me" />;
  } else {
    return (
      <React.Fragment>
        <MainTemplate title={"Registrarme"}>
          <Form />
        </MainTemplate>
      </React.Fragment>
    );
  }
};
