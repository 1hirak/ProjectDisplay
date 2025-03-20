import React from "react";
import BlogCard from "../design1/BlogCard";
import AlternativeBlogCard from "../design2/AlternativeBlogCard";
import ImprovedBlogCard from "../design3/ImprovedBlogCard";

const page = () => {

  const x = {
    "id": "260",
    "image": "/media/images/279.jpg",
    "title": "Portugal's Coast",
    "author": "Amelia Harris",
    "description": "Towns, and seafood.",
    "date": "",
    "category": "Beach Holidays",
    "countryName": "Portugal"
  }
  return (
    <div
    className="flex gap-3">
      <BlogCard />
      <AlternativeBlogCard />
      <ImprovedBlogCard post={x}/>
    </div>
  );
};

export default page;
