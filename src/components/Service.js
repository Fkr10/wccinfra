import React from "react";

function Service() {
  return (
    <>
      <section id="service" className="service">
        <div className="head_title">
          <h3>Our Services</h3>
          <div className="separator"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main_service_area">
                <div className="main_service_content">
                  <div className="service_tabe">
                    <ul
                      className="service_tabe_menu nav nav-tabs"
                      role="tablist"
                    >
                      <li role="presentation" className="active">
                        <a
                          href="#civil"
                          aria-controls="civil"
                          role="tab"
                          data-toggle="tab"
                        >
                          <i className="fa fa-industry"></i> <br />
                          Civil Engineering
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#pipeline"
                          aria-controls="pipeline"
                          role="tab"
                          data-toggle="tab"
                        >
                          <i className="fa fa-wrench "></i> <br />
                          Pipeline Installation
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#trenchless"
                          aria-controls="trenchless"
                          role="tab"
                          data-toggle="tab"
                        >
                          <i className="fa fa-truck"></i> <br />
                          Trenchless Technology
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#road"
                          aria-controls="road"
                          role="tab"
                          data-toggle="tab"
                        >
                          <i className="fa fa-road"></i> <br />
                          Road Construction
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane active"
                        id="civil"
                      >
                        <div className="single_service_tab">
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="single_tab_content">
                                <div className="head_title">
                                  <h3 style={{ lineHeight: "1.2" }}>
                                    Civil Engineering & Infrastructure
                                  </h3>
                                  <div className="separator"></div>
                                </div>
                                <p>
                                  WCC Infra Private Limited specializes in
                                  earthworks, foundation construction, sewer
                                  networks, and customized infrastructure
                                  solutions. Our expertise ensures high-quality
                                  execution with modern engineering techniques,
                                  delivering durable, cost-effective solutions
                                  that drive urban development and industrial
                                  growth.
                                </p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="single_tab_img">
                                <img
                                  src="assets/images/service/water-pipeline-work-services.jpeg"
                                  alt="Civil Engineering"
                                />
                              </div>
                            </div>
                          </div>
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
      <section id="othersservice" className="othersservice">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main_othersservice_area sections">
                <div className="row">
                  <div className="head_title">
                    <h3>OTHER SERVICES</h3>
                    <div className="separator"></div>
                  </div>
                  <div className="main_othersservice_content">
                    <div className="col-sm-4">
                      <div className="single_othersservice">
                        <div className="single_othersservice_icon">
                          <h4>
                            <span>
                              <i className="fa fa-industry"></i>
                            </span>{" "}
                            Earthworks & Excavation
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single_othersservice">
                        <div className="single_othersservice_icon">
                          <h4>
                            <span>
                              <i className="fa fa-building"></i>
                            </span>{" "}
                            Foundation & Sewer Network Projects
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single_othersservice">
                        <div className="single_othersservice_icon">
                          <h4>
                            <span>
                              <i className="fa fa-recycle"></i>
                            </span>{" "}
                            Sewage Pumping Stations & Treatment Plants
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single_othersservice">
                        <div className="single_othersservice_icon">
                          <h4>
                            <span>
                              <i className="fa fa-wrench"></i>
                            </span>{" "}
                            Equipment & Tools Rental Services
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single_othersservice">
                        <div className="single_othersservice_icon">
                          <h4>
                            <span>
                              <i className="fa fa-cogs"></i>
                            </span>{" "}
                            Project Management & Consultation
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single_othersservice">
                        <div className="single_othersservice_icon">
                          <h4>
                            <span>
                              <i className="fa fa-map"></i>
                            </span>{" "}
                            Urban Development & Planning
                          </h4>
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
    </>
  );
}

export default Service;
