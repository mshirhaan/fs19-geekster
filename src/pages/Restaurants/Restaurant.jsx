import React, { useState } from "react";

import restaurants from "../../../data";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import SearchBox from "../../components/SearchBox/SearchBox";

function Restaurant() {
  const [searchKey, setSearchKey] = useState("");

  let filteredRestaurants = [...restaurants];

  if (searchKey !== "") {
    filteredRestaurants = restaurants.filter((res) =>
      res.name.toLowerCase().includes(searchKey.trim().toLowerCase())
    );
  }

  return (
    <div>
      <div>
        <SearchBox
          onType={(searchKey) => {
            setSearchKey(searchKey);
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
