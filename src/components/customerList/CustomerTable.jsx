import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Paper from "@mui/material/Paper";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import {
  sortByAdd1,
  sortByFirstName,
} from "../../features/customerSlices/customersSlice";

export default function CustomerTable(props) {
  let customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();
  let toggleSortName = true;
  let toggleSortAdd1 = true;

  //Pagiantion Logic Start
  const totalPages = Math.ceil(customers.length / 5);
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5;
  let customersOnCurrentPage = customers.slice(
    (currentPage - 1) * customersPerPage,
    currentPage * customersPerPage
  );
  //Pagiantion Logic End

  return (
    <>
      <Card
        border="danger"
        style={{ width: "auto", textAlign: "center", margin: "0.5rem 2rem" }}
      >
        <Card.Body>
          <Paper elevation={20}>
            <Table striped>
              <TableHead
                sortByName={() => {
                  dispatch(sortByFirstName(toggleSortName));
                  toggleSortName = !toggleSortName;
                }}
                sortByAdd1={() => {
                  dispatch(sortByAdd1(toggleSortAdd1));
                  toggleSortAdd1 = !toggleSortAdd1;
                }}
              />
              <tbody>
                {customersOnCurrentPage.map((customer, index) => {
                  const style = { backgroundColor: "green" };
                  return (
                    <TableRow
                      key={index}
                      index={index + (currentPage - 1) * 5}
                      style={customer.country === "India" ? style : {}}
                      srNo={index + 1 + (currentPage - 1) * 5}
                      fName={customer.fName}
                      lName={customer.lName}
                      add1={customer.add1}
                      phone={customer.phone}
                      country={customer.country}
                      email={customer.email}
                    />
                  );
                })}
              </tbody>
            </Table>
          </Paper>
        </Card.Body>
      </Card>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(e, page) => setCurrentPage(page)}
          count={totalPages}
          color="secondary"
        />
      </div>
    </>
  );
}
