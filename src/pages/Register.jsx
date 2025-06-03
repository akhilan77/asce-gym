// src/pages/Register.jsx
import React from 'react';

function Register() {
  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Register</h2>
      <form>
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" className="form-control" placeholder="Enter full name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Create password" />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;
