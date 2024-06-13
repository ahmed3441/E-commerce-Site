import React from 'react'
import CustomerForm from "../components/CustomerForm";
 import './CustomerForm.css';
 import Navbar from "../components/Navbar";


const CustomerFormPage = () => {
  return (
    <div>
      <Navbar/>
        <CustomerForm/>
    </div>
  )
}

export default CustomerFormPage