import React from "react";
import BlogCard from "../design1/BlogCard";
import AlternativeBlogCard from "../design2/AlternativeBlogCard";
import ImprovedBlogCard from "../design3/ImprovedBlogCard";

const page = () => {
  return (
    <div
    className="flex gap-3">
      <BlogCard />
      <AlternativeBlogCard />
      <ImprovedBlogCard />
    </div>
  );
};

export default page;
