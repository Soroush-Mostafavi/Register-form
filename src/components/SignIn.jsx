import React, { useRef, useState } from "react";
import imageback from '../assets/Mobile login-rafiki.png';
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import Tooltip from '@mui/material/Tooltip';
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  ///////////////////////////////////////////////////this is alarm when field is blank
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "This field is required",
        min: "Must not be less than 5 characters",
        email: "The email was not entered correctly",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );
  /////////////////////////////////////////////////////
  const reset = () => {
    setEmail("");
    setPassword("");
};
//////////////////////////////////////////////after submit field is blank

  return (
    <section className="vh-100">
         {/* ///////////////change page name///// */}
         <Helmet>
          <title>Soroush</title>
        </Helmet>

        {/* ///////////////////// */}
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
          <NavLink to="/">Home</NavLink> 
          <Tooltip title="❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤"><img
              src={imageback}
              className="img-fluid"
              alt="Phone image"
            /></Tooltip>
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={reset}>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <Tooltip title="try to use yahoo and google mail ">

               
                <input
                  type="text"
                  name="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validator.current.showMessageFor("email");
                  }}
                /></Tooltip>
                {validator.current.message("email", email, "required|email")}
                <label className="form-label" for="form1Example13">
                  Email address
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <Tooltip title="Check your password before inter into site">

                
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validator.current.showMessageFor("password");
                  }}
                  id="form1Example23"
                  className="form-control form-control-lg"
                /></Tooltip>
                {validator.current.message(
                  "password",
                  password,
                  "required|min:5"
                )}
                <label className="form-label" for="form1Example23">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* <!-- Checkbox --> */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label className="form-check-label" for="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                style={{ width: "100%" }}
              >
                Sign in
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a
                className="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#3b5998", width: "100%" }}
                href="#!"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                Continue with Facebook
              </a>
              <a
                className="btn btn-primary btn-lg btn-block"
                style={{
                  backgroundColor: " #55acee",
                  width: "100%",
                  marginTop: "10px",
                }}
                href="#!"
                role="button"
              > <Tooltip title="You can also log in from Twitter, my love">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                   </svg></Tooltip>
               Continue with Twitter
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
