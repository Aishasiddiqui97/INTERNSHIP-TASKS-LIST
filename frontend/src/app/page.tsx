"use client";

import Image from 'next/image';
import Link from 'next/link';
import { contactApi } from '@/lib/api';
import { useState, FormEvent, useEffect, useRef } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      
      if (scrollPos > 800 && scrollPos < 1600) {
        setActiveSection('about');
      } else if (scrollPos > 1600 && scrollPos < 2400) {
        setActiveSection('skills');
      } else if (scrollPos > 2400 && scrollPos < 3200) {
        setActiveSection('projects');
      } else if (scrollPos > 3200) {
        setActiveSection('contact');
      } else {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0B1F] via-[#1A1333] to-[#0F0B1F] text-[#F8F7FF]">
      {/* Navigation with Smooth Scrolling */}
      <nav className="fixed top-0 w-full bg-[#0F0B1F]/90 backdrop-blur-2xl z-50 border-b border-[#00E5C4]/30 shadow-lg shadow-[#00E5C4]/20 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">AS</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  href="#about" 
                  className={`${activeSection === 'about' ? 'text-[#00E5C4]' : 'text-[#F8F7FF]'} hover:text-[#00E5C4] px-3 py-2 rounded-md text-sm font-medium transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-[#00E5C4]/30`}
                >
                  About
                </Link>
                <Link 
                  href="#skills" 
                  className={`${activeSection === 'skills' ? 'text-[#00E5C4]' : 'text-[#F8F7FF]'} hover:text-[#00E5C4] px-3 py-2 rounded-md text-sm font-medium transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-[#00E5C4]/30`}
                >
                  Skills
                </Link>
                <Link 
                  href="#projects" 
                  className={`${activeSection === 'projects' ? 'text-[#00E5C4]' : 'text-[#F8F7FF]'} hover:text-[#00E5C4] px-3 py-2 rounded-md text-sm font-medium transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-[#00E5C4]/30`}
                >
                  Projects
                </Link>
                <Link 
                  href="#contact" 
                  className={`${activeSection === 'contact' ? 'text-[#00E5C4]' : 'text-[#F8F7FF]'} hover:text-[#00E5C4] px-3 py-2 rounded-md text-sm font-medium transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-[#00E5C4]/30`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      {/* Navigation links use native smooth scrolling for #id anchors */}
      </nav>

      {/* Hero Section with 3D Effects */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-[#00E5C4] via-[#D4A24C] to-[#00E5C4] bg-clip-text text-transparent">Aisha A. Siddiqui</span>
              </h1>
              <p className="text-lg md:text-xl text-[#A09FC0] max-w-2xl">
                I’m a passionate and self-driven <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Full Stack Developer & AI Systems Builder</span> from Karachi, Pakistan & also a <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Trader, Fashion Designer, Photographer, and Artist</span> who loves blending technology with creativity.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/aisha-a-siddiqui-3bb140306/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] font-semibold rounded-lg shadow-lg hover:shadow-[#00E5C4]/30 transition-all duration-500 hover:scale-105"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Aishasiddiqui97" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-[#0F0B1F]/30 border border-[#00E5C4]/30 text-[#00E5C4] font-semibold rounded-lg hover:bg-[#00E5C4]/10 transition-all duration-500"
                >
                  GitHub
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] font-semibold rounded-lg shadow-lg hover:shadow-[#00E5C4]/30 transition-all duration-500 hover:scale-105"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] rounded-2xl blur-lg opacity-20 animate-pulse"></div>
                <Image 
                  src="/profile.jpg" 
                  alt="Aisha Siddiqui" 
                  width={400} 
                  height={400} 
                  className="relative rounded-full shadow-2xl"
                />
                <div className="absolute bottom-4 right-4 bg-[#1A1333]/70 backdrop-blur-sm border border-[#00E5C4]/30 rounded-lg px-4 py-2 max-w-xs">
                  <p className="text-sm md:text-base font-medium text-[#A09FC0]">
                    <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Full Stack Developer & ⚡ 5+ AI Systems</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E5C4]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4A24C]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#00E5C4]/5 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#D4A24C]/5 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      {/* 3D Floating Card Container */}
      <div id="about" className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">About Me</h2>
            <p className="text-[#A09FC0] text-lg">
              Hi, I'm <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Aisha A. Siddiqui</span>, a passionate aspiring <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Software Developer</span> from Karachi, Pakistan. I'm currently exploring <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Python development</span>, <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">cloud technologies</span>, <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Docker</span>, <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Kubernetes</span>, and <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">OpenAI SDK</span> while building real-world projects that turn ideas into practical solutions. Alongside my tech journey, I'm a <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">trader</span>, <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">fashion designer</span>, <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">photographer</span>, and <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">artist</span> who loves blending <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">creativity with logic</span>. I enjoy crafting unique <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">digital experiences</span> where <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">technology meets imagination</span>, and I aim to grow in <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">AI</span>, <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">software development</span>, and <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">entrepreneurship</span> to build <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">impactful and innovative solutions</span>.
            </p>

          </div>
          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-[#1A1333] to-[#0F0B1F] rounded-2xl p-6 border border-[#00E5C4]/20 backdrop-blur-xl">
              <h3 className="text-xl font-bold mb-4 text-[#00E5C4]">My Journey</h3>
              <p className="text-[#A09FC0] mb-4">
                From my early days of learning <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">HTML</span>, <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">CSS</span>, and <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Python</span> to now building <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">full-stack applications</span> with <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">modern frameworks</span> and exploring <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">AI tools</span> like <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">OpenAI SDK</span> and <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Claude</span>, my journey has been driven by curiosity and a passion for solving real-world problems through technology.
              </p>
              <p className="text-[#A09FC0]">
                Today, I bridge the gap between <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">design and development</span> by creating <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">digital experiences</span> that are not only <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">functional</span> but also <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">beautiful</span>, <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">meaningful</span>, and <span className="bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">innovative</span>.
              </p>
            </div>
          </div>





        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1333]/50 backdrop-blur-sm border-t border-[#00E5C4]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">My Skills</h2>
            <p className="text-[#A09FC0] max-w-2xl mx-auto">
              A blend of technical expertise, creative vision, and continuous learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#00E5C4]">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Frontend</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Backend</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">AI</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Autonomous AI Agents</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Cloud</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">DevOps</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Full Stack</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Database</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">3D</span>
                </div>
              </div>
            </div>
            <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#00E5C4]">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">English</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Urdu</span>
                </div>
              </div>
            </div>
            <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#00E5C4]">Certifications</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Fashion Design Certification (Garment Construction, Styling & Illustration)</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Photography & Visual Arts Training</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Computer Skills Training</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Trading Basics Training</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Freelancing Skills Development</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-full text-sm font-medium">Creative Writing Workshop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Projects Section */}
          <div id="projects" className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quad Solutions Health */}
              <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#00E5C4]">Quad Solutions Health</h3>
                  <p className="text-[#A09FC0] mb-4">A comprehensive health management platform for clinics and patients — built with Next.js, TypeScript, and MongoDB.</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/Aishasiddiqui97/Quad-solutions-frontend" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">GitHub</a>
                    <a href="https://quad-solutions-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Live Demo</a>
                  </div>
                </div>
              </div>

              {/* Personal AI Employee Hackathon 0 */}
              <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#00E5C4]">Personal AI Employee Hackathon 0: Building Autonomous FTEs</h3>
                  <p className="text-[#A09FC0] mb-4">A pioneering hackathon project focused on building autonomous Full-Time Employees (FTEs) using AI agents, LLM orchestration, and real-world automation — designed to reimagine productivity, scalability, and human-AI collaboration.</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/Aishasiddiqui97/Hackaton-0" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">GitHub</a>
                  </div>
                </div>
              </div>
              {/* Unit Converter */}
              <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#00E5C4]">Unit Converter</h3>
                  <p className="text-[#A09FC0] mb-4">A simple and responsive Unit Converter application that allows users to quickly convert different units such as length, weight, and temperature with accurate results and an easy-to-use interface.</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/aishasiddiqui97/projects-giaic/blob/main/unit_convertor.py" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">GitHub</a>
                    <a href="https://unitconvertorpy-gzjghyusduxm8doedcqdrh.streamlit.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Live Demo</a>
                  </div>
                </div>
              </div>
              {/* Password Strength Meter */}
              <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#00E5C4]">Password Strength Meter</h3>
                  <p className="text-[#A09FC0] mb-4">A Python-based Password Strength Meter that evaluates the strength of passwords based on length, characters, and complexity, providing instant feedback to help users create more secure passwords.</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/aishasiddiqui97/projects-giaic/blob/main/pasword_strenght_meters.py" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">GitHub</a>
                    <a href="https://paswordstrenghtmeterspy-2awyryajvgfaz9ywsqjuqi.streamlit.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Live Demo</a>
                  </div>
                </div>
              </div>
              {/* Library Management */}
              <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#00E5C4]">Library Management</h3>
                  <p className="text-[#A09FC0] mb-4">A Streamlit-based Library Management System that allows users to manage books efficiently by adding, viewing, issuing, and tracking records in a simple and interactive interface.</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/aishasiddiqui97/projects-giaic/blob/main/Library_Management.py" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">GitHub</a>
                    <a href="https://librarymanagementpy-olhpzagzsljg6mqrjraezr.streamlit.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Live Demo</a>
                  </div>
                </div>
              </div>
              {/* Growth Mindset */}
              <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#00E5C4]">Growth Mindset</h3>
                  <p className="text-[#A09FC0] mb-4">A motivational and interactive project focused on developing a growth mindset, encouraging continuous learning, self-improvement, and positive thinking through simple Python/Streamlit-based activities.</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/aishasiddiqui97/project-growth-mindset-/blob/main/project%2014.py" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">GitHub</a>
                    <a href="https://aishasiddiqui97.streamlit.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Live Demo</a>
                  </div>
                </div>
              </div>
              {/* Modern AI Chat Bot */}
              <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#00E5C4]">Modern AI Chat Bot</h3>
                  <p className="text-[#A09FC0] mb-4">An AI-powered chatbot built with Streamlit that enables users to interact in real-time, providing intelligent responses using natural language processing for a smooth conversational experience.</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/aishasiddiqui97/gemini-/blob/main/chatbot_app.py" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">GitHub</a>
                    <a href="https://sodex89xjepehndvvyjpjk.streamlit.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Live Demo</a>
                  </div>
                </div>
              </div>
              {/* Physical AI Humanoid & Robotics */}
              <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#00E5C4]">Physical AI Humanoid & Robotics</h3>
                  <p className="text-[#A09FC0] mb-4">A Physical AI & Robotics educational system developed for a hackathon, explaining core concepts of humanoid robotics, automation, and intelligent systems through structured documentation and practical understanding.</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/Aishasiddiqui97/hackaton1" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">GitHub</a>
                    <a href="https://h-nu-lyart.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Live Demo</a>
                  </div>
                </div>
              </div>
              {/* Todo App */}
              <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#00E5C4]">Todo App</h3>
                  <p className="text-[#A09FC0] mb-4">A modern, fully responsive Todo application built with React.js, allowing users to add, manage, and track tasks efficiently with a smooth and intuitive user interface.</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/Aishasiddiqui97/TODO-EVOLUTION-PHASE-5" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">GitHub</a>
                    <a href="https://todo-evolution-phase-5-qcbh.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Live Demo</a>
                  </div>
                </div>
              </div>
              {/* Face Vitals AI */}
              <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#00E5C4]">Face Vitals AI</h3>
                  <p className="text-[#A09FC0] mb-4">An AI-powered health monitoring system that uses facial analysis to detect vital signs in real time, enabling smart and contactless healthcare solutions.</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/Aishasiddiqui97/Face-Vitals-AI" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Section */}
          <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0B1F]/30 backdrop-blur-sm border-t border-[#00E5C4]/10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Resume</h2>
                <p className="text-[#A09FC0] max-w-2xl mx-auto">
                  View my professional portfolio, education, and experience in fashion design, development, and creative arts.
                </p>
              </div>
              <div className="bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl overflow-hidden shadow-xl">
                {isClient ? (
                  <iframe 
                    src="/resume.pdf" 
                    className="w-full h-[75vh] border-none"
                    title="Aisha Siddiqui Resume"
                    aria-label="PDF resume viewer"
                  >
                    <p className="text-center p-8 text-[#A09FC0]">
                      Your browser doesn't support PDFs. <a href="/resume.pdf" className="text-[#00E5C4] hover:underline" target="_blank" rel="noopener noreferrer">Download the PDF instead</a>.
                    </p>
                  </iframe>
                ) : (
                  <div className="w-full h-[75vh] flex items-center justify-center bg-[#1A1333]/50 rounded-2xl border border-[#00E5C4]/20">
                    <p className="text-[#A09FC0]">Loading resume...</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0B1F]/30 backdrop-blur-sm border-t border-[#00E5C4]/10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] bg-clip-text text-transparent">Get In Touch</h2>
                <p className="text-[#A09FC0] max-w-2xl mx-auto">
                  Have a project in mind or want to collaborate? Feel free to reach out — I'm always open to new opportunities, creative partnerships, and meaningful conversations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl p-6 shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700">
                    <h3 className="text-xl font-bold mb-4 text-[#00E5C4]">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-[#00E5C4] mr-3 mt-1">📧</span>
                        <div>
                          <p className="font-medium">Email</p>
                          <a href="mailto:aishaanjumsiddiqui97@gmail.com" className="text-[#A09FC0] hover:text-[#00E5C4] transition-colors">aishaanjumsiddiqui97@gmail.com</a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#00E5C4] mr-3 mt-1">📱</span>
                        <div>
                          <p className="font-medium">Phone</p>
                          <a href="tel:03323742808" className="text-[#A09FC0] hover:text-[#00E5C4] transition-colors">0332-3742808</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl p-6 shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700">
                    <h3 className="text-xl font-bold mb-4 text-[#00E5C4]">Follow Me</h3>
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href="https://www.linkedin.com/in/aisha-a-siddiqui-3bb140306/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        LinkedIn
                      </a>
                      <a 
                        href="https://github.com/Aishasiddiqui97" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        GitHub
                      </a>
                      <a 
                        href="https://www.facebook.com/profile.php?id=61557075519526" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        📘 Facebook
                      </a>
                      <a 
                        href="https://www.instagram.com/as97982/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        📸 Instagram
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="group relative bg-[#1A1333]/50 backdrop-blur-xl border border-[#00E5C4]/20 rounded-2xl p-6 shadow-xl hover:shadow-[#00E5C4]/30 transition-all duration-700">
                  <h3 className="text-xl font-bold mb-4 text-[#00E5C4]">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#A09FC0] mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 bg-[#0F0B1F]/50 border border-[#00E5C4]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00E5C4]/50 text-[#F8F7FF]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#A09FC0] mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 bg-[#0F0B1F]/50 border border-[#00E5C4]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00E5C4]/50 text-[#F8F7FF]"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#A09FC0] mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        className="w-full px-4 py-2 bg-[#0F0B1F]/50 border border-[#00E5C4]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00E5C4]/50 text-[#F8F7FF]"
                        placeholder="How can I help you?"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#00E5C4] to-[#D4A24C] text-[#0F0B1F] font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

    </div>
  );
}