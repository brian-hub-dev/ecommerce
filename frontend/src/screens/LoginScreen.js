import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../component/Error";
import Loader from "../component/Loader";

export default function LoginScreen() {
  const loginreducer = useSelector((state) => state.loginReducer);
  const { loading, error } = loginreducer;
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-4 card p-3" style={{ marginTop: "150px" }}>
          <div>
            <h2 className="text-center m-3">LOGIN</h2>
            {error && <Error error="Invalid Credentials" />}
            {loading && <Loader />}
            <form onSubmit={login}>
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

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-dark mt-3">
                  LOGIN
                </button>
              </div>
            </form>
            <a href="/register" className="m-3">
              Click Here To Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
