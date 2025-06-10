// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">ASCE Gym</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact="true" to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/schedule" className="nav-link">Schedule</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/trainers" className="nav-link">Trainers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>

          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
