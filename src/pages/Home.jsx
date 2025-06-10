import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white position-relative">
        <div className="bg-dark0 position-absolute top-0 start-0 w-100 h-100 opacity-75"></div>
        <div className="container-fluid">
          <div className="row min-vh-75 align-items-center">
            <div className="col-lg-6 col-md-8 ps-md-5 p-4">
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

      {/* Facilities Showcase */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="text-center mb-5">Our World-Class Facilities</h2>
              <div className="row g-4">
                <div className="col-md-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1744551612249-655d096b9f95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Weight Training Area" />
                    <div className="card-body text-center">
                      <h3 className="h5">Weight Training</h3>
                      <p className="card-text">State-of-the-art equipment for strength and resistance training.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <img src="https://plus.unsplash.com/premium_photo-1664475922946-d01445240652?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Cardio Zone" />
                    <div className="card-body text-center">
                      <h3 className="h5">Cardio Zone</h3>
                      <p className="card-text">Latest treadmills, ellipticals, and bikes for effective cardio workouts.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <img src="https://plus.unsplash.com/premium_photo-1661683706979-c349c21f79c8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Yoga Studio" />
                    <div className="card-body text-center">
                      <h3 className="h5">Yoga Studio</h3>
                      <p className="card-text">Peaceful space for yoga, pilates, and mindfulness practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="text-center mb-5">Why Choose ASCE Gym?</h2>
              <div className="row g-4">
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
          </div>
        </div>
      </section>

      {/* Featured Trainers */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="text-center mb-5">Meet Our Expert Trainers</h2>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm text-center">
                    <img src="https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Trainer" />
                    <div className="card-body">
                      <h5 className="card-title">Rahul Sharma</h5>
                      <p className="card-text text-muted">Strength & Conditioning</p>
                      <p className="card-text">Experience: 8 years</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm text-center">
                    <img src="https://images.unsplash.com/photo-1589860518300-9eac95f784d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Trainer" />
                    <div className="card-body">
                      <h5 className="card-title">Priya Patel</h5>
                      <p className="card-text text-muted">Yoga & Pilates</p>
                      <p className="card-text">Experience: 6 years</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm text-center">
                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Trainer" />
                    <div className="card-body">
                      <h5 className="card-title">Arjun Singh</h5>
                      <p className="card-text text-muted">CrossFit & HIIT</p>
                      <p className="card-text">Experience: 5 years</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm text-center">
                    <img src="https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Trainer" />
                    <div className="card-body">
                      <h5 className="card-title">Anjali Mehta</h5>
                      <p className="card-text text-muted">Nutrition & Wellness</p>
                      <p className="card-text">Experience: 7 years</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link to="/trainers" className="btn btn-outline-primary">View All Trainers</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="text-center mb-5">Our Programs</h2>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <img src="https://plus.unsplash.com/premium_photo-1672862927484-cfc92dd88081?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Personal Training" />
                    <div className="card-body text-center">
                      <h3 className="h4 mb-3">Personal Training</h3>
                      <p className="card-text">One-on-one sessions with our expert trainers to accelerate your fitness journey with personalized attention.</p>
                      <Link to="/pricing" className="btn btn-sm btn-outline-primary">View Details</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <img src="https://plus.unsplash.com/premium_photo-1661670892906-b1cffa07584d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Group Classes" />
                    <div className="card-body text-center">
                      <h3 className="h4 mb-3">Group Classes</h3>
                      <p className="card-text">Energetic group sessions including HIIT, yoga, spinning, and more for motivation and community.</p>
                      <Link to="/schedule" className="btn btn-sm btn-outline-primary">View Schedule</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <img src="https://plus.unsplash.com/premium_photo-1661393458386-4101ce49c82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Nutrition Coaching" />
                    <div className="card-body text-center">
                      <h3 className="h4 mb-3">Nutrition Coaching</h3>
                      <p className="card-text">Expert guidance on nutrition and diet planning to complement your fitness routine and maximize results.</p>
                      <Link to="/pricing" className="btn btn-sm btn-outline-primary">View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="mb-4">Ready to Start Your Fitness Journey?</h2>
              <p className="lead mb-4">Join ASCE Gym today and take the first step towards a healthier, stronger you.</p>
              <Link to="/register" className="btn btn-light btn-lg px-4">Sign Up Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
