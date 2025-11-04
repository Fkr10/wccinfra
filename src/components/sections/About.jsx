import React from "react";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>
          About Us
          <br />
        </h2>
        <p>
          WCC Infra Private Limited is a leading infrastructure and construction company dedicated to shaping the future of India’s built environment. With a strong reputation for reliability and quality, we specialize in delivering comprehensive solutions for public and private sector projects.
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              Our core expertise spans:
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>Water supply and pipeline infrastructure</span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>Roads, highways, and urban development</span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>Industrial and civil construction</span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>Turnkey project management and consultancy</span>
              </li>
            </ul>
            <p>
              We are committed to sustainable practices, safety, and delivering projects on time with the highest standards of engineering excellence.
            </p>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              Our work empowers communities and supports economic growth by enhancing connectivity, access to essential services, and urban transformation. We take pride in our transparent approach, skilled workforce, and a portfolio of successful projects across multiple states.
            </p>
            <p>
              Partner with WCC Infra for innovative, future-ready infrastructure solutions that make a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
