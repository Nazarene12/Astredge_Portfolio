import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const spanRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const btnRef = useRef(null);
  const floatRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animate span
    if (spanRef.current) {
      gsap.fromTo(
        spanRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: spanRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Animate h1
    if (h1Ref.current) {
      gsap.fromTo(
        h1Ref.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: h1Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Animate p
    if (pRef.current) {
      gsap.fromTo(
        pRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Animate button group
    if (btnRef.current) {
      gsap.fromTo(
        btnRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: btnRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Animate floating elements
    floatRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            delay: 0.7 + i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234F46E5%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h1
            ref={h1Ref}
            className="text-5xl md:text-7xl font-bold text-white mb-0 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AstrEdge
            </span>
          </h1>
          <div className="flex items-center justify-center mb-6">
            <span ref={spanRef} className="text-blue-400 font-medium">
              Edge of Possibilities
            </span>
          </div>

          <div
            ref={btnRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Get Started
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                size={20}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div
        ref={(el) => (floatRefs.current[0] = el)}
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"
      ></div>
      <div
        ref={(el) => (floatRefs.current[1] = el)}
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float-delayed"
      ></div>
      <div
        ref={(el) => (floatRefs.current[2] = el)}
        className="absolute top-20 right-[100px] w-[300px] h-[300px] bg-purple-500/10 rounded-full animate-float-delayed"
      ></div>
      {/* Extra floating elements for techy effect */}
      <div
        ref={(el) => (floatRefs.current[3] = el)}
        className="absolute top-[10%] left-[40%] w-16 h-16 bg-[#73faee]/20 rounded-full animate-float"
      ></div>
      <div
        ref={(el) => (floatRefs.current[4] = el)}
        className="absolute bottom-[15%] left-[15%] w-24 h-24 bg-[#7f66fd]/20 rounded-full animate-float-delayed"
      ></div>
      <div
        ref={(el) => (floatRefs.current[5] = el)}
        className="absolute top-[60%] right-[20%] w-14 h-14 bg-[#73faee]/20 rounded-full animate-float"
      ></div>
      <div
        ref={(el) => (floatRefs.current[6] = el)}
        className="absolute bottom-[8%] right-[8%] w-10 h-10 bg-[#7f66fd]/20 rounded-full animate-float-delayed"
      ></div>
    </section>
  );
};

export default Hero;
