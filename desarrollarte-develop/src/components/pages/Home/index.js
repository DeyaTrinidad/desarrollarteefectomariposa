import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../../../config";
import { popularCategories, categoriesIcons } from "../../../data";
import { auth, unique } from "../../../utils";
import { Rating } from "../../atoms/Rating";
import { Header } from "../../organisms";
import { MainTemplate } from "../../templates";
import "./styles.css";

const { products, domain } = config;

export const Categories = () => {
  const categoriesBox = popularCategories.map((b, i) => {
    return (
      <div key={i} className="category-box">
        <a href={`#${b.id}`}>
          {b.icon}
          <h5>{b.name}</h5>
        </a>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="categories__container">
        <div className="container">{categoriesBox}</div>
      </div>
    </React.Fragment>
  );
};

export const AllProducts = (props) => {
  const [list, setList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(products)
      .then((r) => {
        let data = r.data;
        setAllProducts(data);
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

  useEffect(() => {
    let list = categories.map((e, i) => (
      <div key={i} id={e.toLowerCase()} className="py-5 product-categoty__box">
        <div className="container">
          <h5 className="mb-0 category-name">
            {e === categoriesIcons[i].name && categoriesIcons[i].icon}
            <span>·</span>
            {e}
          </h5>

          <hr />
          <div className="products-by-category">
            {allProducts.map((p, i) => {
              if (p.category === e) {
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
                    <h4>
                      {p.price !== undefined ? `$${p.price}.00` : `$0.00`}
                    </h4>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    ));
    setList(list);
  }, [categories]);
  return (
    <React.Fragment>
      <div id="products__container" className="products__container">
        {list}
      </div>
    </React.Fragment>
  );
};

export const Home = (props) => {
  const [user, setUser] = useState(auth.isAuthenticated());
  return (
    <React.Fragment>
      <MainTemplate title={"Inicio"}>
        <Header>
          <div className="container">{props.children}</div>
        </Header>
        <Categories />
        <AllProducts />
      </MainTemplate>
    </React.Fragment>
  );
};
