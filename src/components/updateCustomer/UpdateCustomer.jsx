import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomer } from "../../features/customerSlices/customersSlice";
import SuccesAlert from "../common/SuccesAlert";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateCustomerForm(props) {
  const { index } = useParams();
  const [formData, setFormData] = useState(
    useSelector((state) => state.customers.customers[index])
  );

  console.log("updateCustomer customerDetails", formData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showSuccesAlert, setSuccessAlert] = useState(false);

  const insutries = ["IT", "Education", "Construction", "Finance"];
  const country = ["India", "England", "Newzeland", "Russia"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const clearForm = () =>
    setFormData({
      industry: "",
      fName: "",
      lName: "",
      add1: "",
      add2: "",
      country: "",
      city: "",
      zip: "",
      phone: "",
      email: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCustomer({ index: index, data: formData }));
    setSuccessAlert(true);
  };

  return (
    <>
      <SuccesAlert
        alertMessage="Successfully Updated Customer Details"
        show={showSuccesAlert}
        onHide={() => {
          setSuccessAlert(false);
        }}
      />

      <Card border="danger" style={{ margin: "1rem" }}>
        <Card.Header style={{ backgroundColor: "snow" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ fontFamily: "Lato" }}> Update Customer Details</h3>
            <Button
              onClick={() => navigate("/")}
              type="button"
              variant="outline-danger"
            >
              <CancelIcon />
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 2, width: "65ch" },
              }}
              Validate
              autoComplete="off"
              onSubmit={handleSubmit}
              textAlign="start"
            >
              <Row>
                <Col>
                  <TextField
                    id="filled-select-currenc"
                    select
                    label="Industry"
                    required
                    name="industry"
                    variant="filled"
                    onChange={handleChange}
                    value={formData.industry}
                  >
                    {insutries.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="filled-multiline-flexible"
                    label="Last Name"
                    name="lName"
                    variant="filled"
                    type="text"
                    required
                    onChange={handleChange}
                    value={formData.lName}
                  />
                  <TextField
                    id="filled-multiline-flexible"
                    label="Address 2"
                    name="add2"
                    variant="filled"
                    type="text"
                    required
                    onChange={handleChange}
                    value={formData.add2}
                  />
                  <TextField
                    id="filled-select-currenc"
                    label="City"
                    required
                    name="city"
                    type="text"
                    variant="filled"
                    onChange={handleChange}
                    value={formData.city}
                  />

                  <TextField
                    id="filled-multiline-flexible"
                    label="Email Address"
                    name="email"
                    variant="filled"
                    type="email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                </Col>
                <Col>
                  <TextField
                    id="filled-multiline-flexible"
                    label="First Name"
                    name="fName"
                    multiline
                    variant="filled"
                    defaultValue=""
                    type="text"
                    required
                    onChange={handleChange}
                    value={formData.fName}
                  />

                  <TextField
                    id="filled-multiline-flexible"
                    label="Address 1"
                    name="add1"
                    variant="filled"
                    type="text"
                    required
                    onChange={handleChange}
                    value={formData.add1}
                  />
                  <TextField
                    id="filled-select-currenc"
                    select
                    label="Country"
                    required
                    name="country"
                    variant="filled"
                    onChange={handleChange}
                    value={formData.country}
                  >
                    {country.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="filled-multiline-flexible"
                    label="ZIP Code"
                    name="zip"
                    variant="filled"
                    type="number"
                    required
                    onChange={handleChange}
                    value={formData.zip}
                  />

                  <TextField
                    id="filled-multiline-flexible"
                    label="Phone Number"
                    name="phone"
                    variant="filled"
                    type="number"
                    required
                    onChange={handleChange}
                    value={formData.phone}
                  />
                  <div style={{ textAlign: "end" }}>
                    <Button
                      onClick={clearForm}
                      variant="outline-warning"
                      style={{}}
                    >
                      Clear All
                    </Button>
                    <Button
                      type="submit"
                      variant="outline-success"
                      style={{ margin: "0 3rem" }}
                    >
                      Update
                    </Button>
                  </div>
                </Col>
              </Row>
            </Box>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
