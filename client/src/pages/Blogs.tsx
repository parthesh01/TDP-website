import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blogs: React.FC = () => {
  // Sample blog data
  const featuredBlog = {
    category: "ANIMATION",
    readTime: "05 min",
    title: "The 9 best tools for your early-stage startup tech stack",
    description:
      "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
    author: "FARRIS QUNIBI",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=600&q=80",
  };

  const blogPosts = [
    {
      category: "DIGITAL MARKETING",
      readTime: "05 min",
      title: "Top Mistakes Organizations Make in B2B Marketing: Part One",
      description:
        "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      category: "BRANDING",
      readTime: "05 min",
      title: "What is customer service and why is it important?",
      description:
        "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      category: "ANIMATION",
      readTime: "05 min",
      title: "The 9 best tools for your early-stage startup tech stack",
      description:
        "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      category: "DIGITAL MARKETING",
      readTime: "05 min",
      title: "Top Mistakes Organizations Make in B2B Marketing: Part One",
      description:
        "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      category: "BRANDING",
      readTime: "05 min",
      title: "What is customer service and why is it important?",
      description:
        "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      category: "ANIMATION",
      readTime: "05 min",
      title: "The 9 best tools for your early-stage startup tech stack",
      description:
        "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Introductory Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The Digital Pillar is built to help you grow. This is where our
              team shares insights and lessons about marketing, digital
              strategy, SEO, content, and more.
            </p>
            <div className="mt-8 border-t border-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Featured Image */}
                <div className="lg:w-1/2">
                  <img
                    src={featuredBlog.image}
                    alt="Featured Blog Post"
                    className="w-full h-80 lg:h-full object-cover"
                  />
                </div>

                {/* Featured Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                      {featuredBlog.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {featuredBlog.readTime}
                    </span>
                  </div>

                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredBlog.title}
                  </h1>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredBlog.description}
                  </p>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
                      {featuredBlog.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Blog Post Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Blog Post Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                      {post.author}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
