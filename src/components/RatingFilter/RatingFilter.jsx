import React from "react";

function RatingFilter({ onChange }) {
  return (
    <div>
      <label htmlFor="rating">Minimum Rating:</label>
      <input
        onChange={(event) => {
          onChange(event.target.value);
        }}
        name="rating"
        type="number"
        max={5}
        min={0}
      />
    </div>
  );
}

export default RatingFilter;
