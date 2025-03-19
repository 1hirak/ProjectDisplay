import React from "react";
import ImprovedBlogCard from "../design3/ImprovedBlogCard";
import { data } from "@/data/blogpost";

const cardList = () => {
  return (
    <div
    className="flex flex-wrap gap-4 justify-center">

      {/* <img src="/media/images/10.jpg" alt=""className="w-20 h-20" /> //to test the location*/}
      {data.map((x) => (
        <ImprovedBlogCard key={x.id} post={x} />
      ))}

    </div>
  );
};

export default cardList;
