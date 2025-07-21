import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { tsParticles } from '@tsparticles/engine';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope, 
  FaDownload,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaLinux,
  FaDocker
} from 'react-icons/fa';
import { SiJenkins, SiC } from 'react-icons/si';
import { ChevronDown, Coffee, Wrench } from 'lucide-react';

function App() {
  const [particlesInit, setParticlesInit] = useState(false);

  const terminalCommands = [
    "$ docker build -t myapp .",
    "$ aws s3 ls",
    "$ kubectl get pods",
    "$ terraform apply",
    "$ jenkins-cli build project",
    "# learning CI/CD and automation scripts"
  ];

  const skills = [
    { name: 'HTML', icon: FaHtml5, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: FaJs, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Python', icon: FaPython, color: 'from-blue-400 to-green-400' },
    { name: 'C', icon: SiC, color: 'from-blue-600 to-blue-800' },
    { name: 'Linux', icon: FaLinux, color: 'from-gray-700 to-black' },
    { name: 'Docker', icon: FaDocker, color: 'from-blue-400 to-blue-600' },
    { name: 'Jenkins', icon: SiJenkins, color: 'from-red-500 to-orange-500' }
  ];

  useEffect(() => {
    initParticles();
  }, []);

  const initParticles = async () => {
    await loadSlim(tsParticles);
    setParticlesInit(true);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#00ffff", "#0099ff", "#6600ff", "#ff0099"],
      },
      links: {
        color: "#00ffff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-x-hidden">
      {/* Particles Background */}
      {particlesInit && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Harsh Upadhyay
            </h1>
            <div className="h-16 flex items-center justify-center">
              <TypeWriter 
                text="#!/ Hello world, I'm building automation pipelines"
                className="text-xl md:text-2xl font-mono text-green-400"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              <FaDownload className="inline-block mr-2" />
              Download Resume
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <FaEnvelope className="inline-block mr-2" />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                I'm Harsh, a passionate DevOps fresher exploring cloud technologies, infrastructure automation, 
                and containerization tools. I love simplifying complex deployments and aim to bring efficiency 
                to modern development workflows. My journey in DevOps is driven by curiosity and the desire 
                to bridge the gap between development and operations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`group relative backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 shadow-2xl hover:shadow-2xl transition-all duration-300`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                  <div className="relative z-10 flex flex-col items-center space-y-3">
                    <skill.icon className={`text-4xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} />
                    <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terminal Projects Section */}
      <section id="projects" className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Learning Journey
            </h2>
            <div className="backdrop-blur-lg bg-black/40 rounded-xl border border-green-500/30 shadow-2xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-green-500/30">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-300 font-mono text-sm">harsh@devops:~</span>
              </div>
              <div className="p-6 font-mono text-left space-y-3">
                {terminalCommands.map((command, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`${command.startsWith('#') ? 'text-gray-500' : 'text-green-400'} hover:text-cyan-300 transition-colors duration-300 cursor-pointer`}
                  >
                    {command}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  viewport={{ once: true }}
                  className="text-cyan-400"
                >
                  <span className="animate-pulse">█</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="space-y-6">
                <a 
                  href="mailto:mrharsh6969@gmail.com"
                  className="group flex items-center justify-center space-x-3 text-xl hover:text-cyan-400 transition-colors duration-300"
                >
                  <FaEnvelope className="group-hover:scale-110 transition-transform duration-300" />
                  <span>mrharsh6969@gmail.com</span>
                </a>
                <div className="flex justify-center space-x-8">
                  <a 
                    href="https://github.com/harshupdhyay" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group text-3xl hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <FaGithub className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mr-harsh-37946335b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group text-3xl hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group text-3xl hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <FaInstagram className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center justify-center space-x-2"
          >
            <span>Built with</span>
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Coffee className="text-yellow-400" size={20} />
            </motion.span>
            <span>and</span>
            <motion.span
              animate={{ rotate: [0, 45, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
            >
              <Wrench className="text-cyan-400" size={20} />
            </motion.span>
            <span>by Harsh Upadhyay</span>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

// TypeWriter Component
interface TypeWriterProps {
  text: string;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, text]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  );
};

export default App;