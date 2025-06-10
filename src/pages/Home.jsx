import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section - Full Width */}
      <section className="hero-section text-white position-relative w-100 vw-100 m-0 p-0">
        <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-75"></div>
        <div className="container-fluid px-4 py-5 position-relative">
          <div className="row min-vh-75 align-items-center">
            <div className="col-lg-6 ps-lg-5">
              <h1 className="display-3 fw-bold mb-4">Transform Your Body, Transform Your Life</h1>
              <p className="lead mb-4">At ASCE Gym, we're committed to helping you achieve your fitness goals with expert trainers and personalized plans.</p>
              <div className="d-flex gap-3">
                <Link to="/register" className="btn btn-primary btn-lg">Join Now</Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Full Width */}
      <section className="py-5 bg-light w-100 vw-100 m-0">
        <div className="container-fluid px-4">
          <h2 className="text-center mb-5">Why Choose ASCE Gym?</h2>
          <div className="row g-4 px-lg-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto">
                    <i className="bi bi-person-check-fill"></i>
                  </div>
                  <h3 className="h4 mb-3">Expert Trainers</h3>
                  <p className="card-text">Our certified trainers create personalized workout plans tailored to your specific goals and fitness level.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto">
                    <i className="bi bi-gear-fill"></i>
                  </div>
                  <h3 className="h4 mb-3">Modern Equipment</h3>
                  <p className="card-text">Access state-of-the-art fitness equipment and facilities designed for optimal performance and results.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto">
                    <i className="bi bi-calendar-check"></i>
                  </div>
                  <h3 className="h4 mb-3">Flexible Classes</h3>
                  <p className="card-text">Choose from a variety of classes scheduled throughout the day to fit your busy lifestyle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Full Width */}
      <section className="py-5 w-100 vw-100 m-0">
        <div className="container-fluid px-4">
          <h2 className="text-center mb-5">Our Programs</h2>
          <div className="row g-4 px-lg-4">
            <div className="col-lg-6">
              <div className="card mb-3 border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4 bg-primary text-white d-flex align-items-center justify-content-center">
                    <h3 className="h4 m-0 p-3 text-center">Personal Training</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">One-on-one sessions with our expert trainers to accelerate your fitness journey with personalized attention.</p>
                      <Link to="/pricing" className="btn btn-sm btn-outline-primary">View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-3 border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4 bg-primary text-white d-flex align-items-center justify-content-center">
                    <h3 className="h4 m-0 p-3 text-center">Group Classes</h3>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">Energetic group sessions including HIIT, yoga, spinning, and more for motivation and community.</p>
                      <Link to="/schedule" className="btn btn-sm btn-outline-primary">View Schedule</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Full Width */}
      <section className="py-5 bg-light w-100 vw-100 m-0">
        <div className="container-fluid px-4">
          <h2 className="text-center mb-5">What Our Members Say</h2>
          <div className="row px-lg-4">
            <div className="col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-white rounded-circle p-3">JD</div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-0">John Doe</h5>
                      <p className="text-muted mb-0">Member for 2 years</p>
                    </div>
                  </div>
                  <p className="card-text">"ASCE Gym transformed my approach to fitness. The trainers are knowledgeable and the community is supportive. I've achieved results I never thought possible!"</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-white rounded-circle p-3">JS</div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-0">Jane Smith</h5>
                      <p className="text-muted mb-0">Member for 1 year</p>
                    </div>
                  </div>
                  <p className="card-text">"The variety of classes keeps my workouts fresh and exciting. The trainers push me to my limits in the best way possible. Highly recommend!"</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-white rounded-circle p-3">RJ</div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-0">Robert Johnson</h5>
                      <p className="text-muted mb-0">Member for 6 months</p>
                    </div>
                  </div>
                  <p className="card-text">"As a beginner, I was intimidated at first, but the staff made me feel welcome from day one. The facilities are clean and modern. I'm seeing progress every week!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="py-5 bg-primary text-white w-100 vw-100 m-0">
        <div className="container-fluid px-4 text-center">
          <h2 className="mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="lead mb-4">Join ASCE Gym today and take the first step towards a healthier, stronger you.</p>
          <Link to="/register" className="btn btn-light btn-lg px-4">Sign Up Now</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
