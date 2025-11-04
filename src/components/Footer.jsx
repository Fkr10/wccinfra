const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">WCC Infra Private Limited</span>
            </a>
            <p>
              WCC Infra Private Limited is a leading construction and infrastructure company specializing in water pipeline systems, road and highway construction, and comprehensive infrastructure development across India.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="https://www.facebook.com/Wccinfra-61575128983217/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/wccinfra/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/wccinfra" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Why Choose Us</h4>
            <ul>
              <li>Experienced Engineers</li>
              <li>Quality Construction</li>
              <li>Timely Project Delivery</li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Infrastructure Development</a>
              </li>
              <li>
                <a href="#">Water Pipeline Projects</a>
              </li>
              <li>
                <a href="#">Road & Highway Construction</a>
              </li>
              <li>
                <a href="#">Industrial Construction</a>
              </li>
              <li>
                <a href="#">Civil Engineering Works</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>WCC Infra Pvt. Ltd.</p>
            <p>23 GOVIND PURAM , GHAZIABAD, Uttar Pradesh, India - 201013</p>
            <p>India</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>+91 98765 43210</span>
            </p>
            <p>
              <strong>Email:</strong> <span>info@wccinfra.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">WCC Infra Private Limited</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed & Developed by <a href="#">WCC Infra  Team</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
