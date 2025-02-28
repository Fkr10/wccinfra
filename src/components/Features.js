import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "font-awesome/css/font-awesome.min.css"; // Ensure FontAwesome is imported

function Features() {
  const projects = [
    {
      category: "Infrastructure",
      works: [
        {
          image: "assets/images/service/building-site.jpg",
          title: "Civil Engineering & Infrastructure",
          description:
            "We provide large-scale infrastructure development, including foundation construction, sewer networks, and road rehabilitation.",
          client: "Adani Infra India",
          delivered: "March 2024",
          tags: ["Infrastructure", "Urban Development", "Civil Works"],
        },
      ],
    },
    {
      category: "Pipeline & Water",
      works: [
        {
          image: "assets/images/service/water-pipeline-work-services.jpeg",
          title: "Pipeline Installation & Maintenance",
          description:
            "Expert installation of HDPE, RCC, GRP, and DI pipelines, ensuring long-term efficiency and sustainability.",
          client: "Wave City Pvt Ltd",
          delivered: "April 2023",
          tags: ["Pipeline", "Water Supply", "Sustainability"],
        },
        {
          image: "assets/images/service/building-site.jpg",
          title: "Trenchless Technology",
          description:
            "Advanced trenchless pipeline installation, reducing surface disruption in urban environments.",
          client: "Adani Water Limited",
          delivered: "December 2023",
          tags: ["Trenchless", "Pipe Laying", "Eco-friendly"],
        },
      ],
    },
    {
      category: "Road & Earthworks",
      works: [
        {
          image: "assets/images/service/road.webp",
          title: "Road Construction & Rehabilitation",
          description:
            "Development of high-quality road infrastructure with modern construction techniques.",
          client: "Government of Bihar",
          delivered: "August 2023",
          tags: [
            "Road Construction",
            "Rehabilitation",
            "Public Infrastructure",
          ],
        },
        {
          image: "assets/images/service/truch.jpg",
          title: "Earthworks & Excavation",
          description:
            "Expert excavation services for foundation, land development, and trench digging.",
          client: "Adani Road Transport",
          delivered: "July 2022",
          tags: ["Excavation", "Construction", "Earthworks"],
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(projects[0].category);
  const swiperRef = useRef(null);

  const onTabClick = (category) => {
    setActiveTab(category);
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(0);
    }
  };

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="head_title">
          <h3>FEATURED WORK</h3>
          <div className="separator"></div>
        </div>

        {/* Tab Navigation */}
        <div className="tabs_nav">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => onTabClick(project.category)}
              className={`tab_item ${
                activeTab === project.category ? "active" : ""
              }`}
            >
              {project.category}
            </button>
          ))}
        </div>

        {/* Swiper Slider with Custom Arrows */}
        <div className="swiper_container">
          <button
            className="swiper_arrow left"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <i className="fa fa-chevron-left"></i>
          </button>

          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
          >
            {projects
              .find((project) => project.category === activeTab)
              ?.works.map((work, index) => (
                <SwiperSlide key={index}>
                  <div className="work_slide">
                    <div className="work_image">
                      <img src={work.image} alt={work.title} />
                    </div>
                    <div className="work_details">
                      <h4>{work.title}</h4>
                      <p>{work.description}</p>
                      <ul>
                        <li>
                          <span>Client:</span> {work.client}
                        </li>
                        <li>
                          <span>Delivered:</span> {work.delivered}
                        </li>
                        <li>
                          <span>Tags:</span> {work.tags.join(", ")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <button
            className="swiper_arrow right"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
