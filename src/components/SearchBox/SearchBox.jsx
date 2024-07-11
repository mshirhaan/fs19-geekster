import React from "react";

function SearchBox({ onType }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search restaurants..."
        onChange={(event) => {
          onType(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBox;
