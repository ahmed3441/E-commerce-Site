import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate();

  const [formData, setformData] = React.useState({
    email: '',
    password: '',
  });

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

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const user = Users.find(u=>u.email===formData.email && u.password===formData.password);

    if(user) {
      navigate('/');
      alert('Login Successfull');
    }
    else {
      alert('Login Failed.Please try again');
    }
    
    setformData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };


  return (
    <div className="login-container">
      <div className="card">
        <h1 className="heading-form">Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="formGroup">
            <button className="btnn" type="submit">Login</button>
          </div>
          <div className="mt-3">
            <p>If You Are Not Registered? <Link to="/signup"><b>Register Now</b></Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
