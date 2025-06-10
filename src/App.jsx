// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Schedule from './pages/Schedule.jsx';
import Trainers from './pages/Trainer.jsx';
import Pricing from './pages/Pricing.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 w-100 vw-100 m-0 p-0">
        <Header/>
        {/* <Navbar /> */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Handle 404 Page Not Found */}
            <Route path="*" element={
              <div className="container text-center py-5">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <h1 className="display-1 fw-bold text-danger mb-4">404</h1>
                    <h2 className="display-6 mb-3">Oops! Page Not Found</h2>
                    <div className="mb-4">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/6195/6195678.png" 
                        alt="404 Error" 
                        className="img-fluid" 
                        style={{ maxWidth: '200px' }}
                      />
                    </div>
                    <p className="lead text-muted mb-4">
                      Looks like you've ventured into uncharted territory! 
                      The page you're looking for might have been moved or doesn't exist.
                    </p>
                    <Link to="/" className="btn btn-primary btn-lg px-4">
                      <i className="bi bi-house-door me-2"></i>
                      Return to Homepage
                    </Link>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;




