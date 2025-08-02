import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Database,
  FileText,
  BarChart3,
  Brain,
} from "lucide-react";

const Services = () => {
  const servicesRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Crafting modern, user-friendly, and scalable websites that enhance digital presence.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "Software Development",
      description:
        "Developing custom software solutions to streamline business operations and improve efficiency.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Building high-performance apps for Android and iOS platforms.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description:
        "Creating strong brand identities through innovative designs and strategic messaging.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Implementing SEO, social media strategies, and online advertising for maximum visibility.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Database,
      title: "Data Entry & BPO",
      description:
        "Providing data processing and customer service support to optimize operations.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "Data Digitization",
      description:
        "Transforming physical documents into digital formats for seamless access and storage.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description:
        "Delivering actionable insights and strategies to drive business growth.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Brain,
      title: "AI/ML Engineering",
      description:
        "Leveraging artificial intelligence and machine learning to create smart, automated solutions.",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-black" ref={servicesRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your
            business and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-950/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`bg-gradient-to-br ${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose AstrEdge?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  100+
                </div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
