// src/pages/Login.jsx
import React from 'react';

function Login() {
  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Login</h2>
      <form>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
