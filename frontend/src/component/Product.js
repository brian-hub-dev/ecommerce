import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export default function Product({ product }) {
  return (
    <div>
      <div className="text-left product">
        <Link to={`product/${product._id}`}>
          <div className="text-center text-decoration-none">
            <img src={product.image} className="img-fluid" alt="Product" />
          </div>
          <h1 className="text-decoration-none">{product.name}</h1>
          <div>
            <StarRatings
              rating={product.rating}
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
              starDimension="18px"
              starSpacing="1px"
            />
          </div>

          <h1 className="text-decoration-none">Price : {product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
