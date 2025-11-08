import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Selected projects showcasing WCC Infra's capabilities across water
          pipelines, road networks and industrial construction.
        </p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-pipelines">Pipelines</li>
            <li data-filter=".filter-roads">Roads</li>
            <li data-filter=".filter-industrial">Industrial</li>
          </ul>

          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-pipelines">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                className="img-fluid"
                alt="Ghaziabad water pipeline"
              />
              <div className="portfolio-info">
                <h4>Ghaziabad Water Pipeline</h4>
                <p>Turnkey potable water pipeline and distribution network.</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                  title="Ghaziabad Water Pipeline"
                  data-gallery="portfolio-gallery-pipelines"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-roads">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                className="img-fluid"
                alt="National highway upgrade"
              />
              <div className="portfolio-info">
                <h4>National Highway Upgrade</h4>
                <p>Capacity expansion and resurfacing of a major highway corridor.</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                  title="National Highway Upgrade"
                  data-gallery="portfolio-gallery-roads"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-industrial">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                className="img-fluid"
                alt="Industrial park development"
              />
              <div className="portfolio-info">
                <h4>Industrial Park Development</h4>
                <p>Infrastructure and civil works for a multi-tenant industrial park.</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                  title="Industrial Park Development"
                  data-gallery="portfolio-gallery-industrial"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-pipelines">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>River Crossing Pipeline</h4>
                <p>Trenchless river crossing and protective encasement works.</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                  title="River Crossing Pipeline"
                  data-gallery="portfolio-gallery-pipelines"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-roads">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Urban Road Rehabilitation</h4>
                <p>Rehabilitation of urban streets including drainage and sidewalks.</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                  title="Urban Road Rehabilitation"
                  data-gallery="portfolio-gallery-roads"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-industrial">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Factory Civil Works</h4>
                <p>Structural and civil works for a manufacturing facility.</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                  title="Factory Civil Works"
                  data-gallery="portfolio-gallery-industrial"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-pipelines">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Subsurface Pipeline Network</h4>
                <p>Complex subsurface works and jointing for large-diameter mains.</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                  title="Subsurface Pipeline Network"
                  data-gallery="portfolio-gallery-pipelines"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-roads">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Bridge Approach Works</h4>
                <p>Approach and highway tie-ins for major bridge construction.</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                  title="Bridge Approach Works"
                  data-gallery="portfolio-gallery-roads"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-industrial">
              <img
                src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Port Logistics Yard</h4>
                <p>Marine logistics yard, paving and material handling infrastructure.</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                  title="Port Logistics Yard"
                  data-gallery="portfolio-gallery-industrial"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
