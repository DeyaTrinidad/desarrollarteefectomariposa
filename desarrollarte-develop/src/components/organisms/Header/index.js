import React from "react";
import "./styles.css";
import "./bg-background.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <React.Fragment>
      <div className="header-overlay"></div>
      <div className="header-container">
        <h1>Bienvenido a AliExpref</h1>
        <p>Conoce nuestros productos y encuentra lo que necesitas</p>
        <div className="header-counters">
          <div>
            <h3>27</h3>
            <span>Categorías</span>
          </div>
          <div>
            <h3>83</h3>
            <span>Productos</span>
          </div>
        </div>
        <a
          id="all-products"
          type="button"
          className="btn btn-light"
          href="#products__container"
        >
          Ver todos los productos
        </a>
      </div>
    </React.Fragment>
  );
};
