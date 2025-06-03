// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
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
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <Header/>
            <Navbar />
            <main className="min-vh-100 p-3 p-md-4">
              <div className="container-fluid">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/trainers" element={<Trainers />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

