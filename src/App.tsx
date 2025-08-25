import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./version2/components/navbar";
import Home from "./version2/pages/home";
import Services from "./version2/pages/service";
import CaseStudy from "./version2/pages/casestudy";
import Pricing from "./version2/pages/pricing";
import About from "./version2/pages/about";
import Contact from "./version2/pages/contact";
import Blog from "./version2/pages/blog";
import BlogDetail from "./version2/pages/blogdetaill";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
