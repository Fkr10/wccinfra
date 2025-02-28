import React from "react";

const MapSection = () => {
  return (
    <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
      <iframe
        style={{ border: 0, width: "100%", height: "270px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.351940762292!2d77.450971!3d28.693126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf0e123456789%3A0xabcdef1234567890!2sA-23%2C%20Govind%20Puram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1676961268712!5m2!1sen!2sin"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map - A-23, Govind Puram, Ghaziabad"
      ></iframe>
    </div>
  );
};

export default MapSection;
