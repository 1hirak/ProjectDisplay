import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  UserIcon,
  MapPinIcon,
  ChevronLeftIcon,
  ShareIcon,
  BookmarkIcon,
  HeartIcon,
} from "lucide-react";

const BlogPost = () => {
  // Blog post data
  const post = {
    id: "a1b2c3d4e5",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", // Using placeholder since we can't access external images
    title: "Journey to the Heart of Paris",
    author: "Emma Thompson",
    description:
      "Discover the charm of Paris with its iconic landmarks and hidden gems.",
    date: "2023-01-15",
    category: "City Breaks",
    countryName: "France",
    blogPost:
      "Paris, the City of Lights, truly lives up to its name. From the moment I stepped off the train, I was captivated by its romantic atmosphere and undeniable charm. My journey began with the Eiffel Tower, of course. Seeing it sparkle at night is a truly magical experience. But beyond the iconic landmarks, I discovered hidden gems like the charming cafes in Le Marais, the vibrant street art in Belleville, and the peaceful serenity of the Luxembourg Gardens. Don't miss a chance to stroll along the Seine, browse the bouquinistes (booksellers), and indulge in a delicious pain au chocolat. Pro-tip: Learn a few basic French phrases – it goes a long way! Paris is a city best explored on foot, allowing you to soak in the atmosphere and stumble upon unexpected treasures. I highly recommend taking a boat tour on the Seine for a different perspective of the city's landmarks. For foodies, a visit to a traditional Parisian bistro is a must. I enjoyed a classic steak frites and a glass of red wine – simple, yet perfect. Paris is more than just a city; it's an experience. It's a place that will stay with you long after you've left.",
  };

  // Travel-related accent color - blue (#4ECDC4) from the original design
  const accentColor = "#4ECDC4";

  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header/Navigation */}
      <nav className="p-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center text-gray-800 hover:text-gray-600 transition-colors"
          >
            <ChevronLeftIcon size={20} />
            <span className="ml-1 text-sm font-medium">Back to Blogs</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <ShareIcon size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <BookmarkIcon size={18} />
          </button>
          <button className="text-gray-500 hover:text-red-500 transition-colors">
            <HeartIcon size={18} />
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="p-6">
        {/* Blog header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge
              className="px-3 py-1 text-xs font-medium text-white"
              style={{ backgroundColor: accentColor }}
            >
              {post.category}
            </Badge>
            <div className="flex items-center text-gray-500 text-sm">
              <CalendarIcon size={14} className="mr-1" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center overflow-hidden">
              <div
                style={{
                  backgroundImage:
                    'url("https://avatar.iran.liara.run/public")',
                  width: "inherit",
                  height: "inherit",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            <div>
              <p className="font-medium text-gray-900">{post.author}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPinIcon
                  size={14}
                  className="mr-1"
                  style={{ color: accentColor }}
                />
                {post.countryName}
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="rounded-lg overflow-hidden mb-8 shadow-md">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog content */}
        <div className="prose max-w-none">
          {post.blogPost.split(".").map(
            (paragraph, index) =>
              paragraph.trim() && (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph.trim()}.
                </p>
              )
          )}
        </div>

        {/* Related posts section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Related post cards */}
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={`https://picsum.photos/300/200`}
                    alt="Related post"
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-4">
                  <Badge
                    className="mb-2 px-2 py-1 text-xs font-medium text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    Travel
                  </Badge>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-black transition-colors">
                    {item === 1
                      ? "Exploring the Vineyards of Bordeaux"
                      : item === 2
                      ? "The Hidden Beaches of Normandy"
                      : "A Weekend in the Loire Valley"}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                    {item === 1
                      ? "Discover the world-famous wine region of France with its rolling hills and picturesque villages."
                      : item === 2
                      ? "Escape the crowds and find secluded beaches along the stunning Normandy coastline."
                      : "Visit magnificent châteaux and sample exquisite cuisine in the heart of France."}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 p-6 rounded-lg bg-gray-50 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Never miss a new adventure
          </h3>
          <p className="text-gray-600 mb-4">
            Subscribe to our newsletter for the latest travel tips and stories.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="px-4 py-2 text-white font-medium rounded-r-md"
              style={{ backgroundColor: accentColor }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 px-6 py-8 bg-gray-50 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Travel Blog. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
