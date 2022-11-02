import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { config } from "../../../config";
import { unique } from "../../../utils";
import "./styles.css";
const { logo, products } = config;

export const SearchBar = (props) => {
  const [list, setList] = useState(["Todas las categorías"]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let list = categories.map((e, i) => (
      <option key={i} value={i}>
        {e}
      </option>
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
      <div className="search-bar">
        <div className="container">
          <Link to="/">
            <img src={logo} id="logo" className="img-fluid" />
          </Link>

          <div className="input-group">
            <input type="text" className="form-control" placeholder="Buscar" />
            <select
              className="px-3"
              name="categories"
              id="search-bar__categories"
            >
              <option value="-1">Todas las categorías</option>
              {list}
            </select>
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="search"
            >
              <BsSearch />
            </button>
          </div>
          <div className="whishlist-and-shopping-bag">
            <a href="#">
              <FaRegHeart className="whishlist-and-shopping-bag__icon" />
            </a>
            <a href="#">
              <RiShoppingBagLine className="whishlist-and-shopping-bag__icon" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
