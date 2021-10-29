import React, { useEffect } from "react";
import Product from "../component/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Loader from "../component/Loader";
import Error from "../component/Error";
import Filter from "../component/Filter";

export default function Homescreen() {
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { loading, products, error } = getallproductsstate;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []); // eslint-disable-line
  return (
    <div>
      {/* <Filter /> */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          {loading ? (
            <Loader />
          ) : error ? (
            <Error error="SomeThing went wrong" />
          ) : (
            products.map((product) => {
              return (
                <div className="col-md-3 m-2 p-2 card">
                  <Product product={product} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
