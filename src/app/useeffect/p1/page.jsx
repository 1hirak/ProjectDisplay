"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

function FetchDataOnMount() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark the component as mounted

    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1&per_page=50");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log("unmounted");
    };
  }, []); // Empty dependency array: runs only on mount

  // If the component hasn't mounted yet, don't render anything
  if (!mounted) {
    return null;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1 suppressHydrationWarning className="flex justify-center text-2xl font-bold mb-4 mt-4 ml-auto mr-auto">
        User Profiles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((user) => (
          <Card key={user.id} className="shadow-md">
            <CardHeader>
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <CardTitle className="text-center mt-2">
                {user.first_name} {user.last_name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Email: {user.email}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default FetchDataOnMount;