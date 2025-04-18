"use client";

import React from "react";
import { BookOpen, CalendarDays } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Exploring the Evolution of Motorcycles",
    date: "Apr 18, 2025",
    description:
      "This article delves into the engineering marvels and technological advancements in motorcycles over the years, from classic designs to modern innovations.",
  },
  {
    id: 2,
    title: "Future of Automotive Design: 2025 and Beyond",
    date: "Apr 12, 2025",
    description:
      "A look into the automotive industry's trends, innovations in car safety, and the growing role of electric vehicles in shaping the future of transportation.",
  },
  {
    id: 3,
    title: "The Impact of Coding in Modern Innovation",
    date: "Apr 5, 2025",
    description:
      "A deep dive into how software development drives progress in various fields, including tech, healthcare, and entertainment, and the importance of scalable solutions.",
  },
  {
    id: 4,
    title: "Motorcycle Safety: Engineering for Better Protection",
    date: "Mar 28, 2025",
    description:
      "An overview of advancements in motorcycle safety features, including crash avoidance technologies, helmet innovations, and protective gear designs.",
  },
  {
    id: 5,
    title: "Electric Vehicles: Revolutionizing the Car Industry",
    date: "Mar 20, 2025",
    description:
      "Exploring the transition to electric vehicles, the challenges of charging infrastructure, and the environmental benefits of cleaner energy solutions in the automotive sector.",
  },
  {
    id: 6,
    title: "Best Practices for Clean and Efficient Code",
    date: "Mar 10, 2025",
    description:
      "A comprehensive guide to writing clean code, focusing on industry best practices, code maintainability, and efficient design patterns for scalable software solutions.",
  },
];

export default function Blog() {
  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 bg-[#1a1a1a] min-h-screen text-white">
      <h2 className="text-4xl font-bold mb-8">Recent Publications</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#262626] p-5 rounded-2xl shadow hover:shadow-xl transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <BookOpen size={16} />
              <span>Article</span>
              <span className="flex items-center gap-1 ml-auto">
                <CalendarDays size={16} />
                <span>Published {blog.date}</span>
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-300">{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
