import React from "react";

function SearchBar(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <input
            onChange={props.input}
            value={props.search}
            className="form-control form-control-lg"
            type="text"
            placeholder="Search by Name"
          />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default SearchBar;
