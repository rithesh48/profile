"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Rocket,
  TerminalSquare,
  Globe2,
  MonitorSmartphone,
} from "lucide-react";

// Customize with your own projects and categories
const portfolioItems = [
  { title: "Personal Portfolio Website", category: "Web Development" },
  { title: "Travel Itinerary Generator", category: "Applications" },
  { title: "Payroll Management System", category: "Applications" },
  { title: "Blog Platform", category: "Web Development" },
  { title: "Video Summarizer", category: "Applications" },
];

const categories = ["All", "Applications", "Web Development"];

// Map each project to an icon; adjust order or icons as needed
const icons = [
  <LayoutDashboard size={28} key={0} />,   // Personal Portfolio Website
  <Rocket size={28} key={1} />,            // Travel Itinerary Generator
  <TerminalSquare size={28} key={2} />,    // Payroll Management System
  <Globe2 size={28} key={3} />,            // Blog Platform
  <MonitorSmartphone size={28} key={4} />, // Video Summarizer
];

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-sm font-medium border-b-2 px-3 pb-1 transition ${
              selectedCategory === cat
                ? "text-yellow-400 border-yellow-400"
                : "text-gray-400 border-transparent hover:text-yellow-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1e1e1e] rounded-2xl p-6 flex flex-col items-start justify-start shadow-md hover:scale-[1.02] transition-transform duration-300 space-y-3"
          >
            <div className="text-yellow-400">{icons[idx]}</div>
            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
