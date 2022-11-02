import React, { useState, useEffect } from "react";
import { config } from "../../config";
import { auth } from "../../utils";
import { Footer, HeaderTop, SearchBar } from "../organisms";
import { useLocation } from "react-router-dom";

export const MainTemplate = (props) => {
  const { appName } = config;
  const [isAuthenticated, setIsAuthenticated] = useState(
    auth.isAuthenticated()
  );
  const { pathname } = useLocation();
  document.querySelector("title").innerText = `${props.title} | ${appName}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <div className="home__container">
        <HeaderTop isAuthenticated={isAuthenticated} />
        <SearchBar isAuthenticated={isAuthenticated} />
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  );
};
