import React, { useState, useEffect } from "react";
import { Map } from "../../atoms";
import { Link } from "react-router-dom";
import { AiFillPhone, AiFillMail, AiOutlineGithub } from "react-icons/ai";
import "./styles.css";

export const ContactForm = () => {
  const [moveButton, setMoveButton] = useState(false);
  useEffect(() => {
    const { matches } = window.matchMedia("(max-width: 425px)");
    setMoveButton(matches);
  }, []);
  useEffect(() => {
    const button = document.querySelector("#send-message");
    const message = document.querySelector("#whats-on-your-mind");
    message.parentNode.appendChild(button);
  }, [moveButton]);
  return (
    <div className="container" id="form-contact">
      <Map />
      <div className="row mt-5 form-contact">
        <div className="col-lg-8">
          <h2 className="mb-3">Escríbenos</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="name" class="form-label">
                  Nombre
                </label>
                <input type="email" className="form-control" id="name" />
              </div>
              <div class="mb-3">
                <label htmlFor="email" class="form-label">
                  Correo electrónico
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div class="mb-3">
                <label htmlFor="phone" class="form-label">
                  Número de teléfono
                </label>
                <input type="email" className="form-control" id="phone" />
              </div>
              <Link
                id="send-message"
                className="btn btn-primary btn-auth mt-4"
                to="/me/edit"
              >
                Enviar mensaje
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="whats-on-your-mind" className="form-label">
                  ¿Qué tienen en mente?
                </label>
                <textarea
                  className="form-control"
                  id="whats-on-your-mind"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h2 className="mb-3">
            <span>Detalles de </span>Contacto
          </h2>
          <div className="contact-detail">
            <div>
              <AiFillPhone />
              <p>+503 7859 0168</p>
            </div>
            <div>
              <AiFillMail />
              <p>vm.reyesal@gmail.com</p>
            </div>
            <div>
              <AiOutlineGithub />
              <p>/oicrruf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
