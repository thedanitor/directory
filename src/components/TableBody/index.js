import React from "react";
import Moment from "moment";

function TableBody(props) {
  const employeeMap = props.result.map((employee, index) => {
    const { name, phone, email, dob, picture } = employee;
    const shortDate = Moment(dob.date).format("L");
    return (
      <tr key={index}>
        <td>
          <img alt={name.first + " " + name.last} src={picture.thumbnail} />
        </td>
        <td>{name.first + " " + name.last}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{shortDate}</td>
      </tr>
    );
  });

  return <tbody>{employeeMap}</tbody>;
}

export default TableBody;
