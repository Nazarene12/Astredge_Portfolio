import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoImg from "../../assets/images/logo.png"; // Your logo path

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const handleLogoClick = () => {
    navigate("/");
    setDrawerOpen(false);
  };

  const handleFaqClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDrawerOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const faqSection = document.getElementById("faq-section");
        if (faqSection) faqSection.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const faqSection = document.getElementById("faq-section");
      if (faqSection) faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDrawerOpen(false);
    if (location.pathname !== "/contact") {
      navigate("/contact");
    } else {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-8 py-2 bg-white border-b border-gray-100">
        {/* Logo and Brand */}
        <div
          onClick={handleLogoClick}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img
            src={LogoImg}
            alt="AstrEdge Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-bold text-xl text-textSecondary">AstrEdge</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row space-x-4  items-center">
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <a
              href="/services"
              className="text-textSecondary hover:text-textHighlight transition"
            >
              Services
            </a>
            <a
              href="/casestudy"
              className="text-textSecondary hover:text-textHighlight transition"
            >
              Case Studies
            </a>
            <a
              href="/blog"
              className="text-textSecondary hover:text-textHighlight transition"
            >
              Blog
            </a>
            <a
              href="/pricing"
              className="text-textSecondary hover:text-textHighlight transition"
            >
              Pricing
            </a>
            <a
              href="#faq-section"
              onClick={handleFaqClick}
              className="text-textSecondary hover:text-textHighlight transition cursor-pointer"
            >
              FAQs
            </a>
            <a
              href="/about"
              className="text-textSecondary hover:text-textHighlight transition"
            >
              About us
            </a>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex items-center space-x-2">
            <a
              href="/contact"
              onClick={handleBookCallClick}
              className="px-5 py-2 bg-highlightBackground text-textPrimary rounded-md font-medium hover:bg-highlightBackground transition cursor-pointer"
            >
              Book a 15-min Call
            </a>
            <a
              href="https://wa.me/7604946139"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teritaryBackground text-textSecondary px-5 py-2 rounded font-medium hover:bg-teritaryBackground transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDrawer}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-textSecondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Drawer for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          <div className="flex items-center justify-between flex-row mb-6">
            <div
              onClick={handleLogoClick}
              className="flex items-center space-x-2 cursor-pointer "
            >
              <img
                src={LogoImg}
                alt="AstrEdge Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-xl text-textSecondary">
                AstrEdge
              </span>
            </div>
            <svg
              className="w-8 h-8 text-textSecondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setDrawerOpen(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <a
            href="/services"
            onClick={() => setDrawerOpen(false)}
            className="text-textSecondary hover:text-textHighlight transition"
          >
            Services
          </a>
          <a
            href="/casestudy"
            onClick={() => setDrawerOpen(false)}
            className="text-textSecondary hover:text-textHighlight transition"
          >
            Case Studies
          </a>
          <a
            href="/blog"
            onClick={() => setDrawerOpen(false)}
            className="text-textSecondary hover:text-textHighlight transition"
          >
            Blog
          </a>
          <a
            href="/pricing"
            onClick={() => setDrawerOpen(false)}
            className="text-textSecondary hover:text-textHighlight transition"
          >
            Pricing
          </a>
          <a
            href="#faq-section"
            onClick={(e) => {
              handleFaqClick(e);
              setDrawerOpen(false);
            }}
            className="text-textSecondary hover:text-textHighlight transition cursor-pointer"
          >
            FAQs
          </a>
          <a
            href="/about"
            onClick={() => setDrawerOpen(false)}
            className="text-textSecondary hover:text-textHighlight transition"
          >
            About us
          </a>

          <a
            href="/contact"
            onClick={(e) => {
              handleBookCallClick(e);
              setDrawerOpen(false);
            }}
            className="px-5 py-2 bg-highlightBackground text-textPrimary rounded-md font-medium hover:bg-highlightBackground transition cursor-pointer text-center"
          >
            Book a 15-min Call
          </a>
          <a
            href="https://wa.me/8015758002"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDrawerOpen(false)}
            className="bg-teritaryBackground text-textSecondary px-5 py-2 rounded font-medium hover:bg-teritaryBackground transition text-center"
          >
            WhatsApp Us
          </a>
        </nav>
      </div>

      {/* Optional: Overlay behind drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
