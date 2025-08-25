import React from "react";
import case1Img from "../../assets/images/case1.png";
import case2Img from "../../assets/images/case2.png";
import case3Img from "../../assets/images/case3.png";

const projects = [
  {
    img: case1Img,
    title: "E-commerce Platform for Fashion Retailer",
    description: (
      <>
        <span className="text-textHighlight font-normal">
          Developed a scalable e-commerce platform with enhanced user
          experience, resulting in a
          <span className="text-textHighlight">
            {" "}
            30% increase in conversion rates.
          </span>
        </span>
      </>
    ),
  },
  {
    img: case2Img,
    title: "Mobile App for Fitness Tracking",
    description: (
      <>
        <span className="text-textHighlight font-normal">
          Created a fitness tracking app with real-time data analysis, leading
          to a
          <span className="text-textHighlight">
            {" "}
            20% improvement in user engagement.
          </span>
        </span>
      </>
    ),
  },
  {
    img: case3Img,
    title: "Web Application for Healthcare Management",
    description: (
      <>
        <span className="text-textHighlight font-normal">
          Built a secure and efficient web application for managing patient
          records, reducing administrative time by
          <span className="text-textHighlight"> 40%.</span>
        </span>
      </>
    ),
  },
];

const CaseStudy: React.FC = () => (
  <section className="max-w-6xl mx-auto px-4 py-14">
    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-textSecondary">
      Our Work
    </h1>
    <p className="text-lg text-textHighlight mb-8">
      We partner with startups and enterprises to build impactful digital
      products.
    </p>
    <div className="grid md:grid-cols-3 gap-7">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-5">
            <h2 className="font-semibold text-lg text-textSecondary mb-2">
              {project.title}
            </h2>
            <p className="text-sm">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CaseStudy;
