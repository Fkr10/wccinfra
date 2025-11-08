import React from "react";
import teamData from "../../data/team";

function Teams() {
  return (
    <section id="team" className="team section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Team</h2>
        <p>
          The experienced leadership and engineering teams at WCC Infra deliver
          complex infrastructure projects with safety, quality and on-time
          delivery.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {teamData.map((member, idx) => (
            <div
              key={member.id}
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100 + idx * 100}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src={member.img}
                    className="img-fluid"
                    alt={`${member.name} - ${member.role}`}
                  />
                  <div className="social">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`}>
                        <i className="bi bi-envelope"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;
