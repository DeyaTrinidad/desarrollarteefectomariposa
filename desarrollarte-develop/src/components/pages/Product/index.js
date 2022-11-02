import React from "react";
import { ProductDetail } from "../../organisms/ProductDetail";
import { MainTemplate } from "../../templates";

export const Product = (props) => {
  const { id } = props.match.params;
  return (
    <React.Fragment>
      <MainTemplate>
        <ProductDetail id={id} />
      </MainTemplate>
    </React.Fragment>
  );
};
