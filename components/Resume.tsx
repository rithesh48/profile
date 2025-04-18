// export default function Resume() {
//     return (
//       <div className="space-y-8">
//         {/* Main heading */}
//         <h1 className="text-3xl font-bold">Resume</h1>
  
//         {/* Education Section */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Education</h2>
//           <div className="space-y-4 pl-4 border-l-4 border-yellow-400">
//             <div>
//               <h3 className="font-bold">Siddaganga Institute of Technology (SIT), Tumakuru</h3>
//               <p>2021 – Present</p>
//               <p>Bachelor of Engineering in Computer Science (Currently Pursuing)</p>
//             </div>
//             <div>
//               <h3 className="font-bold">Vidyaniketan PU College, Tumakuru</h3>
//               <p>2018 – 2020</p>
//               <p>Pre-University Education (Completed)</p>
//             </div>
//             <div>
//               <h3 className="font-bold">Prudence International School,Tumakuru</h3>
//               <p>Secondary Education (10th Grade) – Completed</p>
//             </div>
//           </div>
//         </div>
  
//         {/* Work Experience Section */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
//           <div className="space-y-4 pl-4 border-l-4 border-yellow-400">
//             <div>
//               <h3 className="font-bold">Fullstack Developer Intern &ndash; Stacklane</h3>
//               <p>March 2025 – Present</p>
//               <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
//                 <li>Working across the stack to build and maintain scalable web applications.</li>
//                 <li>Developing frontend components with React and TypeScript.</li>
//                 <li>Integrating backend APIs and optimizing performance.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }


export default function Resume() {
    return (
      <div className="space-y-8">
        {/* Download Button: place resume.pdf in public folder */}
        <a
          href="/resume.pdf"
          download
          className="inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
        >
          Download Resume
        </a>

        {/* Main heading */}
        <h1 className="text-3xl font-bold">Resume</h1>
  
        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-4 pl-4 border-l-4 border-yellow-400">
            <div>
              <h3 className="font-bold">Siddaganga Institute of Technology (SIT), Tumakuru</h3>
              <p>2021 – Present</p>
              <p>Bachelor of Engineering in AI & DS (Currently Pursuing)</p>
            </div>
            <div>
              <h3 className="font-bold">Vidyaniketan PU College, Tumakuru</h3>
              <p>2019 – 2021</p>
              <p>Pre-University Education (Completed)</p>
            </div>
            <div>
              <h3 className="font-bold">Prudence International School, Bengaluru</h3>
              <p>Secondary Education (10th Grade) – Completed</p>
            </div>
          </div>
        </div>
  
        {/* Work Experience Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="space-y-4 pl-4 border-l-4 border-yellow-400">
            <div>
              <h3 className="font-bold">Fullstack Developer Intern – Stacklane</h3>
              <p>March 2025 – Present</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Working across the stack to build and maintain scalable web applications.</li>
                <li>Developing frontend components with React and TypeScript.</li>
                <li>Integrating backend APIs and optimizing performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  