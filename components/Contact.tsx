// 

// pages/contact.tsx or app/contact/page.tsx (Next.js 13+)

export default function Contact() {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
        {/* TODO: Change the page title to your preferred heading */}
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
  
        {/* Contact Form */}
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* TODO: Change placeholder text or add name attributes */}
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="p-3 rounded bg-[#2a2a2a] text-white outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            className="p-3 rounded bg-[#2a2a2a] text-white outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="md:col-span-2 p-3 rounded bg-[#2a2a2a] text-white outline-none"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="md:col-span-2 p-3 rounded bg-[#2a2a2a] text-white outline-none"
            rows={5}
          />
          {/* TODO: Customize button text or styles */}
          <button
            type="submit"
            className="md:col-span-2 p-3 rounded bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  