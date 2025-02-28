import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="footer_about">
              <h4>About WCC Infra</h4>
              <p>
                WCC Infra Private Limited is a leader in infrastructure
                development, specializing in pipeline construction, trenchless
                technology, road development, sewer networks, and earthworks.
                Our projects are built on quality, durability, and innovation to
                drive progress.
              </p>
              <p>
                We also provide{" "}
                <a href="https://www.scrapworker.com">Scrapworker</a> Services,
                ensuring eco-friendly recycling,{" "}
                <a href="https://www.scrapworker.com/metal-scrap">
                  Metal scrap recycling
                </a>{" "}
                and waste management solutions.
              </p>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <p>
                <strong>WCC Infra Pvt Ltd</strong>
                <br />
                A-23, Govind Puram, Ghaziabad, Uttar Pradesh, India
                <br />
                <strong>Phone:</strong> +91 983-7352-834
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info@wccinfra.com">info@wccinfra.com</a>
              </p>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="footer_social">
              <h4>Follow Us</h4>
              <div className="social_icons">
                <a
                  href="https://www.facebook.com/wccinfra"
                  className="social_link"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://twitter.com/wccinfra" className="social_link">
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/wccinfra"
                  className="social_link"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/wccinfra"
                  className="social_link"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/wccinfra"
                  className="social_link"
                >
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <p>
            &copy; {new Date().getFullYear()} WCC Infra Pvt Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
