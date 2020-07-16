import React from "react";

function EmployeeRow({ picture, name, phone, email, dob }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"><img alt={name.first + " " + name.last} src={picture.thumbnail} /></div>
        <div className="col-2"><h3>{name.first + " " + name.last}</h3></div>
        <div className="col-2"><h3>{phone}</h3></div>
        <div className="col-2"><h3>{email}</h3></div>
        <div className="col-2"><h3>{dob.date}</h3></div>
      </div>
    </div>
  );
}

export default EmployeeRow;

//image results.picture.thumbnail
//name results.name.first + results.name.last
//phone results.phone
//email results.email
//dob results.dob.date
