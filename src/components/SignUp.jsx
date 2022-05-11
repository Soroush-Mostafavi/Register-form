import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";
import Tooltip from "@mui/material/Tooltip";
import SimpleReactValidator from "simple-react-validator";
const SignUp = ({ history }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
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
  ///////////////////////////////////////////////////reset field for new info
  const reset = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };
  //////////////////////////////////////////////////////////send info to server

  return (
    <section className="text-center">
      <Helmet>
        <title>Soroush</title>
      </Helmet>
      {/* <!-- Background image --> */}
      <div
        className="p-5 bg-image backimg"
        style={{
          height: "300px",
        }}
      ></div>
      {/* <!-- Background image --> */}

      <div
        className="card mx-4 mx-md-5 shadow-5-strong "
        style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdroFilter: "blur(30px)",
        }}
      >
        <div className="card-body py-5 px-md-5 main-img">
          <div className="row d-flex justify-content-center">
            <NavLink to="/">Home</NavLink>
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Sign up now</h2>

              <form onSubmit={reset}>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <Tooltip title="your name is beautiful">
                        <input
                          type="text"
                          name="firstname"
                          id="form3Example1"
                          className="form-control"
                          value={firstname}
                          onChange={(e) => {
                            setFirstname(e.target.value);
                            validator.current.showMessageFor("firstname");
                          }}
                        />
                      </Tooltip>{" "}
                      {validator.current.message(
                        "firstname",
                        firstname,
                        "required|min:5"
                      )}
                      <label className="form-label" for="form3Example1">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="lastname"
                        id="form3Example2"
                        value={lastname}
                        onChange={(e) => {
                          setLastname(e.target.value);
                          validator.current.showMessageFor("lastname");
                        }}
                        className="form-control"
                      />{" "}
                      {validator.current.message(
                        "lastname",
                        lastname,
                        "required|min:5"
                      )}
                      <label className="form-label" for="form3Example2">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <Tooltip title="your email is so funny">
                    <input
                      type="text"
                      name="email"
                      id="form3Example3"
                      className="form-control"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        validator.current.showMessageFor("email");
                      }}
                    />
                  </Tooltip>
                  {validator.current.message("email", email, "required|email")}
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <Tooltip title="your pass should long beacuse short pass will be hacked by hacker">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        validator.current.showMessageFor("password");
                      }}
                      id="form3Example4"
                      className="form-control"
                    />
                  </Tooltip>
                  {validator.current.message(
                    "password",
                    password,
                    "required|min:5"
                  )}
                  <label className="form-label" for="form3Example4">
                    Password
                  </label>
                </div>

                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example33"
                  />
                  <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  style={{ width: "50%" }}
                >
                  Sign up
                </button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                  <p>or sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
