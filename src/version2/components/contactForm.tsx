import React from "react";

interface ContactFormProps {
  visibility?: boolean; // optional prop
}

const ContactForm: React.FC<ContactFormProps> = ({ visibility = true }) => {
  return (
    <section id="contact-section" className="mt-12 max-w-5xl mx-auto mb-10">
      {visibility && <h2 className="text-xl font-semibold mb-4">Contact Us</h2>}

      <form className="bg-secondaryBackground rounded-lg shadow p-6 flex flex-col gap-10">
        {/* First row: Name, Email, WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-textSecondary mb-2 text-start text-sm">Name</p>
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-md w-full px-4 py-2"
            />
          </div>
          <div>
            <p className="text-textSecondary mb-2 text-start text-sm">Email</p>
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-md w-full px-4 py-2"
            />
          </div>
          <div>
            <p className="text-textSecondary mb-2 text-start text-sm">Number</p>
            <input
              type="text"
              placeholder="Your WhatsApp Number"
              className="border rounded-md w-full px-4 py-2"
            />
          </div>
        </div>

        {/* Second row: Budget, Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-textSecondary mb-2 text-start text-sm">Budget</p>
            <input
              type="text"
              placeholder="Your Budget"
              className="border rounded-md w-full px-4 py-2"
            />
          </div>
          <div>
            <p className="text-textSecondary mb-2 text-start text-sm">
              Timeline
            </p>
            <input
              type="text"
              placeholder="Your Timeline"
              className="border rounded-md w-full px-4 py-2"
            />
          </div>
        </div>

        {/* Message field spanning 2 columns */}
        <div>
          <p className="text-textSecondary mb-2 text-start text-sm">Message</p>
          <textarea
            rows={4}
            placeholder="Your Message"
            className="border rounded-md w-full px-4 py-2 col-span-2"
          />
        </div>

        {/* Submit button spanning 2 columns */}
        <button
          type="submit"
          className="bg-highlightBackground w-fit text-textPrimary px-6 py-2 rounded font-medium hover:bg-highlightBackground transition col-span-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
