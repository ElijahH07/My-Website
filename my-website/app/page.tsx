import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Moon, Sun, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Gaucho Rocket Avionics",
      description: "Developed PID control algorithms for flywheel stabilization and second-stage ignition timing. Researching Kalman filters for barometric altitude refinement.",
      tech: ["MATLAB", "C++", "Control Systems", "Kalman Filters"],
      category: "Robotics"
    },
    {
      title: "AI Alzheimer's Detection Headset",
      description: "Building camera-based eye detection system with AI filter for early Alzheimer's diagnosis through assistive technology.",
      tech: ["Python", "Computer Vision", "AI/ML"],
      category: "Healthcare"
    },
    {
      title: "Warehouse Inventory Tracker",
      description: "Full-stack Android app for Delta One using .NET MAUI with RFID/Barcode integration and SQL backend for real-time inventory management.",
      tech: [".NET MAUI", "SQL", "RFID", "Android"],
      category: "Full Stack"
    },
    {
      title: "CyberPatriot Competition",
      description: "Led team to National Semifinals, specialized in Cisco networking with Packet Tracer simulations and security implementations.",
      tech: ["Networking", "Cybersecurity", "Cisco"],
      category: "Security"
    }
  ];

  const skills = {
    "Languages": ["C++", "Python", "Java", "MATLAB", "SQL"],
    "Frameworks": [".NET MAUI", "Arduino"],
    "Tools": ["Git", "KiCad", "RFID Hardware"],
    "Specialties": ["Control Systems", "Embedded Systems", "Full Stack Development"]
  };

  const experience = [
    {
      role: "Avionics Team Member",
      org: "Gaucho Rocket Project",
      period: "Sep 2025 - Present",
      highlights: ["PID control optimization", "Flight stability simulations", "Kalman filter research"]
    },
    {
      role: "Software Intern",
      org: "Delta One",
      period: "Jun - Aug 2024",
      highlights: ["Full-stack Android development", "SQL database management", "RFID integration"]
    },
    {
      role: "SAT Math Tutor",
      org: "Private Tutoring",
      period: "Jun - Aug 2024",
      highlights: ["10+ students per session", "200+ point improvements", "Personalized curriculum"]
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            EH
          </div>
          <div className="hidden md:flex gap-8">
            {['Home', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-500'
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
              Elijah Hargreaves
            </h1>
            <p className={`text-xl md:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Computer Engineering @ UCSB
            </p>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'} max-w-2xl mx-auto`}>
              Building intelligent systems from rockets to medical diagnostics. Passionate about control systems, embedded software, and full-stack development.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="https://github.com/ElijahH07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition-transform"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="mailto:elijahchargreaves@gmail.com"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 ${
                darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'
              } transition-colors`}
            >
              <Mail size={20} />
              Contact
            </a>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {["C++", "Python", "MATLAB", "Java", ".NET", "SQL"].map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full text-sm ${
                  darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="mt-12 animate-bounce"
          >
            <ChevronDown size={32} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                    : 'bg-white border-gray-200 hover:border-blue-400 shadow-lg'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-l-4 border-blue-500 ${
                  darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.org}
                    </p>
                  </div>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {exp.period}
                  </span>
                </div>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-blue-500">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-500">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-lg ${
                        darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Awards */}
          <div className={`mt-12 p-6 rounded-xl text-center ${
            darkMode ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
          }`}>
            <h3 className="text-2xl font-bold mb-4">🏆 Awards & Recognition</h3>
            <p className="text-lg">
              <strong>CyberPatriot National Semifinalist</strong> • 2024 & 2025
            </p>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Cyber Defense Varsity Letter
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="mailto:elijahchargreaves@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition-transform text-lg font-semibold"
            >
              <Mail size={24} />
              Email Me
            </a>
            <a
              href="https://github.com/ElijahH07"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-8 py-4 rounded-lg border-2 transition-all hover:scale-105 text-lg font-semibold ${
                darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-white'
              }`}
            >
              <Github size={24} />
              GitHub
            </a>
          </div>
          <p className={`mt-8 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            (562) 762-6052
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${darkMode ? 'bg-gray-900 text-gray-500' : 'bg-white text-gray-400'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <p>© 2025 Elijah Hargreaves. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}