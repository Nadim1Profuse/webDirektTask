import React from "react";
import Button from "react-bootstrap/Button";
import CustomerTable from "./customerList/CustomerTable";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ textAlign: "end", padding: "1rem", marginRight: "1rem" }}>
        <Button
          onClick={() => {
            navigate("/addCustomer");
          }}
          variant="outline-success"
        >
          Add Customer
        </Button>
      </div>

      <CustomerTable />
    </>
  );
};

export default Home;
