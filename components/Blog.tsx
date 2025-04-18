"use client";

import React from "react";
import { BookOpen, CalendarDays } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Flutter vs. Flock: Cross-Platform Evolution",
    date: "Nov 18, 2024",
    description:
      "This article provides a comprehensive comparative analysis of Flutter and Flock, with an emphasis on their respective development trajectories and community-driven enhancements.",
  },
  {
    id: 2,
    title: "The Future of Flutter in 2025",
    date: "Nov 13, 2024",
    description:
      "An in‑depth exploration of Flutter’s projected impact on mobile and web development ecosystems throughout 2025, including emerging trends and use cases.",
  },
  {
    id: 3,
    title: "Top UI Frameworks to Watch in 2025",
    date: "Nov 5, 2024",
    description:
      "A survey of the most influential UI frameworks poised to shape modern application development in 2025, covering Flutter, SwiftUI, Jetpack Compose, and others.",
  },
  {
    id: 4,
    title: "Building Scalable Apps: Architectures that Work",
    date: "Oct 29, 2024",
    description:
      "An examination of best practices in software architecture for crafting scalable, maintainable applications in contemporary development environments.",
  },
  {
    id: 5,
    title: "React vs Vue: Which One Should You Learn in 2025?",
    date: "Oct 20, 2024",
    description:
      "A comparative evaluation of React and Vue, focusing on performance benchmarks, ecosystem robustness, and learning curve considerations for 2025.",
  },
  {
    id: 6,
    title: "10 Tips for Clean Code Every Developer Should Know",
    date: "Oct 10, 2024",
    description:
      "A concise presentation of ten essential practices for writing clear, maintainable code that adheres to industry standards.",
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
