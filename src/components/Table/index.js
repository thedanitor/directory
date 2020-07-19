import React from "react";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

function Table(props) {
  return (
    <table className="table table-striped table-hover table-responsive-lg">
      <TableHeader
        sortList={props.sortList}
        // handleSortClick={props.handleSortClick}
      />
      <TableBody result={props.result} sortList={props.sortList}/>
    </table>
  );
}

export default Table;
