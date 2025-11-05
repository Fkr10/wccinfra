import React from "react";

function AboutWithVideo() {
  return (
    <section id="about-alt" className="about-alt section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 position-relative align-self-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src="assets/img/about.jpg" className="img-fluid" alt="WCC Infra project" />
            <a
              href="https://www.youtube.com/watch?v=wcc-infrastructure-overview"
              className="glightbox pulsating-play-btn"
            ></a>
          </div>
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Delivering End-to-End Infrastructure Projects</h3>
            <p className="fst-italic">
              At WCC Infra Private Limited, we deliver high-quality construction and infrastructure
              solutions across water supply, transportation and industrial sectors.
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>
                  Turnkey water pipeline projects with proven hydraulic and civil expertise
                </span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>
                  Road and highway construction using modern materials and safety-first practices
                </span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>
                  Industrial and civil construction with strong project management and quality control
                </span>
              </li>
            </ul>
            <p>
              Our team combines engineering experience, modern equipment and sustainable practices to
              deliver projects on time and on budget. Partner with WCC Infra to build reliable,
              future-ready infrastructure that supports communities and industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutWithVideo;
