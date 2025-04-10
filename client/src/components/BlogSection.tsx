import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  image: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  readTime,
  title,
  description,
  author,
}) => {
  return (
    <div className="flex flex-col">
      <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-6 mb-4">
        <span className="text-[#0F2D40] font-medium uppercase tracking-wider text-sm">
          {category}
        </span>
        <span className="text-gray-500 text-sm">{readTime}</span>
      </div>
      <h3 className="text-[#0F2D40] text-2xl font-medium mb-4 hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <span className="text-[#0F2D40] font-medium uppercase tracking-wider text-sm">
        {author}
      </span>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const blogs = [
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      category: "Digital Marketing",
      readTime: "05 min",
      title: "Top Mistakes Organizations Make in B2B Marketing: Part One",
      description:
        "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
      category: "Branding",
      readTime: "05 min",
      title: "What is customer service and why is it important?",
      description:
        "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
      category: "Animation",
      readTime: "05 min",
      title: "The 9 best tools for your early-stage startup tech stack",
      description:
        "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-[#0F2D40] text-4xl sm:text-5xl font-medium max-w-3xl leading-tight">
            Insights and lessons about marketing, digital strategy, growth, SEO,
            product, and more.
          </h2>
          <button className="text-[#0F2D40] font-medium tracking-[0.2em] uppercase text-sm flex items-center gap-2 hover:gap-4 transition-all">
            See all posts
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
