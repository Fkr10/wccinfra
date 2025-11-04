import React, { useEffect, useRef } from "react";

const Hero = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const onImgLoad = () => {
      // App-level AOS init will handle refresh; try to call refresh if available
      if (
        typeof window !== "undefined" &&
        window.AOS &&
        typeof window.AOS.refresh === "function"
      ) {
        window.AOS.refresh();
      }
    };

    if (img) {
      if (img.complete) onImgLoad();
      img.addEventListener("load", onImgLoad);
    }

    return () => {
      if (img) img.removeEventListener("load", onImgLoad);
    };
  }, []);

  return (
    <section id="hero" className="hero section">
      <img
        ref={imgRef}
        src="/assets/img/hero-bg-abstract.jpg"
        alt=""
        data-aos="fade"
        className=""
      />

      <div className="container">
        <div className="row justify-content-center" data-aos="zoom-out">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>WCC INFRA PVT. LTD.</h1>
            <p>
              From Pipelines to Roads, We Shape Infrastructure That Lasts. <br/>Building the Backbone of Tomorrow. 
            </p>
          </div>
        </div>
        <div className="text-center" data-aos="zoom-out" data-aos-delay="100">
          <a href="#about" className="btn-get-started">
            Explore Our Work
          </a>
        </div>

        <div className="row gy-4 mt-5">
          <div
            className="col-md-6 col-lg-3"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-easel"></i>
              </div>
              <h4 className="title">
                <a href="">Infrastructure Development</a>
              </h4>
              <p className="description">
                Delivering world-class infrastructure projects that strengthen communities and enable growth.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-gem"></i>
              </div>
              <h4 className="title">
                <a href="">Water Pipeline Solutions</a>
              </h4>
              <p className="description">
                Providing sustainable and efficient water management through advanced pipeline construction.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h4 className="title">
                <a href="">Road & Highway Projects</a>
              </h4>
              <p className="description">
                Building durable, safe, and efficient road networks connecting cities and progress.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="zoom-out"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-command"></i>
              </div>
              <h4 className="title">
                <a href="">Industrial & Civil Projects</a>
              </h4>
              <p className="description">
                Executing high-quality civil and industrial construction with precision and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
