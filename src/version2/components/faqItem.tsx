import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <details
      open={open}
      onClick={(e) => {
        e.preventDefault(); // prevent native toggle
        setOpen(!open);
      }}
      className=" rounded-lg border border-borderPrimary p-4 cursor-pointer"
    >
      <summary className="font-medium text-textSecondary">{question}</summary>
      {open && <p className="mt-2 text-textSecondary">{answer}</p>}
    </details>
  );
};

const FAQ: React.FC = () => {
  const faqData: FAQItemProps[] = [
    {
      question: "What is your development process?",
      answer:
        "Our process involves detailed requirement analysis, design, development, testing, and continuous feedback to ensure top quality.",
    },
    {
      question: "How long does it take to develop an app?",
      answer:
        "Development time varies by project scope but typically ranges from 4 to 12 weeks.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern technologies including React, Node.js, Tailwind CSS, and more depending on the project requirements.",
    },
  ];

  return (
    <section id="faq-section" className="mt-12 max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">FAQs</h2>
      <div className="space-y-2">
        {faqData.map(({ question, answer }, index) => (
          <FAQItem key={index} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
