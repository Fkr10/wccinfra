import React from "react";

const sliderData = [
  {
    id: 1,
    title: "WELCOME TO WCC INFRA",
    description: "Building Strong Foundations for a Sustainable Future.",
    link: "https://www.youtube.com/@WCCINFRA",
  },
];

function HomeSection() {
  return (
    <section id="home" className="home">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main_home_slider text-center">
                {sliderData.map((slide) => (
                  <div key={slide.id} className="single_home_slider">
                    <div className="main_home">
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                      <div className="home_btn">
                        <a href={slide.link} className="btn btn-primary">
                          LEARN MORE
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
