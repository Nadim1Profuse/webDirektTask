import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ViewCustomerForm(props) {
  const { index } = useParams();
  console.log("veiw customer id", index);
  const [formData] = useState(
    useSelector((state) => state.customers.customers[index])
  );

  const navigate = useNavigate();

  return (
    <>
      <Card border="danger" style={{ margin: "2.5rem",  }}>
        <Card.Header style={{ backgroundColor: "snow" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ fontFamily: "Lato" }}>View Customer Details</h3>
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
              textAlign="start"
            >
              <Row>
                <Col>
                  <TextField
                    id="filled-select-currenc"
                    label="Industry"
                    required
                    name="industry"
                    variant="filled"
                    value={formData.industry}
                  />

                  <TextField
                    id="filled-multiline-flexible"
                    label="Last Name"
                    name="lName"
                    variant="filled"
                    type="text"
                    required
                    value={formData.lName}
                  />
                  <TextField
                    id="filled-multiline-flexible"
                    label="Address 2"
                    name="add2"
                    variant="filled"
                    type="text"
                    required
                    value={formData.add2}
                  />
                  <TextField
                    id="filled-select-currenc"
                    label="City"
                    required
                    name="city"
                    type="text"
                    variant="filled"
                    value={formData.city}
                  />

                  <TextField
                    id="filled-multiline-flexible"
                    label="Email Address"
                    name="email"
                    variant="filled"
                    type="email"
                    required
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
                    value={formData.fName}
                  />

                  <TextField
                    id="filled-multiline-flexible"
                    label="Address 1"
                    name="add1"
                    variant="filled"
                    type="text"
                    required
                    value={formData.add1}
                  />
                  <TextField
                    id="filled-select-currenc"
                    label="Country"
                    required
                    name="country"
                    variant="filled"
                    value={formData.country}
                  />

                  <TextField
                    id="filled-multiline-flexible"
                    label="ZIP Code"
                    name="zip"
                    variant="filled"
                    type="number"
                    required
                    value={formData.zip}
                  />

                  <TextField
                    id="filled-multiline-flexible"
                    label="Phone Number"
                    name="phone"
                    variant="filled"
                    type="number"
                    required
                    value={formData.phone}
                  />
                  
                </Col>
              </Row>
            </Box>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
