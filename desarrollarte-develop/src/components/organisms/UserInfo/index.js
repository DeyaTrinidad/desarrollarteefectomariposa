import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { config } from "../../../config";
import { auth } from "../../../utils";
import "./styles.css";

const { me, editme, domain } = config;

export const UserInfo = (props) => {
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
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
  }, []);
  return (
    <React.Fragment>
      <div className="container user-container ">
        <div className="row ">
          <div className="offset-lg-2 col-lg-4">
            <div className="avatar-and-action float-right">
              <img
                src={
                  window.location.hostname != "oicrruf.github.io"
                    ? "/assets/img/avatar.png"
                    : `${domain}/assets/img/avatar.png`
                }
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="user-info">
              <h1 className="mb-4">{`${user.first_name} ${user.last_name}`}</h1>
              <p className="mb-2">ID: {user._id}</p>
              <p className="mb-2">Correo electrónico: {user.email}</p>
              <p className="mb-2">
                Última actualización: {moment(user.updatedAt).fromNow()}
              </p>
              <Link className="btn btn-primary btn-auth mt-4" to="/me/edit">
                Editar
              </Link>
              <button
                onClick={() => {
                  auth.logout();
                  setRedirect(true);
                }}
                className="btn btn-dark btn-auth ml-4 mt-4"
              >
                Cerrar sesión
              </button>
              {redirect && <Redirect to="/" />}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const EditUser = (props) => {
  const [user, setUser] = useState({});
  const [isEdit, seIsEdit] = useState(false);
  const [form, setForm] = useState({});

  const handlerForm = (value, input) => {
    setForm({ ...form, [input]: value });
  };

  const getUserInfo = () => {
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

  const editUser = () => {
    axios
      .patch(`${editme + user._id}`, form, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Authorization: `JWT ${localStorage.getItem("@session")}`,
        },
      })
      .then((r) => {
        seIsEdit(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [isEdit]);

  return (
    <React.Fragment>
      <div className="container user-container ">
        <div className="row ">
          <div className="offset-lg-2 col-lg-4">
            <div className="avatar-and-action float-right">
              <img
                src={
                  window.location.hostname != "oicrruf.github.io"
                    ? "/assets/img/avatar.png"
                    : `${domain}/assets/img/avatar.png`
                }
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="user-info">
              <div className="mb-3">
                <label htmlFor="firts_name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firts_name"
                  placeholder="Nombre"
                  onChange={(e) => {
                    handlerForm(e.target.value, "first_name");
                  }}
                />
                <label htmlFor="last_name" className="form-label mt-3">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  placeholder="Apellido"
                  onChange={(e) => {
                    handlerForm(e.target.value, "last_name");
                  }}
                />
              </div>

              <p className="mb-2">ID: {user._id}</p>
              <p className="mb-2">Correo electrónico: {user.email}</p>
              <p className="mb-2">
                Editar usuario Última actualización:{" "}
                {moment(user.updatedAt).fromNow()}
              </p>
              <button
                onClick={() => {
                  editUser();
                }}
                className="btn btn-primary btn-auth mt-4"
              >
                Guardar
              </button>
              <Link to="/me" className="btn btn-dark btn-auth ml-4 mt-4">
                Cancelar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
