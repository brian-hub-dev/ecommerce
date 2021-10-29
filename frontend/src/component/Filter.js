import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";

export default function Filter() {
  const [searchKey, setsearchKey] = useState("");
  const [sort, setsort] = useState("popular");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="row justify-content-center">
        <div className="col-md-3 mt-2 ml-2 mb-3">
          <input
            value={searchKey}
            onChange={(e) => {
              setsearchKey(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Search Products"
          />
        </div>
        <div className="col-md-2 mt-4 ml-2 mb-3">
          <select
            className="form-control"
            value={sort}
            onChange={(e) => {
              setsort(e.target.value);
            }}
          >
            <option value="popular">Popular</option>
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </select>
        </div>
        <div className="col-md-2 mt-4 ml-2 mb-3">
          <select
            className="form-control"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="mobile">Mobiles</option>
            <option value="games">Games</option>
          </select>
        </div>
        <div className="col-md-2 mt-4 ml-2 mb-3">
          <button
            className="btn btn-dark"
            onClick={dispatch(filterProducts(searchKey, sort, category))}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
