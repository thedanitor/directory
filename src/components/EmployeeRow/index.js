import React from "react";

function EmployeeRow({image, name, phone, email, dob}) {
    return (
        <div className="container">
      <div className="row">
    <div className="col-2">{image}</div>
        <div className="col-2">{name}</div>
        <div className="col-2">{phone}</div>
        <div className="col-2">{email}</div>
        <div className="col-2">{dob}</div>

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