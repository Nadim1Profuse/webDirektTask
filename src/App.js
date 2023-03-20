import React from "react";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerForm from "./components/addCustomer/CustomerForm";
import NavbarHeader from "./components/NavBarHeader";
import ViewCustomerForm from "./components/ViewCustomer/ViewCustomerForm";
import UpdateCustomerForm from "./components/updateCustomer/UpdateCustomer";
import "./app.css"
import DeleteCustomer from "./components/deleteCustomer/DeleteCustomer";

function App() {
  return (
    <div className="App">
    <NavbarHeader/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addCustomer" element={<CustomerForm />} />
          <Route path="/view/:index" element={<ViewCustomerForm/>}/>
          <Route path="/update/:index" element={<UpdateCustomerForm/>}/>
          <Route path="/delete/:index" element={<DeleteCustomer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
