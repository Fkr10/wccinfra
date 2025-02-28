import { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await emailjs.send(
        "service_wspjggi", // Replace with your EmailJS Service ID
        "template_k3boat9", // Replace with your EmailJS Template ID
        formData,
        "otr0o2nSh8IfKiWiB" // Replace with your EmailJS Public Key
      );
      setSuccessMessage("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="contact_contant sections">
                {/* Contact Info Section */}
                <div className="col-sm-6">
                  <div className="main_contact_info">
                    <div className="head_title">
                      <h3>CONTACT INFO</h3>
                      <div className="separator"></div>
                    </div>
                    <div className="row">
                      <div className="contact_info_content">
                        <div className="col-sm-12">
                          <div className="single_contact_info">
                            <div className="single_info_icon">
                              <i className="fa fa-home"></i>
                            </div>
                            <div className="single_info_text">
                              <h3>VISIT US</h3>
                              <p>
                                A-23, Block A, Govind Puram, Ghaziabad, Uttar
                                Pradesh 201013, India
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single_contact_info">
                            <div className="single_info_icon">
                              <i className="fa fa-envelope-o"></i>
                            </div>
                            <div className="single_info_text">
                              <h3>MAIL US</h3>
                              <p>
                                <a href="mailto:waseem@wccinfra.com">
                                  waseem@wccinfra.com
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single_contact_info">
                            <div className="single_info_icon">
                              <i className="fa fa-mobile"></i>
                            </div>
                            <div className="single_info_text">
                              <h3>CALL US</h3>
                              <p>+91 983-7352-834</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single_contact_info">
                            <div className="single_info_icon">
                              <i className="fa fa-clock-o"></i>
                            </div>
                            <div className="single_info_text">
                              <h3>WORK HOUR</h3>
                              <p>Mon - Sat: 09:00 AM - 06:00 PM</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form Section */}
                <div className="col-sm-6">
                  <div className="head_title">
                    <h3>LEAVE MESSAGE</h3>
                    <div className="separator"></div>
                  </div>
                  <div className="single_contant_left">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              placeholder="First Name"
                              required
                              value={formData.firstName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              placeholder="Last Name"
                              required
                              value={formData.lastName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              required
                              value={formData.subject}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={8}
                          placeholder="Message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={loading}
                        >
                          {loading ? "Sending..." : "Submit"}
                        </button>
                      </div>

                      {successMessage && (
                        <p style={{ color: "green" }}>{successMessage}</p>
                      )}
                      {errorMessage && (
                        <p style={{ color: "red" }}>{errorMessage}</p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
