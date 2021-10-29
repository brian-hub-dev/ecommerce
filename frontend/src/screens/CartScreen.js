import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";

export default function CartScreen() {
  const cartreducerstate = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  const { cartItems } = cartreducerstate;

  var subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div>
      <div className="row mt-3 justify-content-center">
        <div className="col-md-8 card text-center">
          <h1 className="text-center m-4">MY CART</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(addToCart(item, e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                    </td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <i
                        className="far fa-trash-alt"
                        onClick={() => dispatch(deleteFromCart(item))}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />
          <h2 className="text-centetr">SubTotal: Ksh. {subtotal}</h2>
          <br />
          <diV className="text-center p-3">
            <button className="btn btn-dark">PAY NOW</button>
          </diV>
        </div>
      </div>
    </div>
  );
}
