import React, { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
  AOS.init();
}, []);

  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md py-6">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-semibold text-blue-600">Adnan K Umraj</div>
          <div>
            <a href="#about" className="text-lg text-gray-700 mx-4 hover:text-blue-600">About</a>
            <a href="#projects" className="text-lg text-gray-700 mx-4 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-lg text-gray-700 mx-4 hover:text-blue-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
<section className="text-center py-24 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white">
  <h1 className="text-6xl font-bold mb-4">Hello, I'm Adnan K Umraj</h1>
  <p className="text-2xl mb-8">A passionate web developer focused on creating stunning websites and applications.</p>
  <a href="#projects" className="text-lg text-blue-600 bg-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
    View My Work
  </a>
</section>

      {/* About Section */}
<section id="about" className="py-24 px-6 bg-white" data-aos="fade-up" data-aos-duration="1000">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Me</h2>
    <p className="text-xl text-gray-700 mb-8">
      I'm a passionate web developer who loves building responsive, user-friendly websites and applications.
      My focus is on creating intuitive, high-performance web experiences using modern technologies like React, Vite, and Tailwind CSS.
    </p>
    <p className="text-lg text-gray-600">
      I believe in continuous learning, collaboration, and delivering high-quality work to exceed user expectations.
    </p>
  </div>
</section>

{/* Projects Section */}
<section id="projects" className="py-24 px-6 bg-white" data-aos="fade-up" data-aos-duration="1000">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-12">My Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project 1 */}
      <div className="bg-white p-6 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
        <img src="https://via.placeholder.com/300" alt="Project 1" className="w-full h-64 object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold text-gray-800">Project 1</h3>
        <p className="mt-4 text-gray-600">A brief description of the project goes here.</p>
        <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">View Project</a>
      </div>

      {/* Project 2 */}
      <div className="bg-white p-6 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
        <img src="https://via.placeholder.com/300" alt="Project 2" className="w-full h-64 object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold text-gray-800">Project 2</h3>
        <p className="mt-4 text-gray-600">A brief description of the project goes here.</p>
        <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">View Project</a>
      </div>

      {/* Project 3 */}
      <div className="bg-white p-6 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
        <img src="https://via.placeholder.com/300" alt="Project 3" className="w-full h-64 object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold text-gray-800">Project 3</h3>
        <p className="mt-4 text-gray-600">A brief description of the project goes here.</p>
        <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">View Project</a>
      </div>
      {/* More projects... */}
    </div>
  </div>
</section>

{/* View My Work Button */}
<a href="#projects" className="text-lg text-blue-600 bg-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transform transition duration-300 hover:scale-105">View My Work</a>


{/* Contact Section */}
<section id="contact" className="py-24 px-6 bg-blue-600 text-white">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>
    <p className="text-xl mb-12">Feel free to reach out for inquiries, collaborations, or just to say hi!</p>

    {/* Email Link */}
    <p className="text-lg">
      You can email me directly at: 
      <a href="mailto:umrajs123@gmail.com" className="text-black-200 hover:text-white"> umrajs123@gmail.com</a>
    </p>

    {/* Contact Form (optional) */}
    <form className="mt-12 max-w-lg mx-auto">
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="text-left mb-2">Name</label>
        <input type="text" id="name" name="name" className="p-3 border border-gray-300 rounded-lg" />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="text-left mb-2">Email</label>
        <input type="email" id="email" name="email" className="p-3 border border-gray-300 rounded-lg" />
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="message" className="text-left mb-2">Message</label>
        <textarea id="message" name="message" rows="4" className="p-3 border border-gray-300 rounded-lg"></textarea>
      </div>
      <button type="submit" className="bg-blue-800 px-6 py-3 text-black rounded-lg hover:bg-blue-700">Send Message</button>
    </form>
  </div>
</section>

{/* Footer Section */}
{/* Footer Section */}
<footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto text-center">
    <p className="text-lg mb-4">Connect with me:</p>
    <div className="flex justify-center space-x-6">
      <a href="https://github.com/umrajs123" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github text-2xl text-gray-300 hover:text-white"></i>
      </a>
      <a href="https://www.linkedin.com/in/iamumraj" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin text-2xl text-gray-300 hover:text-white"></i>
      </a>
      <a href="https://twitter.com/iamumraj" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter text-2xl text-gray-300 hover:text-white"></i>
      </a>
    </div>
    <p className="mt-6 text-gray-400 text-sm">&copy; 2025 Adnan K Umraj. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}

export default App

