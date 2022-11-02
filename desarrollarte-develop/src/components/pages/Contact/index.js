import React from "react";
import { ContactForm } from "../../organisms";
import { MainTemplate } from "../../templates";

export const Contact = (props) => {
  return (
    <React.Fragment>
      <MainTemplate title={"Contacto"}>
        <ContactForm />
      </MainTemplate>
    </React.Fragment>
  );
};
