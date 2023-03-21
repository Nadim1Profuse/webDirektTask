import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const TableRow = (props) => {
  
  const navigate=useNavigate();

  return (
    <tr style={props.style}>
      <td>{props.srNo}</td>
      <td>{props.fName}</td>
      <td>{props.lName}</td>
      <td>{props.add1}</td>
      <td>{props.phone}</td>
      <td>{props.country}</td>
      <td>{props.email}</td>
      <td>
        <Button
          onClick={()=>navigate(`/view/${props.index}`)}
          value={props.index}
          variant="outline-dark"
        >
          View
        </Button>{" "}
        <Button
          onClick={()=>navigate(`/update/${props.index}`)}
          value={props.index}
          variant="outline-primary"
        >
          Update
        </Button>{" "}
        <Button
          onClick={()=>navigate(`/delete/${props.index}`)}
          value={props.index}
          variant="outline-danger"
        >
          Delete
        </Button>{" "}
      </td>
    </tr>
  );
};

export default TableRow;
