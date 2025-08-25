import React from "react";
// @ts-ignore
import SettingIcon from "../../assets/svg/setting.svg?react";
// @ts-ignore
import GrapthIcon from "../../assets/svg/graph.svg?react";
// @ts-ignore
import AnalyticsIcon from "../../assets/svg/analytics.svg?react";
// @ts-ignore
import CodeIcon from "../../assets/svg/code.svg?react";
// @ts-ignore
import CloudIcon from "../../assets/svg/cloud.svg?react";
// @ts-ignore
import DatabaseIcon from "../../assets/svg/database.svg?react";
// @ts-ignore
import AlertIcon from "../../assets/svg/alert.svg?react";
// @ts-ignore
import PeopleIcon from "../../assets/svg/people.svg?react";
// @ts-ignore
import PhoneIcon from "../../assets/svg/phone.svg?react";

const servicesData = [
  {
    category: "Product Engineering",
    description:
      "Our product engineering services cover the entire lifecycle of your digital product, from concept to deployment and beyond. We leverage cutting-edge technologies and agile methodologies to deliver high-quality, scalable, and user-centric solutions.",
    services: [
      {
        icon: <CodeIcon className="h-6 w-6 text-gray-500 mb-2" />,

        title: "Web & Mobile App Development",
        description:
          "Crafting responsive and intuitive web and mobile applications tailored to your business needs.",
      },
      {
        icon: <PhoneIcon className="h-6 w-6 text-gray-500 mb-2" />,
        title: "Cloud Solutions",
        description:
          "Designing and implementing scalable cloud solutions to optimize performance and reduce costs.",
      },
      {
        icon: <CloudIcon className="h-6 w-6 text-gray-500 mb-2" />,
        title: "API Development",
        description:
          "Building robust and secure APIs to enable seamless integration with other systems.",
      },
    ],
  },
  {
    category: "Brand & Growth",
    description:
      "Our brand and growth services focus on creating a strong brand identity and driving sustainable growth for your business. We combine creative design with data-driven strategies to maximize your market impact.",
    services: [
      {
        icon: <AnalyticsIcon className="h-6 w-6 text-gray-500 mb-2" />,
        title: "Brand Strategy & Design",
        description:
          "Developing a cohesive brand strategy and visual identity that resonates with your target audience.",
      },
      {
        icon: <PeopleIcon className="h-6 w-6 text-gray-500 mb-2" />,
        title: "User Acquisition & Engagement",
        description:
          "Implementing targeted campaigns to attract and engage your ideal customers.",
      },
      {
        icon: <AlertIcon className="h-6 w-6 text-gray-500 mb-2" />,
        title: "Content Marketing",
        description:
          "Creating compelling content to educate, entertain, and convert your audience.",
      },
    ],
  },
  {
    category: "BPO/Data Ops",
    description:
      "Our BPO and data operations services streamline your business processes and unlock the power of your data. We provide efficient and cost-effective solutions to enhance productivity and decision-making.",
    services: [
      {
        icon: <DatabaseIcon className="h-6 w-6 text-gray-500 mb-2" />,
        title: "Data Management & Analytics",
        description:
          "Collecting, organizing, and analyzing your data to gain valuable insights and drive business growth.",
      },
      {
        icon: <GrapthIcon className="h-6 w-6 text-gray-500 mb-2" />,
        title: "Process Automation",
        description:
          "Automating repetitive tasks and workflows to improve efficiency and reduce errors.",
      },
      {
        icon: <SettingIcon className="h-6 w-6 text-gray-500 mb-2" />,
        title: "Technical Support",
        description:
          "Providing reliable technical support to ensure smooth operations and customer satisfaction.",
      },
    ],
  },
];

const Services: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-bold text-3xl mb-2 text-textSecondary">Services</h1>
      <p className="text-textHighlight mb-10 max-w-prose">
        We offer a comprehensive suite of services designed to help businesses
        thrive in the digital age. From product engineering to brand growth and
        data operations, we provide tailored solutions to meet your unique
        needs.
      </p>

      {servicesData.map(({ category, description, services }) => (
        <div key={category} className="mb-12">
          <h2 className="font-bold text-xl mb-2 text-textSecondary">
            {category}
          </h2>
          <p className="mb-6 text-textSecondary max-w-prose">{description}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ icon, title, description }) => (
              <div
                key={title}
                className="rounded-lg border border-secondaryBackground bg-primaryBackground p-5 flex flex-col gap-2"
              >
                <div>{icon}</div>
                <h3 className="text-textSecondary font-semibold">{title}</h3>
                <p className="text-textHighlight text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
