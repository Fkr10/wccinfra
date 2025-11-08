import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | sent | error
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const { name, email, subject, message } = form;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    // simple email regex
    const emailRe = /^\S+@\S+\.\S+$/;
    if (!emailRe.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      let grecaptchaToken = null;
      // Optional reCAPTCHA: requires a global RECAPTCHA_SITE_KEY to be present
      if (window.grecaptcha && window.RECAPTCHA_SITE_KEY) {
        try {
          grecaptchaToken = await window.grecaptcha.execute(
            window.RECAPTCHA_SITE_KEY,
            { action: "contact" }
          );
        } catch (recapErr) {
          // if recaptcha fails, continue without it but log
          console.warn("reCAPTCHA execution failed:", recapErr);
        }
      }

      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("subject", form.subject);
      data.append("message", form.message);
      if (grecaptchaToken) data.append("g-recaptcha-response", grecaptchaToken);

      const resp = await fetch("/forms/contact.php", {
        method: "POST",
        body: data,
        headers: {
          // Let browser set multipart boundary
        },
      });

      if (!resp.ok) {
        const text = await resp.text().catch(() => "Unknown server error");
        setErrorMessage(
          text || "Server returned an error. Please try again later."
        );
        setStatus("error");
        return;
      }

      // Assume success response from server
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed to send message. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Get in touch with WCC Infra Private Limited — for project inquiries,
          partnerships, and support. Reach us by phone, email or using the form
          below.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <iframe
            title="Location map"
            style={{ border: 0, width: "100%", height: "270px" }}
            src="https://maps.google.com/maps?q=23%20Govind%20Puram%20Ghaziabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="row gy-4">
          <div className="col-lg-4">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>23 GOVIND PURAM , GHAZIABAD, Uttar Pradesh, India - 201013</p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@wccinfra.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              onSubmit={submitForm}
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div
                    className="loading"
                    style={{ display: status === "loading" ? "block" : "none" }}
                  >
                    Loading
                  </div>
                  <div
                    className="error-message"
                    style={{ display: status === "error" ? "block" : "none" }}
                  >
                    {errorMessage}
                  </div>
                  <div
                    className="sent-message"
                    style={{ display: status === "sent" ? "block" : "none" }}
                  >
                    Your message has been sent. Thank you!
                  </div>

                  <button type="submit" disabled={status === "loading"}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
