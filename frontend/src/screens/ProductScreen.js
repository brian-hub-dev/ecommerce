import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { getProductById } from "../actions/productActions";
import Loader from "../component/Loader";
import Error from "../component/Error";

export default function ProductScreen({ match }) {
  const productid = match.params.id;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }

  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );
  const { product, loading, error } = getproductbyidstate;

  useEffect(() => {
    dispatch(getProductById(productid));
  }, []); // eslint-disable-line
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="SomeThing went wrong" />
      ) : (
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card p-2 m-3">
              <h1>{product.name}</h1>
              <img
                src={product.image}
                className="img-fluid m-3 big-img"
                alt="Product"
              />
              <p>{product.description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="m-2">
              <h1>Price: {product.price}</h1>
              <hr />
              <h1>Select Quantity</h1>
              <select
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              <button className="btn btn-dark" onClick={addtocart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
