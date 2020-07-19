import React from "react";

function TableHeader(props) {
  return (
    <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">Name <button id="name" onClick={props.sortList} className="btn btn-outline-primary">Sort A-Z</button></th>
        <th scope="col">Phone</th>
        <th scope="col">Email <button id="email" onClick={props.sortList} className="btn btn-outline-primary">Sort A-Z</button></th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
