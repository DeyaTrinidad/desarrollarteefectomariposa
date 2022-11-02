import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { config } from "../../../config";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { unique } from "../../../utils";
import axios from "axios";
const { appName, products, domain } = config;

export const Footer = () => {
  const [list, setList] = useState(["Todas las categorías"]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let list = categories.map((e, i) => (
      <li key={i}>
        <a href={`#${e.toLowerCase()}`}>{e}</a>
      </li>
    ));
    setList(list);
  }, [categories]);

  useEffect(() => {
    axios
      .get(products)
      .then((r) => {
        let data = r.data;
        let categoriesList = [];
        data.map((c) => {
          c.category !== undefined && categoriesList.push(c.category);
        });

        setCategories(categoriesList.filter(unique).sort());
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="newsletter-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h4>Suscríbete al boletín</h4>
            </div>
            <div className="col-lg-5">
              <p>
                Obtenga toda la información más reciente sobre eventos, ventas y
                ofertas.
              </p>
              <h5>Reciba un cupón de $ 10 para la primera compra.</h5>
            </div>
            <div className="col-lg-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo electrónico"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="search"
                >
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="footer-content row">
            <div className="col-lg-6">
              <Link to="/">
                <img
                  src="https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/logo-devf-black.svg"
                  className="img-fluid"
                />
              </Link>
              <div className="contact-info">
                <div className="info-detail">
                  <span>Llámanos ahora:</span>
                  <h6>+503 7859 0168</h6>
                </div>
                <div className="info-detail">
                  <span>Correo electrónico</span>
                  <h6>vm.reyesal@gmail.com</h6>
                </div>
                <div className="info-detail info-follow">
                  <span>Síguenos</span>
                  <h6>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedin />
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="categories-info">
                <h6>Categorías</h6>
                <ul className="categories-list">{list}</ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p>
              © {appName}. {new Date().getFullYear()}. Reservados todos los
              derechos
            </p>
            <img src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/03/content/payment-icon.png" />
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
