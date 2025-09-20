import React from 'react';
import './index.css';
import { FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Top Header */}
<header className="py-8 border-b border-gray-700 text-center space-y-2">
  <h1 className="text-5xl font-extrabold tracking-tight text-green-400 focus:outline-none">
    Alessio Naji-Sepasgozar
  </h1>

  {/* Navigation Links */}
  <nav className="flex justify-center gap-6 mt-2 text-lg">
    <a href="#projects" className="text-green-400 hover:underline">
      Projects
    </a>
    <a href="#contact" className="text-green-400 hover:underline">
      Contact
    </a>
    <a href="#about" className="text-green-400 hover:underline">
  About
</a>
  </nav>

  {/* Email Display */}
  <p className="text-gray-400 text-sm mt-2">
    📧{" "}
    <a
      href="mailto:your.email@example.com"
      className="hover:underline text-green-400"
    >
      alessionaji1@gmail.com
    </a>
  </p>
</header>


      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
          {/* Profile Picture */}
  <img
    src="/alessiosi.jpg"
    alt="Alessio Naji-Sepasgozar"
    className="w-32 sm:w-40 md:w-48 aspect-square rounded-full object-cover border-4 border-green-400 mb-6 mt-6"
  />
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white">
          Software Engineer & Machine Learning Developer
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl text-gray-400">
          I design, build, and deploy intelligent systems—from predictive models
          in sports analytics to full-stack web applications.
        </p>

        {/* Download Resume Button */}
        <div className="mt-6">
          <a
            href="./resume.pdf"
            className="px-6 py-2 border border-green-400 text-green-400 hover:bg-green-500 hover:text-black font-medium rounded-full transition"
          >
            Download Resume
          </a>
        </div>

        {/* LinkedIn Profile Link */}
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/alessio-naji"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:underline text-lg"
          >
            <FaLinkedin size={20} />
            LinkedIn Profile
          </a>
        </div>
      </main>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-10">Projects</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-700 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-white">
               UKNOWBALL - NBA Player Predictive Models
              </h3>
              <p className="text-gray-400 text-sm">
                A machine learning model that predicts NBA player performance
                using XGBoost and MLP.
              </p>
              <a
                href="https://github.com/Anaji00/UKNOWBALL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 text-sm mt-3 inline-block hover:underline"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-700 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-white">
                FabledKnights
              </h3>
              <p className="text-gray-400 text-sm">
                A 2.5D side-scrolling game built with Unity, featuring a unique
                combat system and engaging story.
              </p>
              <a
                href="https://github.com/Anaji00/FabledKnights"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 text-sm mt-3 inline-block hover:underline"
              >
                View on GitHub →
              </a>
            </div>
           {/* Project 2.2 */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-700 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-white">
                TrackApply
              </h3>
              <p className="text-gray-400 text-sm">
                Full-stack job application tracker using ASP.NET Core Web API backend and Angular frontend, 
              with JWT-based authentication, role-secured endpoints, and SQLite-backed persistence
              </p>
              <a
                href="https://github.com/Anaji00/TrackApply"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 text-sm mt-3 inline-block hover:underline"
              >
                View on GitHub →
              </a>
            </div>
            {/* Project 3 */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-700 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Music-R-Us
              </h3>
              <p className="text-gray-400 text-sm">
                A full-stack E-Commerce platform for music enthusiasts.
              </p>
              <a
                href="https://github.com/Anaji00/ECommerce---Music-R-Us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 text-sm mt-3 inline-block hover:underline"
              >
                View on GitHub →
              </a>
            </div>
            {/* Project 4.4 */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-700 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-white">
                DebateAi
              </h3>
              <p className="text-gray-400 text-sm">
                Challenge historical figures and sharpen your skills! Debate style ChatBot built with FastAPI and React.
              </p>
              <a
                href="https://github.com/Anaji00/debateai-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 text-sm mt-3 inline-block hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
<section id="about" className="bg-gray-900 py-16 px-6">
  <div className="max-w-3xl mx-auto text-center space-y-6">
    <h2 className="text-3xl font-bold text-green-400">About Me</h2>
    <p className="text-gray-300 text-2xl">
      I didn’t find programming—<strong>it found me</strong>. For years, I searched for direction, unsure of where my skills and passions aligned. One day, while joking around with friends by editing HTML to prank them, I stumbled into a world that just <em>clicked</em>. What started as playful curiosity quickly turned into obsession. That spark led me down a path of building websites, writing code, and eventually developing deep learning models from scratch.
    </p>
    <p className="text-gray-300 text-2xl">
      I’m a Computer Science graduate who thrives at the intersection of creativity and logic. Along the way, I’ve embraced my unique mind—<strong>living with OCD, Tourette’s, and ADHD</strong>—not as obstacles, but as advantages. These traits push me to notice the smallest details, stay hyper-focused on problems that matter, and think in ways that most wouldn’t.
    </p>
    <p className="text-gray-300 text-2xl">
      Whether it’s crafting sleek user interfaces or training neural networks, I bring relentless energy, empathy, and a hacker’s mindset to everything I build.
    </p>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-16 px-6 mt-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-8">Contact</h2>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Alessio Naji-Sepasgozar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
