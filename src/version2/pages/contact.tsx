import React from "react";
import ContactForm from "../components/contactForm";

const Contact: React.FC = () => (
  <section className="max-w-5xl mx-auto px-4 py-14">
    <h1 className="text-3xl md:text-4xl font-bold mb-1 text-textSecondary">
      Get in touch
    </h1>
    <p className="text-base text-textHighlight mb-8">
      We're excited to hear from you! Please fill out the form below to tell us
      about your project. We'll get back to you within 24 hours.
    </p>
    <ContactForm visibility={false} />
  </section>
);

export default Contact;
