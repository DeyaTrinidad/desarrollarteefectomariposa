import React from "react";

export const Button = (props) => {
  return (
    <React.Fragment>
      <button
        onClick={() => {
          singUp(form);
        }}
        type="submit"
        className="btn btn-primary btn-auth"
      >
        {props.children}
      </button>
    </React.Fragment>
  );
};
