import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../../../config";
import { country } from "../../../data";
import { Dropdown } from "../../molecules";
import "./styles.css";
import axios from "axios";

const { appName, me, domain } = config;

const AccountButtons = (props) => {
  const [user, setUser] = useState({});
  const getUser = () => {
    axios
      .get(me, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Authorization: `JWT ${localStorage.getItem("@session")}`,
        },
      })
      .then((r) => {
        setUser(r.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (props.isAuthenticated) {
    getUser();
    return (
      <React.Fragment>
        |
        <Link to="/me">
          ¡Bienvenido {`${user.first_name} ${user.last_name}`}!
          <img
            src={
              window.location.hostname != "oicrruf.github.io"
                ? "/assets/img/avatar.png"
                : `${domain}/assets/img/avatar.png`
            }
            height="16"
            className="ml-2"
          />
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        |<Link to="/login">Iniciar Sesión</Link>|
        <Link to="/singup">Crear cuenta</Link>
      </React.Fragment>
    );
  }
};

export const HeaderTop = (props) => {
  const [countriesList, setCountriesList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  useEffect(() => {
    let countries = [];
    let currency = [];
    country.map((c) => {
      countries.push({
        value: c.name,
        flag:
          window.location.hostname != "oicrruf.github.io"
            ? c.flag
            : `${domain + c.flag}`,
      });
      currency.push({ value: c.currency, symbol: c.symbol });
    });
    setCountriesList(countries);
    setCurrencyList(currency);
  }, []);
  return (
    <React.Fragment>
      <div className="navbar__header">
        <div className="container">
          <div className="navbar__header-international">
            <Dropdown name={"Moneda"} type={"currency"} data={currencyList} />
            <Dropdown name={"País"} type={"country"} data={countriesList} />
          </div>
          <div className="navbar__header-nav">
            <Link to="/contact">Contáctanos</Link>
            <AccountButtons isAuthenticated={props.isAuthenticated} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
