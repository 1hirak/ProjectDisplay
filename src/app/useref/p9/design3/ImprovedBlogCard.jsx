import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image'
import { CalendarIcon, UserIcon, MapPinIcon } from 'lucide-react';

  const ImprovedBlogCard = ({post}) => {
  // Mock data from the user's input
  // const post = {
  //   id: "l1m2n3",
  //   image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
  //   title: "Exploring the Great Ocean Road",
  //   author: "Theo Wilson",
  //   description: "Discover the breathtaking coastal views along the Great Ocean Road in Australia.",
  //   date: "2023-04-05",
  //   category: "Road Trips"
  // };

  // Travel-related accent color - aqua blue (#4ECDC4)
  const accentColor = "#4ECDC4";

  return (
    <Card className="w-80 bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-t-0 border-r-0 border-b-0 group" style={{ borderLeftColor: accentColor }}>
      <div className="relative overflow-hidden">
        {/* Image with partial color treatment in default state */}
        <div className="h-48 overflow-hidden">
          <Image
            src={post.image||"/palceholder800_450.webp"} 
            alt={post.title}
            width={800} 
            height={450} 
            className="object-cover w-full h-full filter grayscale-[50%] group-hover:grayscale-0 transform scale-100 group-hover:scale-110 transition-all duration-700"
          />
        </div>
        
        {/* Accent color line that expands on hover */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 transform origin-left scale-x-30 group-hover:scale-x-100 transition-transform duration-500"
          style={{ backgroundColor: accentColor, transform: 'scaleX(0.3)' }}
        ></div>
        
        {/* Category badge that's partially visible by default */}
        <div className="absolute top-4 right-0 ">
          <Badge 
            className="rounded-l-full rounded-r-none pl-4 pr-3 py-1 text-xs font-medium border-none text-white shadow-md"
            style={{ backgroundColor: accentColor }}
          >
            {post.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        {/* Title with partial underline in default state */}
        <h2 className="text-xl font-bold text-gray-900 relative inline-block mb-2">
          {post.title}
          <span 
            className="absolute bottom-0 left-0 w-1/4 h-px bg-black group-hover:w-full transition-all duration-300"
            style={{ height: '1px' }}
          ></span>
        </h2>
        
        {/* Description with better default visibility */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {post.description}
        </p>
        
        {/* Meta information with better default presentation */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <CalendarIcon size={14} className="text-gray-400 transform group-hover:rotate-12 transition-transform duration-300" />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <UserIcon size={14} className="text-gray-400 transform group-hover:scale-110 transition-transform duration-300" />
              {post.author}
            </div>
            
            <div className="flex items-center gap-1">
              <MapPinIcon 
                size={14} 
                className="transform group-hover:translate-y-px transition-transform duration-300"
                style={{ color: accentColor }} 
              />
              <span className="group-hover:font-medium transition-all duration-300">Australia</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Read more button that's partially visible by default */}
      <div className="px-4 pb-4">
        <button 
          className="w-full mt-2 py-2 rounded-md text-white text-sm font-medium border-none opacity-70 group-hover:opacity-100 transition-all duration-500 transform translate-y-0"
          style={{ backgroundColor: accentColor }}
        >
          Read Article
        </button>
      </div>
    </Card>
  );
};

export default ImprovedBlogCard