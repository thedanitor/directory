import React from "react";

const colStyle = {
  textAlign: "left",
};

function TableBody(props) {
  const employeeMap = props.result.map((employee, index) => {
    const { name, phone, email, dob, picture } = employee;
    return (
      <tr key={index}>
        <td>
          <img alt={name.first + " " + name.last} src={picture.thumbnail} />
        </td>
        <td style={colStyle}>{name.first + " " + name.last}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{dob.date}</td>
      </tr>
    );
  });

  return <tbody>{employeeMap}</tbody>;
}

export default TableBody;
