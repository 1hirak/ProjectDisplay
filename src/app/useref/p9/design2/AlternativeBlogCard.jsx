import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon, UserIcon, ArrowRightIcon } from 'lucide-react';

const AlternativeBlogCard = () => {
  // Mock data from the user's input
  const post = {
    id: "l1m2n3",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    title: "Exploring the Great Ocean Road",
    author: "Theo Wilson",
    description: "Discover the breathtaking coastal views along the Great Ocean Road in Australia.",
    date: "2023-04-05",
    category: "Road Trips"
  };

  // Travel-related accent color - coral/sunset (#FF7E67)
  const accentColor = "#FF7E67";

  return (
    <Card className="w-80 bg-black text-white overflow-hidden shadow-lg">
      <div className="relative">
        {/* Gradient overlay on the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        
        <img 
          src={post.image} 
          alt={post.title}
          className="object-cover w-full h-56 grayscale opacity-80"
        />
        
        {/* Category badge positioned at top */}
        <div className="absolute top-4 left-4 z-20">
          <Badge 
            className="text-xs font-medium border-none"
            style={{ backgroundColor: accentColor }}
          >
            {post.category}
          </Badge>
        </div>
        
        {/* Date positioned at top right */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 text-xs text-gray-200">
          <CalendarIcon size={12} />
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          })}
        </div>
        
        {/* Main content positioned over the image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          
          <div className="flex items-center gap-3 text-gray-300 text-xs mb-4">
            <div className="flex items-center gap-1">
              <UserIcon size={12} />
              {post.author}
            </div>
            
            <div className="flex items-center gap-1">
              <MapPinIcon size={12} />
              Australia
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className="pt-4 pb-0">
        <p className="text-gray-400 text-sm line-clamp-2">{post.description}</p>
      </CardContent>
      
      <CardFooter className="pt-4 pb-4 flex justify-end">
        <button 
          className="flex items-center gap-1 text-sm font-medium rounded-full px-3 py-1 transition-colors duration-300 hover:bg-gray-800"
          style={{ color: accentColor }}
        >
          Read More
          <ArrowRightIcon size={14} />
        </button>
      </CardFooter>
    </Card>
  );
};

export default AlternativeBlogCard;