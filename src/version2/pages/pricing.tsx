import React from "react";
// @ts-ignore
import TickIcon from "../../assets/svg/tick.svg?react";

const plans = [
  {
    name: "Basic",
    price: 999,
    features: [
      "Website Design",
      "Mobile App Development",
      "Basic SEO",
      "Social Media Marketing",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: 2499,
    features: [
      "Website Design",
      "Mobile App Development",
      "Advanced SEO",
      "Content Marketing",
      "Email Marketing",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: 4999,
    features: [
      "Website Design",
      "Mobile App Development",
      "Full SEO Suite",
      "Content Marketing",
      "Email Marketing",
      "PPC Advertising",
    ],
    highlight: false,
  },
];

const Pricing: React.FC = () => (
  <section className="max-w-6xl mx-auto px-4 py-14">
    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-textSecondary">
      Transparent Pricing
    </h1>
    <p className="text-base text-textHighlight mb-10">
      We believe in clear and upfront pricing. Choose the plan that best fits
      your needs and budget.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mb-10">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="bg-teritaryBackground border rounded-xl p-8 flex flex-col items-start relative"
        >
          <div className="flex flex-row w-full justify-between items-center mb-2">
            <p className="font-semibold text-lg text-textSecondary">
              {plan.name}
            </p>
            {plan.highlight && (
              <p className=" bg-highlightBackground text-white px-3 py-1 text-xs rounded font-medium">
                Recommended
              </p>
            )}
          </div>

          <div className="text-4xl font-bold text-textSecondary mb-1">
            ${plan.price.toLocaleString()}
            <span className="text-base font-normal">/month</span>
          </div>
          <button
            className="w-full bg-secondaryBackground text-textSecondary font-semibold py-2 rounded mb-5 mt-4"
            type="button"
          >
            Get Started
          </button>
          <ul className="space-y-3 w-full text-left text-textSecondary text-base">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <TickIcon className="h-4 w-4 mr-2 text-textSecondary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mb-6">
      <h2 className="text-lg font-semibold text-textSecondary mb-2">
        Custom Pricing
      </h2>
      <p className="text-base text-textSecondary">
        For projects with unique requirements, we offer custom pricing. Contact
        us to discuss your specific needs and receive a personalized quote.
      </p>
    </div>
    <button
      className="bg-highlightBackground text-textPrimary font-semibold py-2 px-6 rounded"
      type="button"
    >
      Contact Us
    </button>
  </section>
);

export default Pricing;
