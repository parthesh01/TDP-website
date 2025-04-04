import React from 'react';
import { Button } from '@/components/ui/button';

// Blog post interface
interface BlogPost {
  category: string;
  image: string;
  title: string;
  description: string;
  author: string;
  readTime: string;
}

// Blog post component
const BlogCard: React.FC<BlogPost> = ({ category, image, title, description, author, readTime }) => {
  return (
    <div>
      {/* Image */}
      <div className="mb-4 relative rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute left-0 bottom-0 bg-white px-3 py-1">
          <span className="text-purple-700 uppercase text-xs font-medium tracking-wide">{category}</span>
        </div>
        <div className="absolute right-0 bottom-0 bg-white px-3 py-1">
          <span className="text-gray-600 text-xs">{readTime}</span>
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-teal-700 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <p className="text-gray-800 font-medium uppercase text-xs tracking-wide">{author}</p>
      <div className="mt-4 border-t border-gray-200 pt-4"></div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      category: "DIGITAL MARKETING",
      image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2503c393/blt24dc9c9e0d9cb5a1/6422be5e2e5c733d233af8d7/Select_ball_Champions_Cup_2023.jpg",
      title: "Top Mistakes Organizations Make in B2B Marketing: Part One",
      description: "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
      readTime: "05 min"
    },
    {
      category: "BRANDING",
      image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2503c393/blt24dc9c9e0d9cb5a1/6422be5e2e5c733d233af8d7/Select_ball_Champions_Cup_2023.jpg",
      title: "What is customer service and why is it important?",
      description: "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
      readTime: "05 min"
    },
    {
      category: "ANIMATION",
      image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2503c393/blt24dc9c9e0d9cb5a1/6422be5e2e5c733d233af8d7/Select_ball_Champions_Cup_2023.jpg",
      title: "The 9 best tools for your early-stage startup tech stack",
      description: "Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.",
      author: "FARRIS QUNIBI",
      readTime: "05 min"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-2xl mb-6 md:mb-0">
            Insights and lessons about marketing, digital strategy, growth, SEO, product, and more.
          </h2>
          <Button variant="link" className="text-gray-500 font-medium">
            SEE ALL POSTS
          </Button>
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;