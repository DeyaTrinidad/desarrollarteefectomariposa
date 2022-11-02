import axios from "axios";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { config } from "../../../config";
import { regex } from "../../../utils";
import "./styles.css";

const { register, login } = config;

export const FormContainer = (props) => {
  return (
    <React.Fragment>
      <div id="form-container" className="row">
        {props.children}
      </div>
    </React.Fragment>
  );
};

export const SingUpForm = () => {
  const [form, setForm] = useState({});
  const [redirect, setRedirect] = useState(false);
  const handlerForm = (value, input) => {
    setForm({ ...form, [input]: value });
  };

  const singUp = (data) => {
    if (
      form.first_name !== "" &&
      form.last_name !== "" &&
      form.email !== "" &&
      regex.test(String(form.email).toLowerCase()) &&
      form.password !== "" &&
      form.confirm_password !== "" &&
      form.password === form.confirm_password
    ) {
      delete form.confirm_password;
      axios
        .post(register, data)
        .then((r) => {
          r.status === 200 && setRedirect(true);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("invalid", form);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="col-lg-12 row form-container__title">
          <h1>Crear nueva cuenta de usuario</h1>
        </div>
        <FormContainer>
          <div className="col-lg-6">
            <h3>Información personal</h3>
            <div className="form-group">
              <label htmlFor="firstName">
                Nombre <span>*</span>
              </label>
              <input
                value={form.first_name}
                onChange={(e) => {
                  handlerForm(e.target.value, "first_name");
                }}
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                id="firstName"
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">
                Apellido <span>*</span>
              </label>
              <input
                value={form.last_name}
                onChange={(e) => {
                  handlerForm(e.target.value, "last_name");
                }}
                type="text"
                className="form-control"
                id="lastName"
              />
            </div>
            <div className="form-group form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="newsletter"
              />
              <label className="form-check-label" htmlFor="newsletter">
                Sucribirme al Newsletter
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <h3>Información de registro</h3>
            <div className="form-group">
              <label htmlFor="email">
                Correo electrónico <span>*</span>
              </label>
              <input
                value={form.email}
                onChange={(e) => {
                  handlerForm(e.target.value, "email");
                }}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Contraseña <span>*</span>
              </label>
              <input
                value={form.password}
                onChange={(e) => {
                  handlerForm(e.target.value, "password");
                }}
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirmar contraseña <span>*</span>
              </label>
              <input
                value={form.confirm_password}
                onChange={(e) => {
                  handlerForm(e.target.value, "confirm_password");
                }}
                type="password"
                className="form-control"
                id="confirmPassword"
              />
            </div>
          </div>
          <div className="col-lg-12 mt-4">
            <button
              onClick={() => {
                singUp(form);
              }}
              type="submit"
              className="btn btn-primary btn-auth"
            >
              Crear mi cuenta
            </button>
            {redirect && <Redirect to="/login" />}
          </div>
        </FormContainer>
      </div>
    </React.Fragment>
  );
};

export const LoginForm = () => {
  const [form, setForm] = useState({});
  const [redirect, setRedirect] = useState(false);
  const handlerForm = (value, input) => {
    setForm({ ...form, [input]: value });
  };
  const signin = (data) => {
    if (
      form.email !== "" &&
      regex.test(String(form.email).toLowerCase()) &&
      form.password !== ""
    ) {
      console.log(form);
      delete form.confirm_password;
      axios
        .post(login, data)
        .then((r) => {
          r.status === 200 && localStorage.setItem("@session", r.data.token);
          setRedirect(true);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("invalid", form);
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-lg-12 row form-container__title">
          <h1>Iniciar sesión</h1>
        </div>
        <FormContainer>
          <div className="col-lg-6">
            <h3>Usuarios registrados</h3>
            <p className="login-copy">
              Si tiene una cuenta, inicie sesión con su dirección de correo
              electrónico.
            </p>
            <div className="form-group">
              <label htmlFor="email">
                Correo electrónico <span>*</span>
              </label>
              <input
                value={form.email}
                onChange={(e) => {
                  handlerForm(e.target.value, "email");
                }}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Contraseña <span>*</span>
              </label>
              <input
                value={form.password}
                onChange={(e) => {
                  handlerForm(e.target.value, "password");
                }}
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <button
              onClick={() => {
                signin(form);
              }}
              type="submit"
              className="btn btn-primary btn-auth my-4"
            >
              Iniciar sesión
            </button>
            {redirect && <Redirect to="/me" />}
          </div>
          <div className="col-lg-6">
            <h3>Nuevo usuario</h3>
            <p className="why-register">
              Crear una cuenta tiene muchos beneficios: realice el pago más
              rápido, mantenga más de una dirección, realice un seguimiento de
              los pedidos y más.
            </p>
            <Link
              to="/singup"
              type="submit"
              className="btn btn-primary btn-auth
							mt-4"
            >
              {" "}
              Crear mi cuenta
            </Link>
          </div>
        </FormContainer>
      </div>
    </React.Fragment>
  );
};
