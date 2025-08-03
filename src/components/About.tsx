import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Users, Award, Zap } from "lucide-react";

const About = () => {
  const aboutRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (cardRefs.current && cardRefs.current.length > 0) {
      cardRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { x: 80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.1,
              delay: i * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }
  }, []);
  const features = [
    {
      icon: Target,
      title: "Customized Solutions",
      description:
        "Tailored services that align with business goals and market trends.",
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description:
        "Utilizing the latest tools and frameworks for future-ready solutions.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "A dedicated team of professionals with vast industry experience.",
    },
    {
      icon: Award,
      title: "End-to-End Support",
      description:
        "Comprehensive service from ideation to execution and beyond.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-950" ref={aboutRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">AstrEdge</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Astredge is a high-impact technology solution provider across web
            and software development, branding, digital marketing and AI/ML
            engineering. Rooted in innovation and a passion for excellence, we
            help businesses grow by crafting tailored, future-ready systems
            built for their unique goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                <feature.icon className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              At AstrEdge, we bring possible engineering into opportunities,
              driving businesses forward with digital excellence. Our expertise
              spans various industries, ensuring our clients achieve sustainable
              growth in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
