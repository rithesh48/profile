import { FaCode, FaServer, FaPaintBrush, FaPlug } from "react-icons/fa";

export default function About() {
  return (
    <div className="w-full bg-[#2a2a2a] p-6 rounded-xl shadow">
      <h3 className="text-2xl font-bold mb-4 text-yellow-400">About Me</h3>
      <p className="mb-4">
        My name is Rithesh, and I am a dedicated Fullstack Developer with a comprehensive understanding of modern web technologies. I possess hands-on experience in developing end-to-end web applications using tools such as React, Next.js, Node.js, Express, and MongoDB.
      </p>
      <p className="mb-4">
        I take pride in delivering clean, maintainable code and designing intuitive, responsive user interfaces. My approach emphasizes performance, scalability, and usability, with a focus on aligning technical solutions with business goals.
      </p>
      <p className="mb-6">
        I am committed to continuous learning and professional growth, and I welcome opportunities to contribute to impactful projects.
      </p>

      <h4 className="text-xl font-semibold mb-4 text-white">Areas of Expertise</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3">
          <FaCode className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">Frontend Development</h5>
            <p>Specializing in building responsive and accessible user interfaces using React, Next.js, and Tailwind CSS.</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3">
          <FaServer className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">Backend Development</h5>
            <p>Developing scalable APIs and backend services utilizing Node.js, Express, and MongoDB.</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3">
          <FaPaintBrush className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">UI/UX Design</h5>
            <p>Creating clean and functional designs that enhance user experience and engagement.</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3">
          <FaPlug className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">API Integration</h5>
            <p>Implementing seamless integration with third-party services through RESTful APIs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
