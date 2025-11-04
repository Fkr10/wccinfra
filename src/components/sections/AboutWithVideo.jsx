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
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
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
            <h3>
              Building Robust Infrastructure Solutions for Modern Enterprises
            </h3>
            <p className="fst-italic">
              At WCC Infrastructure, we specialize in delivering cutting-edge infrastructure solutions
              that power the digital transformation of businesses across industries.
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>
                  State-of-the-art data center facilities with 99.999% uptime guarantee
                </span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>
                  Comprehensive cloud infrastructure services with hybrid and multi-cloud capabilities
                </span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>
                  Advanced networking solutions with redundant connectivity and world-class security
                  measures to ensure seamless business operations and data protection
                </span>
              </li>
            </ul>
            <p>
              Our infrastructure solutions are designed to scale with your business needs,
              providing flexibility, reliability, and performance while optimizing costs.
              With WCC Infrastructure as your partner, you can focus on your core business
              while we manage your critical infrastructure needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutWithVideo;
