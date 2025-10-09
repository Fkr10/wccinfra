import React from "react";
import CountUp from "react-countup";

function Stats() {
  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <CountUp start={0} end={232} duration={1} />
              <p>Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <CountUp start={0} end={521} duration={1} />
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <CountUp start={0} end={1453} duration={1} />
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <CountUp start={0} end={32} duration={1} />
              <p>Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
