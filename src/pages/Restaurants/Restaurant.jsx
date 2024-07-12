import React, { useState } from "react";
import "./Restaurant.css";

import restaurants from "../../../data";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import RatingFilter from "../../components/RatingFilter/RatingFilter";

function Restaurant() {
  const [searchKey, setSearchKey] = useState("");
  const [rating, setRating] = useState(0);

  let filteredRestaurants = restaurants.filter((res) => res.rating >= rating);

  if (searchKey !== "") {
    filteredRestaurants = filteredRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchKey.trim().toLowerCase())
    );
  }

  return (
    <div>
      <div className="filters">
        <SearchBox
          onType={(searchKey) => {
            setSearchKey(searchKey);
          }}
        />
        <RatingFilter
          onChange={(ratingCount) => {
            setRating(ratingCount);
          }}
        />
      </div>
      <div className="restaurants">
        {filteredRestaurants.map((res) => {
          return <RestaurantCard {...res} />;
        })}
      </div>
    </div>
  );
}

export default Restaurant;
