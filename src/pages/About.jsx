// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h1 className="display-4 fw-bold mb-4">About ASCE Gym</h1>
              <p className="lead mb-0">Building stronger bodies and healthier lives since 2010</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 mb-4 mb-md-0">
              <img 
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="ASCE Gym" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-md-5">
              <h2 className="mb-4">Our Story</h2>
              <p>Founded in 2010 by fitness enthusiasts Arjun Sharma and Chetan Patel, ASCE Gym began with a simple mission: to create a fitness center that combines cutting-edge equipment with personalized training in a welcoming environment.</p>
              <p>What started as a small 2,000 sq. ft. facility has now grown into a 15,000 sq. ft. state-of-the-art fitness center with multiple locations across the country. Throughout our growth, we've maintained our commitment to providing personalized fitness experiences that transform lives.</p>
              <p>Today, ASCE Gym stands as a testament to our founders' vision, serving thousands of members with diverse fitness goals and needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h2 className="mb-4">Our Mission</h2>
                      <p>At ASCE Gym, our mission is to empower individuals to achieve their fitness goals through expert guidance, supportive community, and innovative facilities.</p>
                      <p>We believe fitness is not just about physical transformation but about building confidence, discipline, and overall well-being that extends beyond the gym walls.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h2 className="mb-4">Our Values</h2>
                      <ul className="list-unstyled">
                        <li className="mb-3">
                          <strong className="text-primary">Excellence</strong> - We strive for excellence in all aspects of our service and facilities.
                        </li>
                        <li className="mb-3">
                          <strong className="text-primary">Inclusivity</strong> - We welcome members of all fitness levels, backgrounds, and goals.
                        </li>
                        <li className="mb-3">
                          <strong className="text-primary">Innovation</strong> - We continuously evolve our methods and equipment to provide the best fitness experience.
                        </li>
                        <li className="mb-3">
                          <strong className="text-primary">Integrity</strong> - We operate with honesty and transparency in all our interactions.
                        </li>
                        <li>
                          <strong className="text-primary">Community</strong> - We foster a supportive environment where members motivate each other.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h2 className="mb-5">Leadership Team</h2>
              <div className="row">
                <div className="col-md-3 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img 
                      src="https://source.unsplash.com/random/300x300/?businessman,indian" 
                      className="card-img-top team-img" 
                      alt="Arjun Sharma"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Arjun Sharma</h5>
                      <p className="text-muted">Co-Founder & CEO</p>
                      <p className="small">Former national-level athlete with an MBA from IIM Ahmedabad. Passionate about making fitness accessible to everyone.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img 
                      src="https://source.unsplash.com/random/300x300/?businessman,indian,glasses" 
                      className="card-img-top team-img" 
                      alt="Chetan Patel"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chetan Patel</h5>
                      <p className="text-muted">Co-Founder & COO</p>
                      <p className="small">Certified fitness trainer with 15+ years of experience in the fitness industry. Oversees operations and training programs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img 
                      src="https://source.unsplash.com/random/300x300/?businesswoman,indian" 
                      className="card-img-top team-img" 
                      alt="Priya Desai"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Priya Desai</h5>
                      <p className="text-muted">Fitness Director</p>
                      <p className="small">Sports nutritionist and former yoga champion. Leads our team of trainers and develops our fitness programs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img 
                      src="https://source.unsplash.com/random/300x300/?businessman,indian,young" 
                      className="card-img-top team-img" 
                      alt="Vikram Mehta"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Vikram Mehta</h5>
                      <p className="text-muted">Marketing Director</p>
                      <p className="small">Digital marketing expert with a passion for fitness. Responsible for brand growth and member engagement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="text-center mb-5">Our Achievements</h2>
              <div className="row text-center">
                <div className="col-md-3 mb-4">
                  <div className="achievement-box p-4 bg-white rounded shadow-sm">
                    <h3 className="display-4 text-primary fw-bold">12+</h3>
                    <p className="mb-0">Years of Excellence</p>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="achievement-box p-4 bg-white rounded shadow-sm">
                    <h3 className="display-4 text-primary fw-bold">5</h3>
                    <p className="mb-0">Locations Nationwide</p>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="achievement-box p-4 bg-white rounded shadow-sm">
                    <h3 className="display-4 text-primary fw-bold">50+</h3>
                    <p className="mb-0">Certified Trainers</p>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="achievement-box p-4 bg-white rounded shadow-sm">
                    <h3 className="display-4 text-primary fw-bold">10K+</h3>
                    <p className="mb-0">Happy Members</p>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h4 className="mb-3">Awards & Recognition</h4>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-transparent">🏆 "Best Fitness Center" - Fitness India Awards, 2023</li>
                        <li className="list-group-item bg-transparent">🏆 "Excellence in Customer Service" - Wellness Industry Association, 2022</li>
                        <li className="list-group-item bg-transparent">🏆 "Top 10 Fitness Chains in India" - Fitness Magazine, 2021</li>
                        <li className="list-group-item bg-transparent">🏆 "Innovation in Fitness Programs" - Health & Wellness Summit, 2020</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="text-center mb-5">Our Facilities</h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card border-0 shadow-sm">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img 
                          src="https://source.unsplash.com/random/300x200/?gym,equipment" 
                          className="img-fluid rounded-start h-100 w-100 object-fit-cover" 
                          alt="Training Areas"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Training Areas</h5>
                          <p className="card-text">Our spacious training areas feature zones for strength training, functional fitness, and free weights. Each zone is equipped with premium equipment from leading brands.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card border-0 shadow-sm">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img 
                          src="https://source.unsplash.com/random/300x200/?gym,cardio" 
                          className="img-fluid rounded-start h-100 w-100 object-fit-cover" 
                          alt="Cardio Section"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Cardio Section</h5>
                          <p className="card-text">Our cardio section features treadmills, ellipticals, stationary bikes, and rowing machines with built-in entertainment systems and fitness tracking.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card border-0 shadow-sm">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img 
                          src="https://source.unsplash.com/random/300x200/?yoga,studio" 
                          className="img-fluid rounded-start h-100 w-100 object-fit-cover" 
                          alt="Group Exercise Studios"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Group Exercise Studios</h5>
                          <p className="card-text">Our studios are designed for various group classes including yoga, pilates, zumba, and high-intensity interval training with premium flooring and sound systems.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card border-0 shadow-sm">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img 
                          src="https://source.unsplash.com/random/300x200/?gym,locker" 
                          className="img-fluid rounded-start h-100 w-100 object-fit-cover" 
                          alt="Amenities"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Premium Amenities</h5>
                          <p className="card-text">Members enjoy access to clean locker rooms, shower facilities, sauna, steam rooms, and a nutrition bar serving healthy refreshments and supplements.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h2 className="mb-5">What Our Members Say</h2>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <span className="text-warning">★★★★★</span>
                      </div>
                      <p className="card-text fst-italic">"ASCE Gym has completely transformed my fitness journey. The trainers are knowledgeable and supportive, and the facilities are always clean and well-maintained."</p>
                      <div className="d-flex align-items-center mt-3">
                        <img 
                          src="https://source.unsplash.com/random/50x50/?portrait,woman" 
                          className="rounded-circle me-3" 
                          width="50" 
                          height="50" 
                          alt="Member"
                        />
                        <div>
                          <h6 className="mb-0">Neha Sharma</h6>
                          <small className="text-muted">Member since 2019</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <span className="text-warning">★★★★★</span>
                      </div>
                      <p className="card-text fst-italic">"As someone who was intimidated by gyms, ASCE made me feel welcome from day one. The personalized approach to fitness has helped me achieve goals I never thought possible."</p>
                      <div className="d-flex align-items-center mt-3">
                        <img 
                          src="https://source.unsplash.com/random/50x50/?portrait,man" 
                          className="rounded-circle me-3" 
                          width="50" 
                          height="50" 
                          alt="Member"
                        />
                        <div>
                          <h6 className="mb-0">Rajesh Kumar</h6>
                          <small className="text-muted">Member since 2020</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <span className="text-warning">★★★★★</span>
                      </div>
                      <p className="card-text fst-italic">"The variety of classes and equipment at ASCE Gym keeps my workouts interesting. The community aspect is what sets it apart - I've made great friends here while getting fit!"</p>
                      <div className="d-flex align-items-center mt-3">
                        <img 
                          src="https://source.unsplash.com/random/50x50/?portrait,woman,indian" 
                          className="rounded-circle me-3" 
                          width="50" 
                          height="50" 
                          alt="Member"
                        />
                        <div>
                          <h6 className="mb-0">Anita Desai</h6>
                          <small className="text-muted">Member since 2021</small>
                        </div>
                      </div>
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
                            <h2 className="mb-4">Ready to Join the ASCE Family?</h2>
                            {/* Add your CTA button or content here */}
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                );
              }
              
 export default About;