import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'

function SignUpForm() {
const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(e.target.value);
    console.log(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords NOt Match');
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem('users')) || [];

    const newUsers = [...existingUser, formData];
    localStorage.setItem('users', JSON.stringify(newUsers));
  
    setformData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    navigate('/signin')
  };


  return (
    <div className="signup-container">
      <div className="card">
        <h1 className="heading-form">SignUp Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          </div>
          <div className="formGroup">
            <button className="btnn" type="submit">Register</button>
          </div>
          <div className="mt-3">
            <p>Click Here For <Link to="/signin"><b>Login</b></Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
