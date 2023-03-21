import React from "react";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import Button from "react-bootstrap/Button";

const TableHead = (props) => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>
          First Name{" "}
          <Button
            style={{ blockSize: "27px" }}
            size="sm"
            variant="outline-danger"
            onClick={props.sortByName}
          >
            <SortByAlphaIcon fontSize="small" />
          </Button>
        </th>
        <th>Last Name</th>
        <th>Address 1 {" "}
          <Button
            style={{ blockSize: "27px" }}
            size="sm"
            variant="outline-danger"
            onClick={props.sortByAdd1}
          >
            <SortByAlphaIcon fontSize="small" />
          </Button></th>
        <th>Phone Number</th>
        <th>Country</th>
        <th>Email Address</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHead;
