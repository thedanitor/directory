import React from "react";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

function Table(props) {
  return (
    <div className="container">
    <table className="table table-striped table-hover table-responsive-lg">
      <TableHeader
        sortList={props.sortList}
      />
      <TableBody result={props.result} sortList={props.sortList}/>
    </table>
    </div>
  );
}

export default Table;
