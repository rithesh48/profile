"use client";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="bg-[#2b2b2b] fixed top-6 left-6 h-[92vh] w-72 rounded-2xl p-6 text-center shadow-lg overflow-y-auto z-10">
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <div className="bg-gray-800 p-4 rounded-xl mb-4">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-20 h-20 rounded-full"
          />
        </div>

        {/* Name + Role */}
        <h2 className="text-xl font-semibold">Rithesh</h2>
        <p className="text-gray-400 text-sm">Fullstack Developer Intern</p>

        {/* Contact Info */}
        <h3 className="text-lg font-semibold mt-6 mb-3">Contact</h3>
        <div className="flex flex-col gap-2 mb-6 items-center">
          <a
            href="mailto:ritheshdj889@example.com"
            className="bg-[#1e1e1e] rounded-xl p-2 w-60 text-center shadow-md hover:bg-[#333] transition"
          >
            <h4 className="text-yellow-400 font-bold text-sm flex items-center justify-center gap-1">
              <FaEnvelope /> Email
            </h4>
            <p className="text-xs text-gray-300 break-all">
              ritheshdj889@example.com
            </p>
          </a>

          <a
            href="tel:+9196864XXXXX"
            className="bg-[#1e1e1e] rounded-xl p-2 w-60 text-center shadow-md hover:bg-[#333] transition"
          >
            <h4 className="text-yellow-400 font-bold text-sm flex items-center justify-center gap-1">
              <FaPhone /> Phone
            </h4>
            <p className="text-xs text-gray-300">+91 96864XXXXX</p>
          </a>

          <a
            href="https://www.google.com/maps/place/Tumakuru,+Karnataka,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1e1e1e] rounded-xl p-2 w-60 text-center shadow-md hover:bg-[#333] transition"
          >
            <h4 className="text-yellow-400 font-bold text-sm flex items-center justify-center gap-1">
              <FaMapMarkerAlt /> Location
            </h4>
            <p className="text-xs text-gray-300">Tumakuru, India</p>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-2">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
          >
            <FaLinkedin className="text-[#1e1e1e] text-base" />
          </a>
          <a
            href="https://github.com/rithesh48" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
          >
            <FaGithub className="text-[#1e1e1e] text-base" />
          </a>
          <a
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
          >
            <FaInstagram className="text-[#1e1e1e] text-base" />
          </a>
        </div>
      </div>
    </div>
  );
}
