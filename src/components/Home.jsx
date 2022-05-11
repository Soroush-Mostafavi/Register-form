import React from "react";
import { Helmet } from "react-helmet";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="cover-container d-flex  p-3 mx-auto flex-column home">
      <Helmet>
        <title>Soroush</title>
      </Helmet>
      <header className="masthead mb-auto">
        <div className="inner">
          <Tooltip
            title="this app build with functional components //
        you can navigate between page with : react-router-dom//
        page tab name change with : react-helmet // 
        you read this items with react-tooltip//
        this app reaponsive with bootstrap "
          >
            <h3 className="masthead-brand text-center">Home</h3>
          </Tooltip>
          <nav className="nav nav-masthead justify-content-center mt-5">
            <NavLink className="nav-link active" exact to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/signin">
              Sign In
            </NavLink>
            <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          </nav>
        </div>
      </header>

      <footer class="mastfoot mt-auto">
        <main role="main" className="inner cover text-center ">
          <h1
            className="cover-heading "
            style={{ color: "red", marginTop: "100px", fontSize: "20px" }}
          >
            Soroush Register Form
          </h1>
        </main>
      </footer>
    </div>
  );
};

export default Home;
