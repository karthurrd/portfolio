import React from 'react';
import car1 from './car1.jpg';
import cover from './cover.jpg';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function Intro() {

  return (
    <>
      <div id="carouselExampleLight" className="carousel carousel-light slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={car1} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={car1} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={car1} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="profile-section">
        <div className="container mt-5 mb-5">
          <div className="row no-gutters">
            <div className="col-md-4 col-lg-4 img-container">
              <img src={cover} alt="Cover Pic" className="profile-img" />
            </div>
            <div className="col-md-8 col-lg-8">
              <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                  <h3 className="display-5">Fernando Puente</h3>
                  <FaGithub /><FaLinkedin /><FaInstagram />
                </div>
                <div className="p-3 bg-black text-white">
                  <h6>Full Stack Web Developer &amp; Graphic Designer</h6>
                </div>
                <div className="d-flex flex-row text-white">
                  <div className="p-4 text-center skill-block mongo">
                    <h4>M</h4>
                    <h6>MongoDB</h6>
                  </div>
                  <div className="p-3 text-center skill-block express">
                    <h4>E</h4>
                    <h6>Express.js</h6>
                  </div>
                  <div className="p-3 text-center skill-block react">
                    <h4>R</h4>
                    <h6>React.js</h6>
                  </div>
                  <div className="p-3 text-center skill-block node">
                    <h4>N</h4>
                    <h6>Node.js</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br /><br /><br />

      <div className="container">
        <div className="row">
          <div className="col-12 p-0">
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-12 bg-white p-0 px-3 py-3 mb-3">
                <div className="d-flex flex-column align-items-center">
                  <h4 className="fw-bold mt-3">Contact Me</h4>
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" required /><br />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" required /><br />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" id="message" rows="3" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Send Message</button>
                  </form>
                </div>
              </div>
              <div className="col-12 bg-white p-0 px-2 pb-3 mb-3">
                <div className="d-flex justify-content-between border-bottom py-2 px-3">
                  <p><FaGithub className="me-2" />Github</p>
                  <a href="https://github.com/karthurrd/">https://github.com/karthurrd/</a>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2 px-3">
                  <p><FaInstagram className="me-2" />Instagram</p>
                  <a href="https://www.instagram.com/nando.devr/">https://www.instagram.com/nando.devr/</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 ps-md-4">
            <div className="row">
              <div className="col-12 bg-white px-3 pb-2 mb-3">
                <h6 className="d-flex align-items-center mb-3 fw-bold py-3"><i className="text-info me-2">About Me</i>Background</h6>
                <p> Hello, I'm Fernando Puente, a determined and hardworking Full Stack Web Developer with a background in Graphic Design. I have several years of
                  experience in building websites and have completed intensive training at Kenzie Academy. This training has made me proficient in HTML, CSS, React.js, MongoDB,
                  Express.js, and Node.js. Along with my skills in graphic design using Adobe editing tools. I bring over a decade of experience in customer service and technical support.
                  One of my notable projects is 'Memories Booking', a user-friendly platform developed for my photography business, Memories Photography.
                  I am eager to apply my skills and experiences to a exciting new project.</p>
              </div>
              <div className="col-12 bg-white px-3 pb-2">
                <h6 className="d-flex align-items-center mb-3 fw-bold py-3"><i className="text-info me-2">Skills</i>Strongpoints</h6>
                <small>HTML, CSS</small>
                <div className="progress mb-3" style={{ height: "5px" }}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{ width: "85%" }}
                    aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <small>Javascript and React</small>
                <div className="progress mb-3" style={{ height: "5px" }}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }}
                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <small>Back end Developement</small>
                <div className="progress mb-3" style={{ height: "5px" }}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{ width: "70%" }}
                    aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <small>Bootstrap</small>
                <div className="progress mb-3" style={{ height: "5px" }}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }}
                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>



  );
};


export default Intro;







