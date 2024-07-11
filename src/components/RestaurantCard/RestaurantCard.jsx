import React from "react";
import "./Restaurant.css";
import { FaRegStar } from "react-icons/fa";

function RestaurantCard({
  address,
  name,
  outcode,
  postcode,
  rating,
  typeOfFood,
  URL,
}) {
  let stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<FaRegStar />);
  }

  return (
    <div className="card">
      <div className="title">
        <h2>{name}</h2>
        <div>{stars}</div>
      </div>
      <p>{address}</p>
      <div className="address-code">
        <p>{outcode}</p>
        <p>{postcode}</p>
      </div>

      <div className="menu">
        <p>{typeOfFood}</p>
        <a href={URL}>Visit Menu</a>
      </div>
    </div>
  );
}

export default RestaurantCard;
