import bannerImg from "../../assets/images/banner.png";
import webDevelopmentImg from "../../assets/images/webdevelopment.png";
import mobileDevelopmentImg from "../../assets/images/mobiledevelopment.png";
import uiuxDesignImg from "../../assets/images/uiux.png";
import casestudyBannerImg from "../../assets/images/casestudybanner.png";
import testimonialImg1 from "../../assets/images/testimonial1.png";
import testimonialImg2 from "../../assets/images/testimonial2.png";
import testimonialImg3 from "../../assets/images/testimonial3.png";
import FAQ from "../components/faqItem";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/casestudy");
  };

  return (
    <div className="bg-primaryBackground min-h-screen px-2">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-primaryBackground rounded-xl py-[112px] px-2 mt-6 max-w-5xl mx-auto text-center shadow"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-3 text-textPrimary">
          Web & Mobile App Development for SMEs in Chennai
        </h1>
        <p className="mb-5 text-textPrimary">
          Fast, secure builds that drive business results. We specialize in
          creating tailored web and mobile applications for small and
          medium-sized enterprises in Chennai.
        </p>
        <div className="flex justify-center space-x-3">
          <button
            className="bg-highlightBackground text-textPrimary px-5 py-2 rounded font-medium hover:bg-highlightBackground transition"
            onClick={() => {
              const element = document.getElementById("contact-section");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Book a 15-min Call
          </button>

          <a
            href="https://wa.me/8015758002" // replace with your WhatsApp number, exclude any + or 00
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primaryBackground text-textSecondary px-5 py-2 rounded font-medium hover:bg-primaryBackground transition"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mt-10 max-w-5xl mx-auto">
        <h2 className="text-xl text-textSecondary font-semibold mb-4">
          Outcomes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" p-6 rounded-lg border border-borderPrimary flex flex-col text-start">
            <span className="text-lg font-semibold text-textSecondary mb-2">
              Increased Conversion Rates
            </span>
            <span className="text-textSecondary font-bold text-2xl">+25%</span>
          </div>
          <div className=" p-6 rounded-lg  border border-borderPrimary flex flex-col text-start">
            <span className="text-lg font-semibold text-textSecondary mb-2">
              Improved User Engagement
            </span>
            <span className="text-textSecondary font-bold text-2xl">+30%</span>
          </div>
          <div className=" p-6 rounded-lg  border border-borderPrimary flex flex-col text-start">
            <span className="text-lg font-semibold text-textSecondary mb-2">
              Higher Customer Satisfaction
            </span>
            <span className="text-textSecondary font-bold text-2xl">+20%</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Our Services</h2>
        <div className="grid md:grid-cols-1 gap-7">
          <div className="flex flex-col lg:flex-row justify-between space-x-1">
            <div className="flex-1">
              <h3 className="font-semibold text-textSecondary mb-1">
                Web App Development
              </h3>
              <p className="text-textHighlight mb-3 text-sm">
                Crafting responsive and scalable web applications tailored to
                your business needs. From e-commerce platforms to custom
                dashboards, we deliver solutions that drive growth.
              </p>
            </div>
            <div>
              <img
                src={webDevelopmentImg}
                alt="Web Development"
                className="w-[320px] h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between space-x-1">
            <div className="flex-1">
              <h3 className="font-semibold text-textSecondary mb-1">
                Mobile App Development
              </h3>
              <p className="text-textHighlight mb-3 text-sm">
                Building native and cross-platform mobile apps that engage users
                and enhance your brand presence. We focus on creating intuitive
                and high-performance applications for iOS and Android.
              </p>
            </div>
            <div>
              <img
                src={mobileDevelopmentImg}
                alt="Web Development"
                className="w-[320px] h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between space-x-1">
            <div className="flex-1">
              <h3 className="font-semibold text-textSecondary mb-1">
                UI/UX Design
              </h3>
              <p className="text-textHighlight mb-3 text-sm">
                Creating visually appealing and user-friendly interfaces that
                enhance user experience and drive engagement. Our design process
                focuses on understanding your users and delivering intuitive
                designs.
              </p>
            </div>
            <div>
              <img
                src={uiuxDesignImg}
                alt="Web Development"
                className="w-[320px] h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Featured Case Study</h2>
        <div className="flex flex-col md:flex-row  rounded-lg  overflow-hidden">
          {/* Placeholder for image */}
          <div>
            <img
              src={casestudyBannerImg}
              alt="Web Development"
              className="w-[407px] h-auto rounded-lg"
            />
          </div>
          <div className="flex-1 p-4 flex flex-col ">
            <div>
              <h4 className="font-semibold text-textSecondary text-lg mb-1">
                E-commerce Platform for Local Retailer
              </h4>
              <p className="text-textHighlight text-sm mb-4">
                We developed a robust e-commerce platform for a local retailer,
                resulting in a 40% increase in online sales within the first
                quarter.
              </p>
            </div>
            <button
              onClick={handleClick}
              className="bg-highlightBackground px-4 py-2 text-textPrimary rounded hover:bg-highlightBackground transition w-max"
            >
              View Case Study
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mt-12 max-w-5xl mx-auto">
        <div className="w-fit">
          <h2 className="text-xl font-semibold mb-4">Pricing</h2>
          <div className="p-8 rounded-lg border border-borderPrimary flex flex-col items-start">
            <span className="text-textSecondary font-semibold mb-2">
              Custom Solutions
            </span>
            <div>
              <span className="text-3xl font-bold">From ₹ 50,000</span>
              <span className="text-textSecondary font-semibold  ms-1">
                One-time
              </span>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById("contact-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-secondaryBackground mt-4 w-full text-textSecondary px-5 py-2 rounded-md font-medium hover:bg-secondaryBackground transition"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-7">
          {/* Testimonial Card 1 */}
          <div className=" flex flex-col items-start">
            <div className="mb-4 w-full">
              <img
                src={testimonialImg1}
                alt="Testimonial 1"
                className="lg:w-full w-[200px] h-auto rounded-lg"
              />
            </div>
            <p className="text-textSecondary mb-2 flex-grow text-start text-sm">
              "AstrEdge transformed our online presence with their exceptional
              web app development. Their team was professional, responsive, and
              delivered a solution that exceeded our expectations."
            </p>
            <span className="text-textHighlight text-xs">
              Sarah, Owner of Local Retailer
            </span>
          </div>
          {/* Testimonial Card 2 */}
          <div className=" flex flex-col items-start">
            <div className="mb-4 w-full">
              <img
                src={testimonialImg3}
                alt="Testimonial 1"
                className="lg:w-full w-[200px] h-auto rounded-lg"
              />
            </div>
            <p className="text-textSecondary mb-2 flex-grow text-start text-sm">
              "We partnered with AstrEdge for our mobile app development, and
              the results have been outstanding. The app is intuitive,
              user-friendly, and has significantly improved our customer
              engagement."
            </p>
            <span className="text-textHighlight text-xs">
              David, CEO of Tech Startup
            </span>
          </div>

          {/* Testimonial Card 3 */}
          <div className=" flex flex-col items-start">
            <div className="mb-4 w-full">
              <img
                src={testimonialImg2}
                alt="Testimonial 1"
                className="lg:w-full w-[200px] h-auto rounded-lg"
              />
            </div>
            <p className="text-textSecondary mb-2 flex-grow text-start text-sm">
              "The UI/UX design services from AstrEdge were top-notch. They
              created a visually stunning and highly functional interface that
              perfectly aligns with our brand identity.", and delivered a
              solution that exceeded our expectations."
            </p>
            <span className="text-textHighlight text-xs">
              Emily, Marketing Manager
            </span>
          </div>
        </div>
      </section>

      <FAQ />

      <ContactForm />

      <Footer />
    </div>
  );
};

export default Home;
