import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../../../config";
import { auth } from "../../../utils";
import { Rating } from "../../atoms/Rating";
import "./styles.css";

const { appName, single_product, products } = config;
export const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(
    auth.isAuthenticated()
  );
  const [allProducts, setAllProducts] = useState([]);
  const [list, setList] = useState([]);

  const getProducts = () => {
    axios
      .get(products)
      .then((r) => {
        let data = r.data;
        setAllProducts(data);
        let categoriesList = [];
        data.map((c) => {
          c.category !== undefined && categoriesList.push(c.category);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const productById = () => {
    axios
      .get(`${single_product + props.id}`)
      .then((r) => {
        r.status === 200 && setProduct(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    productById();
    getProducts();
  }, []);

  useEffect(() => {
    productById();
  }, [window.location.pathname]);

  useEffect(() => {
    let list = allProducts.map((p, i) => {
      if (p.category === product.category) {
        return (
          <div key={i} className="single-product" id={p._id}>
            <Link to={`/product/${p._id}`}>
              <img
                className="img-fluid"
                src={
                  p.image && p.image.includes(".")
                    ? p.image
                    : "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/product.jpg"
                }
              />
            </Link>
            <Link to={`/product/${p._id}`}>
              <h6>{p.product_name}</h6>
            </Link>
            <div className="rating-block">
              <Rating />
            </div>
            <h4>{p.price !== undefined ? `$${p.price}.00` : `$0.00`}</h4>
          </div>
        );
      }
    });

    setList(list);
  }, [allProducts]);

  document.querySelector(
    "title"
  ).innerText = `${product.product_name} | ${appName}`;
  return (
    <React.Fragment>
      <div className="border-bottom">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Inicio</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product.product_name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="row product-detail">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src={
                product.image && product.image.includes(".")
                  ? product.image
                  : "https://raw.githubusercontent.com/oicrruf/aliexpref/develop/public/assets/img/product.jpg"
              }
            />
          </div>
          <div className="col-lg-6">
            <h1>{product.product_name}</h1>
            <Rating />

            <p>{product.description}</p>
            <hr />
            <div className="stock-and-price">
              <div className="stock-and-price__price">
                <span>Desde:</span>
                <h4>{`$${product.price}.00`}</h4>
              </div>
              <div className="stock-and-price__stock">
                <span>
                  Disponibilidad:
                  {product.isActive ? " En stock" : " Agotado"}
                </span>
              </div>
            </div>
            {isAuthenticated ? (
              <Link
                to="/"
                type="submit"
                className="btn btn-primary btn-product 
							mt-4"
              >
                {" "}
                Añadir al carrito
              </Link>
            ) : (
              <Link
                to="/login"
                type="submit"
                className="btn btn-primary btn-product 
							mt-4"
              >
                {" "}
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>
        <div className="py-5 product-categoty__box bg-white mb-5">
          <h5 className="mb-0 category-name">Productos relacionados</h5>
          <hr />
          <div className="products-by-category">{list}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
