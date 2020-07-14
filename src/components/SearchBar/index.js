import React from "react";

function SearchBar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default SearchBar;
