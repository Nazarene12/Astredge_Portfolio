import React from "react";
import { Link } from "react-router-dom"; // Remove if not using react-router
import BlogImg from "../../assets/images/blog.png"; // Replace with your actual image path

const post = {
  title: "How to build a successful app",
  author: "Alex Bennett",
  date: "January 15, 2024",
  image: BlogImg, // Replace with your actual image
  paragraphs: [
    "Building a successful app requires careful planning and execution. Start with a clear understanding of your target audience and their needs. Conduct thorough market research to identify gaps and opportunities. Define your app’s core features and functionalities, prioritizing user experience. Create a detailed roadmap with milestones and timelines. Choose the right technology stack and development team. Implement rigorous testing and quality assurance processes. Launch your app with a comprehensive marketing strategy. Continuously gather user feedback and iterate on your app to ensure long-term success.",
    // You can add more paragraph strings as needed…
    // Each string will become a <p>
  ],
};

const BlogDetail: React.FC = () => (
  <main className="max-w-5xl mx-auto px-4 py-12">
    {/* Breadcrumb */}
    <nav className="text-sm mb-4 text-textHighlight">
      <Link to="/blog" className="hover:underline text-textHighlight">
        Blog
      </Link>
      <span className="mx-1">/</span>
      <span className="text-textSecondary">{post.title}</span>
    </nav>

    {/* Title and Metadata */}
    <h1 className="text-3xl font-bold mb-2 text-textSecondary">{post.title}</h1>
    <p className="mb-6 text-textHighlight">
      By {post.author} · Published on {post.date}
    </p>

    {/* Banner Image */}
    <img
      src={post.image}
      alt={post.title}
      className="w-full mb-8 object-cover h-auto"
    />

    {/* Post Content */}
    <article className="prose prose-neutral prose-lg max-w-none">
      {post.paragraphs.map((para, idx) => (
        <p key={idx} className="mb-6">
          {para}
        </p>
      ))}
    </article>
  </main>
);

export default BlogDetail;
