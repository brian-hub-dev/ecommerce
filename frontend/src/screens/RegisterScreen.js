import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../actions/userActions";
import Error from "../component/Error";
import Loader from "../component/Loader";
import Success from "../component/Sucess";

export default function RegisterScreen() {
  const registerstate = useSelector((state) => state.registerNewUserReducer);
  const { loading, error, success } = registerstate;
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };
    if (password === cpassword) {
      dispatch(registerNewUser(user));
    } else {
      alert("Passwords not match");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 card p-3" style={{ marginTop: "150px" }}>
          <div>
            <h2 className="text-center m-3">REGISTER</h2>
            {loading && <Loader />}
            {error && <Error error="Email Address already registered" />}
            {success && <Success success="Your registration is sucessfull" />}
            <form onSubmit={register}>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                required
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                required
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                required
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-dark mt-3">
                  REGISTER
                </button>
              </div>
            </form>
            <a href="/login" className="m-3">
              Click Here To Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
