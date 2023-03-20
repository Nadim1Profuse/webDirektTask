import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Paper from "@mui/material/Paper";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";

export default function CustomerTable(props) {
  const customers = useSelector((state) => state.customers.customers);

  const deleteCustomer = (e) => {
    console.log("details of selectet customer:", customers[e.target.value]);
  };

  return (
    <Card
      border="danger"
      style={{ width: "auto", textAlign: "center", margin: "0.5rem 2rem" }}
    >
      <Card.Body>
        <Paper elevation={20}>
          <Table striped>
            <TableHead />
            <tbody>
              {customers.map((customer, index) => {
                const style = { backgroundColor: "green" };
                return (
                  <TableRow
                    key={index}
                    index={index}
                    style={customer.country === "India" ? style : {}}
                    srNo={index + 1}
                    fName={customer.fName}
                    lName={customer.lName}
                    phone={customer.phone}
                    country={customer.country}
                    email={customer.email}
                    delete={deleteCustomer}
                  />
                );
              })}
            </tbody>
          </Table>
        </Paper>
      </Card.Body>
    </Card>
  );
}
