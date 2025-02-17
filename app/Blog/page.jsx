"use client";

import { useEffect, useState } from "react";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data/blogPosts.json");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogPosts.map((post) => (
        <div
          className="card bg-white shadow-lg rounded-lg p-4 flex flex-col h-full"
          key={post.id}
        >
          <h2 className="text-[20px] font-bold mb-4">{post.title}</h2>
          <p className="text-base my-4">{post.description}</p>
          <div className="mt-auto flex justify-end">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Lees meer
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}
