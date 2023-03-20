import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DeleteConfirmationModel from "../common/DeleteConfirmationModel";
import { deleteCustomer } from "../../features/customerSlices/customersSlice";
import SuccesAlert from "../common/SuccesAlert";

const DeleteCustomer = (props) => {
  const { index } = useParams();
  const [showSuccesAlert, setSuccessAlert] = useState(false);
  const [modalShow, setModelShow] = useState(true);
  const dispatch=useDispatch();

  const deleteCustomerDetails = () => {
    console.log("deleteCustomer confirmed index=", index);
    setModelShow(false);
    setSuccessAlert(true);
    dispatch(deleteCustomer({index:index}))
  };

  return (
    <>
      <SuccesAlert
        show={showSuccesAlert}
        alertMessage="Successfully Deleted.."
      />
      <DeleteConfirmationModel show={modalShow} yesDelete={deleteCustomerDetails} />
    </>
  );
};
export default DeleteCustomer;
