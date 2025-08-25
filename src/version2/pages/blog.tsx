import React, { useState } from "react";
import Blog1 from "../../assets/images/blog1.png";
import Blog2 from "../../assets/images/blog2.png";
import Blog3 from "../../assets/images/blog3.png";
import Blog4 from "../../assets/images/blog4.png";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Mobile App Development: Trends to Watch in 2024",
    description:
      "Explore the latest trends shaping mobile app development, from AI integration to cross-platform solutions. Stay ahead of the curve with insights from AstrEdge.",
    img: Blog1,
    date: "June 20, 2024",
    category: "Mobile App Development",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with Modern Frameworks",
    description:
      "Learn how to build scalable web applications using modern frameworks like React and Angular. Discover best practices and tips from our expert developers.",
    img: Blog2,
    date: "July 15, 2024",
    category: "Web Development",
    featured: false,
  },
  {
    id: 3,
    title: "Designing User-Centric Interfaces: A Guide to UX/UI Best Practices",
    description:
      "Master the art of designing user-centric interfaces with our comprehensive guide to UX/UI best practices. Enhance user engagement and satisfaction with your applications.",
    img: Blog3,
    date: "July 8, 2024",
    category: "UX/UI Design",
    featured: false,
  },
  {
    id: 4,
    title: "The Importance of Responsive Design in Today’s Digital Landscape",
    description:
      "Understand the critical role of responsive design in ensuring a seamless user experience across all devices. Learn how AstrEdge creates responsive designs that adapt to any screen size.",
    img: Blog4,
    date: "July 1, 2024",
    category: "Industry Trends",
    featured: false,
  },
];

const categories = [
  "Web Development",
  "Mobile App Development",
  "UX/UI Design",
  "Industry Trends",
];

const Blog: React.FC = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/blog/${id}`);
  };

  // Filter posts for the search string (case insensitive)
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
  );

  // Separate featured post
  const featured = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const recents = filteredPosts.filter((p) => p.id !== featured.id);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left/Center: Blog Content */}
      <div className="md:col-span-2 md:order-1 order-2">
        <h1 className="text-3xl font-bold mb-4 text-textSecondary">Blog</h1>
        {/* Featured Post */}
        {featured && (
          <div className="flex flex-col md:flex-row   overflow-hidden mb-8 ">
            <img
              src={featured.img}
              alt={featured.title}
              className="w-[418px] h-auto object-cover rounded-md"
            />
            <div className="flex flex-col p-4">
              <div>
                <h2 className="font-semibold text-lg text-textSecondary mb-2">
                  {featured.title}
                </h2>
                <p className="text-textHighlight mb-4">
                  {featured.description}
                </p>
              </div>
              <button
                onClick={() => handleClick(5)}
                className="bg-highlightBackground text-textPrimary px-4 py-1 rounded font-medium w-max"
              >
                Read More
              </button>
            </div>
          </div>
        )}
        <h2 className="font-semibold text-xl mb-4 text-textSecondary">
          Recent Posts
        </h2>
        <div className="flex flex-col gap-7">
          {recents.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 py-2 pe-2 flex flex-col justify-center">
                <h3 className="font-semibold text-md text-textSecondary">
                  {post.title}
                </h3>
                <p className="text-textHighlight text-sm mb-2">
                  {post.description}
                </p>
                <button className="bg-gray-100 text-gray-700 rounded px-3 py-1 font-medium w-max text-sm">
                  Read More
                </button>
              </div>
              {post.img && (
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-[289px] h-auto object-cover rounded-xl"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: SideBar */}
      <aside className="flex flex-col gap-8 md:order-2 order-1">
        {/* Search Bar */}
        <div className="bg-[#f6fafd] rounded-xl p-3 mb-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md bg-[#f6fafd] px-3 py-2 focus:outline-none text-textSecondary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="bg-[#f6fafd] rounded-xl p-4">
          <div className="font-semibold mb-2 text-textSecondary">
            Categories
          </div>
          <ul className="space-y-1 text-textSecondary flex md:flex-col flex-row md:gap-0 items-center gap-4 text-sm flex-wrap">
            {categories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="bg-[#f6fafd] rounded-xl p-4 hidden md:block">
          <div className="font-semibold mb-2 text-textSecondary">
            Recent Posts
          </div>
          <ul className="space-y-1 text-textSecondary text-sm">
            {blogPosts.slice(1).map((post) => (
              <li key={post.id}>
                {post.title}
                <div className="text-textHighlight text-xs">{post.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default Blog;
