import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../../../utils";
import { EditUser, UserInfo } from "../../organisms";
import { MainTemplate } from "../../templates";

export const Me = (props) => {
  const isAuthenticated = auth.isAuthenticated();
  if (isAuthenticated) {
    return (
      <React.Fragment>
        <MainTemplate title={"Perfil"}>
          <UserInfo />
        </MainTemplate>
      </React.Fragment>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export const EditMe = (props) => {
  const isAuthenticated = auth.isAuthenticated();
  if (isAuthenticated) {
    return (
      <React.Fragment>
        <MainTemplate title={"Editar usuario"}>
          <EditUser />
        </MainTemplate>
      </React.Fragment>
    );
  } else {
    return <Redirect to="/login" />;
  }
};
