import React from "react";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

function Table(props) {
  return (
    <table className="table table-striped table-hover table-responsive-lg">
      <TableHeader />
      <TableBody result={props.result} />
</table>

  );
}

export default Table;
