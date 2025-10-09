import React from "react";

function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row g-4 g-lg-0">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <h3>Free Plan</h3>
              <h4>
                <sup>$</sup>0<span> / month</span>
              </h4>
              <ul>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Quam adipiscing vitae proin</span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Nec feugiat nisl pretium</span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Nulla at volutpat diam uteera</span>
                </li>
                <li className="na">
                  <i className="bi bi-x"></i>{" "}
                  <span>Pharetra massa massa ultricies</span>
                </li>
                <li className="na">
                  <i className="bi bi-x"></i>{" "}
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
              </ul>
              <div className="text-center">
                <a href="#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 featured"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="pricing-item">
              <h3>Business Plan</h3>
              <h4>
                <sup>$</sup>29<span> / month</span>
              </h4>
              <ul>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Quam adipiscing vitae proin</span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Nec feugiat nisl pretium</span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Nulla at volutpat diam uteera</span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Pharetra massa massa ultricies</span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
              </ul>
              <div className="text-center">
                <a href="#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <h3>Developer Plan</h3>
              <h4>
                <sup>$</sup>49<span> / month</span>
              </h4>
              <ul>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Quam adipiscing vitae proin</span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Nec feugiat nisl pretium</span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Nulla at volutpat diam uteera</span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Pharetra massa massa ultricies</span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
              </ul>
              <div className="text-center">
                <a href="#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
