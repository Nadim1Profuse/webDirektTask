import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

export default function DeleteConfirmationModel(props) {
  const navigate = useNavigate();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Customer!!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to delete this Customer Details?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={() => navigate("/")}>
          No! Cancel it
        </Button>{" "}
        <Button variant="outline-danger" onClick={props.yesDelete}>
          Yes! Delete it
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
