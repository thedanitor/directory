import React from "react";
import "./index.css";

function TableHeader(props) {
  return (
    <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">
          <span className="pointer" id="name" onClick={props.sortList}>
            Name
          </span>
        </th>
        <th scope="col">Phone</th>
        <th scope="col">
          <span className="pointer" id="name" onClick={props.sortList}>
            Email
          </span>
        </th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
