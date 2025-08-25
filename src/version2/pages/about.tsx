import React from "react";
import AboutBannerImg from "../../assets/images/aboutbanner.png";
import Team1 from "../../assets/images/team1.png";
import Team2 from "../../assets/images/team2.png";
import Team3 from "../../assets/images/team3.png";
// @ts-ignore
import TickIcon from "../../assets/svg/tick.svg?react";
// @ts-ignore
import LikeIcon from "../../assets/svg/like.svg?react";
// @ts-ignore
import DislikeIcon from "../../assets/svg/dislike.svg?react";
import Review1 from "../../assets/images/review1.png";
import Review2 from "../../assets/images/review2.png";

// Example image paths; replace with your actual images
const teamMembers = [
  {
    name: "Ethan Carter",
    role: "CEO",
    img: Team1,
  },
  {
    name: "Olivia Bennett",
    role: "Lead Designer",
    img: Team2,
  },
  {
    name: "Noah Thompson",
    role: "CTO",
    img: Team3,
  },
];

const values = [
  {
    title: "Expertise",
    desc: "Our team comprises seasoned professionals with extensive experience in web and mobile app development. We stay abreast of the latest technologies and industry trends to deliver cutting-edge solutions.",
  },
  {
    title: "Innovation",
    desc: "We foster a culture of innovation, constantly exploring new ideas and approaches to create unique and impactful digital experiences. Our creative vision ensures that our solutions stand out from the competition.",
  },
  {
    title: "Client-Centric",
    desc: "We prioritize our clients' needs and goals, working closely with them throughout the development process to ensure that the final product aligns perfectly with their vision and objectives.",
  },
];

const testimonials = [
  {
    name: "Sophia Clark",
    date: "2023-08-15",
    rating: 5,
    text: "AstrEdge transformed our online presence with a stunning website and a user-friendly mobile app. Their team was professional, responsive, and delivered exceptional results.",
    likes: 2,
    dislikes: 0,
    img: Review1,
  },
  {
    name: "Liam Davis",
    date: "2023-07-20",
    rating: 5,
    text: "We were impressed by AstrEdge's creativity and technical expertise. They developed a custom solution that perfectly met our needs and exceeded our expectations.",
    likes: 3,
    dislikes: 1,
    img: Review2,
  },
];

const About: React.FC = () => (
  <section className="max-w-5xl mx-auto px-4 py-10">
    {/* Hero Section */}
    <div className="relative rounded-xl w-full overflow-hidden mb-10">
      <div className="relative z-10 flex flex-col justify-center items-start text-start py-[112px] px-[40px]">
        <h1 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
          Crafting Digital Experiences That Drive Success
        </h1>
        <p className="text-textPrimary mb-5">
          We are a Chennai-based web and mobile app studio dedicated to creating
          innovative and user-centric digital solutions. Our team of experts
          combines technical expertise with creative vision to deliver
          exceptional results.
        </p>
        <button className="bg-highlightBackground self-center text-textPrimary px-6 py-2 rounded font-semibold text-base shadow-lg">
          Learn More
        </button>
      </div>
      <img
        src={AboutBannerImg}
        alt="About Hero"
        className="absolute inset-0 w-full h-full object-cover rounded-xl -z-1"
      />
    </div>

    {/* Our Mission */}
    <h2 className="font-bold text-2xl mb-2">Our Mission</h2>
    <p className="mb-8 text-textSecondary max-w-3xl">
      At AstrEdge, our mission is to empower businesses with cutting-edge
      digital solutions that drive growth and enhance user engagement. We strive
      to understand our clients' unique needs and deliver tailored web and
      mobile applications that exceed expectations.
    </p>

    {/* Our Team */}
    <h3 className="font-bold text-xl mb-2">Our Team</h3>
    <div className="flex flex-row gap-8 mb-10">
      {teamMembers.map((member) => (
        <div key={member.name} className="flex flex-col items-center w-32">
          <img
            src={member.img}
            alt={member.name}
            className="w-24 h-24 rounded-full mb-2 object-cover"
          />
          <div className="font-medium">{member.name}</div>
          <div className="text-sm text-textHighlight">{member.role}</div>
        </div>
      ))}
    </div>

    {/* Our Values */}
    <h3 className="font-bold text-xl text-textSecondary mb-10">Our Values</h3>
    <h4 className="text-xl font-bold text-textSecondary mb-2">
      What Sets Us Apart
    </h4>
    <p className="mb-4 text-textSecondary max-w-3xl">
      At AstrEdge, we are committed to delivering exceptional value to our
      clients through a combination of expertise, innovation, and a
      client-centric approach.
    </p>
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {values.map((value) => (
        <div
          key={value.title}
          className="bg-white border border-secondaryBackground rounded-lg p-5"
        >
          <TickIcon className="h-4 w-4 mb-2 text-textSecondary" />
          <h5 className="font-semibold text-textSecondary mb-2">
            {value.title}
          </h5>
          <p className="text-sm text-textHighlight">{value.desc}</p>
        </div>
      ))}
    </div>

    {/* Testimonials */}
    <h3 className="font-bold text-xl mb-4">Testimonials</h3>
    <div className="space-y-6 mb-12">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-white rounded-xl px-6 py-5 shadow flex flex-col gap-2"
        >
          <div className="flex items-center gap-2">
            <img
              src={t.img}
              alt={t.name}
              className="w-10 h-10 rounded-full mb-2 object-cover"
            />
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-textHighlight">{t.date}</div>
            </div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: t.rating }).map((_, idx) => (
              <svg
                key={idx}
                fill="#3b82f6"
                stroke="#3b82f6"
                viewBox="0 0 20 20"
                className="h-4 w-4"
              >
                <polygon points="9.9,1.1 12.3,6.8 18.6,7.7 13.9,12.1 15.3,18.4 9.9,15.3 4.5,18.4 5.9,12.1 1.2,7.7 7.5,6.8 " />
              </svg>
            ))}
          </div>
          <div className="text-textSecondary">{t.text}</div>
          <div className="flex items-center gap-3 mt-1 ">
            <div className="flex items-center gap-1 text-sm">
              <LikeIcon className="h-4 w-4 text-textHighlight" />
              <p className="text-textHighlight text-sm">{t.likes}</p>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <DislikeIcon className="h-4 w-4  text-textHighlight" />
              <p className="text-textHighlight text-sm">{t.dislikes}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA Section */}
    <div className="text-center rounded-xl p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Ready to Transform Your Digital Presence?
      </h2>
      <p className="mb-6 text-textSecondary max-w-2xl mx-auto">
        Contact us today to discuss your project and discover how AstrEdge can
        help you achieve your business goals.
      </p>
      <button className="bg-highlightBackground text-textPrimary px-6 py-2 rounded font-semibold text-base">
        Get a Quote
      </button>
    </div>
  </section>
);

export default About;
