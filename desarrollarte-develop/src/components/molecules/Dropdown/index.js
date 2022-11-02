import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { MdExpandMore } from "react-icons/md";

export const Dropdown = (props) => {
  const [show, setShow] = useState(true);
  const [list, setList] = useState([]);
  const dropdowns = Array.from(document.querySelectorAll(".dropdown-list"));

  useEffect(() => {
    renderList(props.type, props.data);

    if (!show) {
      document.querySelector(`#${props.type}`).removeAttribute("hidden", "");
    } else {
      document.querySelector(`#${props.type}`).setAttribute("hidden", "");
    }

    document.addEventListener("click", (e) => {
      dropdowns.map((e) => {
        e.setAttribute("hidden", "");
      });
    });
  }, [show]);

  const renderList = (type, data) => {
    let list = [];
    switch (type) {
      case "country":
        list = data.map((e, i) => {
          return (
            <li key={i}>
              <a href="#">
                <img src={e.flag} />
                {e.value}
              </a>
            </li>
          );
        });
        setList(list);
        break;
      case "currency":
        list = data.map((e, i) => (
          <li key={i}>
            <a href="#" className="dropdown-list-currency">
              <span>{e.symbol}</span> {e.value}
            </a>
          </li>
        ));
        setList(list);
        break;
    }
    setList(list);
  };

  return (
    <React.Fragment>
      <a
        className="btn btn-light btn-dropdown-list"
        onClick={() => setShow(!show)}
      >
        {props.name}
        <MdExpandMore />
      </a>
      <ul id={props.type} className="dropdown-list">
        {list}
      </ul>
    </React.Fragment>
  );
};
