import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon } from 'lucide-react';

const BlogCard = () => {
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

  // Travel-related accent color - teal (#2DD4BF)
  const accentColor = "#2DD4BF";

  return (
    <Card className="w-80 bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute top-0 right-0 m-2">
          <Badge 
            className="bg-black text-white hover:bg-black border-none"
          >
            {post.category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="text-gray-600 flex items-center gap-1">
          <CalendarIcon size={14} className="text-gray-500" />
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-gray-700 line-clamp-3">{post.description}</p>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <span className="text-xs font-bold text-gray-700">{post.author.charAt(0)}</span>
          </div>
          <span className="text-sm text-gray-700">{post.author}</span>
        </div>
        
        <div 
          className="flex items-center gap-1 text-sm font-medium rounded-full px-3 py-1"
          style={{ backgroundColor: accentColor, color: 'white' }}
        >
          <MapPinIcon size={14} />
          <span>Australia</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;